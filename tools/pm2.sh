##############################################################################
# PM2
##############################################################################

# Start commands
pm2 start <file>          # Start an application
pm2 start <app_id>        # Start a stopped application
pm2 start <app_id> ecosystem.config.js # Start an app with the configuration in ecosystem file
pm2 start <file> -i <number_of_instances> # Start an app in cluster mode with n duplicated instances

# Management commands
pm2 ls                    # List all processes
pm2 save                  # Save process list to respawn at reboot
pm2 restart <app_id>      # Restart an app by ID
pm2 reload <app_id>       # Reload an app by ID
pm2 stop <app_id>         # Stop an app by ID
pm2 stop all              # Stop all running instances
pm2 delete <app_id>       # Delete an app by ID
pm2 delete all            # Delete all instances
pm2 ecosystem             # Generate a sample ecosystem.config.js file

# Monitoring
pm2 show <app_id>         # Show a specific app's description
pm2 logs <app_id> --lines=<number_of_lines> # Show the last n lines of logs of an app
pm2 env <app_id>          # Show all environment variables of an app
pm2 monit                 # Monitor all applications' logs, metrics,etc
