##############################################################################
# DRUSH
# Install: https://www.drush.org/install/
# Usage: https://www.drush.org/usage/
##############################################################################


cache clear (cc)        # Clear all caches.

cron                    # Run all cron hooks.

disable (dis)           # Disable one or more modules.

download (dl)           # Download core Drupal and projects like CCK, Zen, etc.

enable (en)             # Enable one or more modules.

eval                    # Evaluate arbitrary php code after bootstrapping Drupal.

help                    # Print this help message. Use --filter to limit command list to one command file (e.g. --filter=pm)

info                    # Release information for a project

installcore (ic)        # Install Drupal core via the specified install profile. Note that updating core with Drush is not yet available. See http://drupal.org/node/434944.

refresh (rf)            # Refresh update status information script Runs the given php script(s) after a full Drupal bootstrap. NOTE: you can't supply absolute paths to the script e.g. ~/Desktop/script.php won't work Desktop/script.php will

sql cli (sqlc)          # Open a SQL command-line interface using Drupal?s credentials.

sql conf                # Print database connection details.

sql connect             # A string for connecting to the DB.

sql dump                # Exports the Drupal DB as SQL using mysqldump.

sql load                # Copy source database to target database.

sql query (sqlq)        # Execute a query against the site database.

status (st)             # Provides a birds-eye view of the current Drupal installation, if any.

statusmodules (sm)      # Show module enabled/disabled status

sync                    # Rsync the Drupal tree to/from another server using ssh.

test clean              # Delete leftover tables and files from prior test runs.

test mail               # Run all tests and mail the results to your team.

uninstall               # Uninstall one or more modules.

update (up)             # Update your project code and apply any database updates required (update.php)

updatecode (upc)        # Update your project code. Moves existing project files to the backup directory specified in the config.

updatedb (updb)         # Execute the update.php process from the command line.

variable delete (vdel)  # Delete a variable.

variable get (vget)     # Get a list of some or all site variables and values.

variable set (vset)     # Set a variable.

watchdog delete (wd)    # Delete all messages or only those of a specified type.

watchdog show (ws)      # Shows recent watchdog log messages. Optionally filter for a specific type.
