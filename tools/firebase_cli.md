# Firebase CLI Guide

Firebase CLI (Command Line Interface) is a powerful tool that allows developers to interact with Firebase services and manage their Firebase projects directly from the command line. It provides a convenient and efficient way to deploy projects, manage databases, configure authentication, and more, streamlining the development and deployment processes.

## Installation

To use the Firebase CLI, you need to have Node.js and npm (Node Package Manager) installed on your system. Follow the steps below to install the Firebase CLI:

1. Install Node.js and npm by downloading the installer from the [official Node.js website](https://nodejs.org/en/download/) and following the installation instructions for your operating system.

2. Once Node.js and npm are installed, open your terminal or command prompt and run the following command to install the Firebase CLI globally:

   ```
   npm install -g firebase-tools
   ```

   This command will download and install the Firebase CLI package from the npm registry.

3. After the installation is complete, you can verify that the Firebase CLI is installed correctly by running the following command:

   ```
   firebase --version
   ```

   If the installation was successful, you will see the version number of the Firebase CLI printed in the terminal.

Congratulations! You have successfully installed the Firebase CLI.

## Usage

The Firebase CLI allows you to interact with Firebase services and manage your Firebase projects from the command line. Here are some common tasks you can perform using the Firebase CLI:

- Initialize a new Firebase project in your current directory.
- Deploy your Firebase project to Firebase hosting.
- Manage Firebase Authentication, Realtime Database, Cloud Firestore, Cloud Functions, and other Firebase services.
- Configure Firebase project settings.
- Interact with Firebase emulators for local development and testing.

To use the Firebase CLI, open your terminal or command prompt and run the `firebase` command followed by the desired command and options.

Here's an example of the basic usage:

```
firebase <command> [options]
```

Replace `<command>` with the specific Firebase command you want to execute, and `[options]` with any additional options or flags required for that command.

For more detailed usage information, you can run the following command:

```
firebase help
```

This command will display the available Firebase commands and provide detailed information about each command.

## Commands

Here are the commonly used Firebase CLI commands along with a brief explanation, syntax, and an example for each command:

- `firebase init`: Initializes a new Firebase project in the current directory.

  - Syntax: `firebase init [options]`
  - Example: `firebase init hosting` initializes Firebase Hosting for the current project.

- `firebase deploy`: Deploys your Firebase project to Firebase hosting or other Firebase services.

  - Syntax: `firebase deploy [options]`
  - Example: `firebase deploy --only hosting` deploys only the Firebase Hosting content.

- `firebase serve`: Starts local development servers and Firebase emulators.

  - Syntax: `firebase serve [options]`
  - Example: `firebase serve --only functions,hosting` starts the Firebase emulators for functions and hosting.

- `firebase login`: Authenticates the Firebase CLI with your Firebase account.

  - Syntax: `firebase login [options]`
  - Example: `firebase login --no-localhost` initiates an interactive login session without connecting to localhost.

- `firebase logout`: Logs out from the Firebase CLI.

  - Syntax: `firebase logout [options]`
  - Example: `firebase logout` logs out the currently authenticated user.

- `firebase use`: Sets the active Firebase project for the current directory.

  - Syntax: `firebase use <project_id> [options]`
  - Example: `firebase use my-project` sets "my-project" as the active Firebase project.

- `firebase functions`: Interacts with Firebase Cloud Functions.

  - Syntax: `firebase functions:command [options]`
  - Example: `firebase functions:delete [function_name]` deletes all functions that match the specified name in all regions.

- `firebase database`: Interacts with Firebase Realtime Database.

  - Syntax: `firebase database:command [options]`
  - Example: `firebase database:get /users` retrieves data from the Firebase Realtime Database.

- `firebase firestore`: Interacts with Firebase Cloud Firestore.

  - Syntax: `firebase firestore:command [options]`
  - Example: `firebase firestore:delete collection/document` deletes a document from the Firestore database.

- `firebase auth`: Interacts with Firebase Authentication.

  - Syntax: `firebase auth:command [options]`
  - Example: `firebase auth:export users.csv` exports user data to a CSV file.

- `firebase hosting`: Interacts with Firebase Hosting.

  - Syntax: `firebase hosting:command [options]`
  - Example: `firebase hosting:disable` disables Firebase Hosting for the current project.

- `firebase remoteconfig`: Interacts with Firebase Remote Config.

  - Syntax: `firebase remoteconfig:command [options]`
  - Example: `firebase remoteconfig:get template` retrieves the Remote Config template.

- `firebase ext`: Interacts with Firebase Extensions.

  - Syntax: `firebase ext:command [options]`
  - Example: `firebase ext:install firebase/delete-user-data` installs the Firebase Extension named "firebase/delete-user-data".

- `firebase appdistribution`: Interacts with Firebase App Distribution.

  - Syntax: `firebase appdistribution:command [options]`
  - Example: `firebase appdistribution:testers:add` Adds testers to the project.

- `firebase use --add`: Adds an existing Firebase project to the current directory

  - Syntax: `firebase use --add`
  - Example: `firebase use --add` interactively adds an existing Firebase project.

- `firebase projects:create`: Creates a new Firebase project.
  - Syntax: `firebase projects:create [options]`
  - Example: `firebase projects:create --display-name "My Project"` creates a new Firebase project with the given display name.

These are just a few examples of the available commands. You can explore more commands and their options by running `firebase help` or visiting the [official Firebase CLI documentation](https://firebase.google.com/docs/cli).
