# *****************************************************************************
# LOCAL ENVIRONMENT
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


# *****************************************************************************
# CLI COMMANDS SUMMARY
# https://docs.nanobox.io/cli/
# *****************************************************************************


nanobox-update         # Update your Nanobox CLI to the most recent version
nanobox run            # Starts your local environment, allowing you to run your app
nanobox build          # Builds your app's runtime
nanobox compile        # Compiles your app's code into a deployable package
nanobox remote         # Manages connections to remote applications
nanobox deploy         # Deploys your app to a live app
nanobox console        # Opens an interactive terminal from inside a component in your live app
nanobox info           # Displays information about the app and its components
nanobox tunnel         # Establishes a secure tunnel from your local machine to a running service
nanobox evar           # Manages environment variables on your production environment
nanobox dns            # Manage DNS aliases for local applications
nanobox log            # View and streams application logs
nanobox configure      # Walks through prompts to configure Nanobox
nanobox update-images  # Downloads the most recent versions of Nanobox docker images
nanobox login          # Authenticates your Nanobox client with your nanobox.io account
nanobox logout         # Removes your nanobox.io api token from your local nanobox client
nanobox start          # Starts the Nanobox container
nanobox stop           # Stops the Nanobox container
nanobox status         # Display the status of Nanobox & apps
nanobox destroy        # Destroys the current project and removes it from Nanobox
nanobox clean          # Clean out any environments that no longer exist
nanobox implode        # Removes all Nanobox-created containers, files, & data
nanobox version        # Show the current Nanobox version

--help                 # Displays help information about the CLI and specific commands
--debug                # In the event of a failure, drop into a debug context
-t, --trace            # Increases display output and sets level to 'trace'
-v, --verbose          # Increases display output and sets level to 'debug'
-f, --force            # Forces the command to run without any confirmation. Use responsibly!
