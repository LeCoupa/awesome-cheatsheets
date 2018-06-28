# *****************************************************************************
# CLI COMMANDS SUMMARY
# https://docs.nanobox.io/cli/
# *****************************************************************************


# Update your Nanobox CLI to the most recent version
nanobox-update

# Starts your local environment, allowing you to run your app
nanobox run [<command>]

# Builds your app's runtime
nanobox build

# Compiles your app's code into a deployable package
nanobox compile

# Manages connections to remote applications
nanobox remote add <app-name> [<remote-alias>]
nanobox remote rm <remote-alias>
nanobox remote ls

# Deploys your app to a live app
nanobox deploy [<dry-run | {remote-alias}>] [-m <message>]

# Opens an interactive terminal from inside a component in your live app
nanobox console [<local | dry-run | {remote-alias}>] <component.id>

# Displays information about the app and its components
nanobox info [<local | dry-run | {remote-alias}>]

# Establishes a secure tunnel from your local machine to a running service
nanobox tunnel [<remote-alias>] <component.id> [-p <local-port>[:[<remote-port>]]]

# Manages environment variables on your production environment
nanobox evar add [<local | dry-run | {remote-alias}>] <key1>=<value1> <key2>=<value2>
nanobox evar load [<local | dry-run | {remote-alias}>] path/to/file
nanobox evar rm [<local | dry-run | {remote-alias}>] <key1> <key2>
nanobox evar ls [<local | dry-run | {remote-alias}>]

# Manage DNS aliases for local applications
nanobox dns add <local | dry-run> <hostname>
nanobox dns rm <local | dry-run> <hostname>
nanobox dns ls <local | dry-run>

# View and streams application logs
nanobox log [<dry-run | {remote-alias}>]
nanobox log [<dry-run | {remote-alias}>] -f
nanobox log [<dry-run | {remote-alias}>] -n <number>

# Walks through prompts to configure Nanobox
nanobox config set <config-key> <config-value>
nanobox config get <config-key>
nanobox config ls

# Downloads the most recent versions of Nanobox docker images
nanobox update-images

# Authenticates your Nanobox client with your nanobox.io account
nanobox login

# Removes your nanobox.io api token from your local nanobox client
nanobox logout

# Starts the Nanobox container
nanobox start

# Stops the Nanobox container
nanobox stop

# Display the status of Nanobox & apps
nanobox status

# Destroys the current project and removes it from Nanobox
nanobox destroy [<local | dry-run>]

# Clean out any environments that no longer exist
nanobox clean

# Removes all Nanobox-created containers, files, & data
nanobox implode

# Show the current Nanobox version
nanobox version

--help                 # Displays help information about the CLI and specific commands
--debug                # In the event of a failure, drop into a debug context
-t, --trace            # Increases display output and sets level to 'trace'
-v, --verbose          # Increases display output and sets level to 'debug'
-f, --force            # Forces the command to run without any confirmation. Use responsibly!


# *****************************************************************************
# LOCAL ENVIRONMENT
# https://docs.nanobox.io/workflow/modifying-your-app/
# *****************************************************************************


# Add a convenient way to access your app from the browser
nanobox dns add local vue.dev
nanobox dns add local django.dev

# Run your app as you would normally, with Nanobox
nanobox run npm run dev --host 0.0.0.0
nanobox run python manage.py runserver 0.0.0.0:8000

# View info about the app and its components for a given environment
nanobox info local


# *****************************************************************************
# DRY RUN ENVIRONMENT
# https://docs.nanobox.io/workflow/dry-run/
# *****************************************************************************


# Add a DNS Alias to a dry-run app
nanobox dns add dry-run django.preview

# Preview your app locally
nanobox deploy dry-run

# Add environment variables to dry-run
nanobox evar add dry-run ENV=staging PROCESS_JOBS=true

# Console into web.site in a dry-run app
nanobox console dry-run web.site

# Output the connection credentials for your dry-run components
nanobox info dry-run


# *****************************************************************************
# PRODUCTION ENVIRONMENT
# https://docs.nanobox.io/workflow/deploy-code/
# *****************************************************************************


# Add your live app as a remote
nanobox remote add app-name

# Deploy to your remote server(s)
nanobox deploy

# Drop you into an interactive console inside a component running on production
nanobox console <component.id>

# View logs from your app
nanobox log [<dry-run | {remote-alias}>]
nanobox log [<dry-run | {remote-alias}>] -n 100

# Creates a secure tunnel from your local machine to a production data component
# Local port can be omitted
nanobox tunnel <component.id> -p <local_port>


# *****************************************************************************
# ENVIRONMENT VARIABLES
# https://docs.nanobox.io/cli/evar/
# *****************************************************************************


# Add an environment variable
nanobox evar add local KEY1=VALUE1 KEY2=VALUE2

# Add environment variables from a file
nanobox evar load local path/to/evar-file

# Remove an environment variable
nanobox evar rm local KEY1

# List all variables for a given environment
nanobox evar ls local
