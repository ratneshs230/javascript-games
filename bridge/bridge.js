const { execSync } = require('child_process');
const { Configuration, OpenAIApi } = require('openai');

function runCopilot(instructions) {
  try {
    // Assuming GitHub Copilot CLI is installed and configured
    const output = execSync(`copilot write "${instructions}"`, { encoding: 'utf8' });
    return output;
  } catch (err) {
    console.error('Error running Copilot CLI:', err.message);
    return null;
  }
}

async function main() {
  const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
  const openai = new OpenAIApi(configuration);

  const userTask = process.argv.slice(2).join(' ') || 'Create a simple hello world function in JavaScript';

  const prompt = `You are bridging ChatGPT and GitHub Copilot. Understand this task and produce concise instructions for Copilot:\nTask: ${userTask}`;

  const chatResponse = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });

  const instructions = chatResponse.data.choices[0].message.content.trim();
  console.log('Generated instructions:\n', instructions);

  const copilotOutput = runCopilot(instructions);
  if (copilotOutput) {
    console.log('Copilot output:\n', copilotOutput);
  } else {
    console.log('Copilot CLI output not available.');
  }
}

main().catch(err => console.error(err));
