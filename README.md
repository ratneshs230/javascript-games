# javascript-games

This repository now includes a simple prototype for bridging **ChatGPT** with **GitHub Copilot**. The script uses the OpenAI API to interpret a task description and then forwards concise instructions to the GitHub Copilot CLI.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Export your OpenAI API key:

   ```bash
   export OPENAI_API_KEY=YOUR_KEY
   ```

3. Ensure the GitHub Copilot CLI (`copilot`) is installed and authenticated.

## Usage

Run the bridge script with a natural language task description:

```bash
node bridge/bridge.js "build a function that reverses a string"
```

The script asks ChatGPT to convert the task into clear instructions for Copilot and then executes the Copilot CLI. The Copilot output will be printed to the console.

*Note:* This prototype assumes the `copilot` command is available on your system and that you have a valid OpenAI API key.

