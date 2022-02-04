# *****************************************************************************
# CODING STYLE 
# *****************************************************************************

#-----> Make your code readable:

# 1. Avoid abbreviating variable names.
# 2. Write out your function argument names.
# 3. Document your classes and methods.
# 4. Comment your code.
# 5. Refactor repeated lines of code into reusable functions or methods.
# 6. Keep functions and methods short. A good rule of thumb is that scrolling.

# Should not be necessary to read an entire function or method.
# Avoid using personal pronouns in comments, e.g. "We check request method" rather than "Get request method".
# Use underscores instead of camelCase, e.g. 'loop_counter' instead of 'LoopCounter'.
# Use Flake8 for Checking Code Quality.


#-----> Imports:

# Imports should be grouped in the following order:
# 1. __future__ imports.
# 2. Standard library imports.
# 3. Third-party app imports.
# 4. Core Django imports.
# 5. Your apps imports.

# Use explicit relative imports.
# Avoid using import * in your modules.


#-----> Templates:

# In Django templates put one space between the curly brackets and tag contents, e.g {{ foo }} instead {{foo}}.


#-----> Models:

# Field names in model should be all lowercase, use underscores instead of camelCase again.
# After the fields are defined in the model class, write the Meta class.
# If you have choices in your fields, define each choice as a list of tuples, with an all-uppercase name as a class attribute on the model.


#-----> Others
# Use underscores in URL pattern names rather than dashes.



# *****************************************************************************
# MODELS
# *****************************************************************************

# 1. Register your app model in admin file in your app folder to use admin panel in django.
# 2. Create a superuser using command python manage.py createsuperuser.
# 3. If you've created a new app, you must enter your app name in INSTALLED_APPS in the setting.py file before makemigration so that Django can track your model changes.
# 4. Remember to migrate after you change anything in your models.py file.
# 5. Use /admin/ page to add data in your tables for testing purpose.



# *****************************************************************************
# DJANGO-ADMIN
# *****************************************************************************

'django-admin check'                       # Checks the entire django project for potential problems.
'django-admin changepassword <username>'   # Allows changing a user’s password. It prompts you to enter a new password twice for the given user.
'django-admin clearsessions'               # Can be run as a cron job or directly to clean out expired sessions.
'django-admin collectstatic'               # Helps to collect all the static files in the one mentioned directory.
'django-admin createsuperuser'             # Creates a superuser account (a user who has all permissions).
'django-admin compilemessages'             # Compiles .po files to .mo files for use with builtin gettext support.
'django-admin createcachetable'            # Creates the tables needed to use the SQL cache backend.
'django-admin dbshell'                     # Runs the command-line client for specified database, or the default database if none is provided.
'django-admin diffsettings'                # Displays differences between the current settings.py and Django's default settings.
'django-admin dumpdata'                    # Output the contents of the database as a fixture of the given format (using each model's default manager unless --all is specified).
'django-admin flush'                       # Removes ALL DATA from the database, including data added during migrations. Does not achieve a "fresh install" state.
'django-admin inspectdb'                   # Introspects the database tables in the given database and outputs a Django model module.
'django-admin loaddata'                    # Installs the named fixture(s) in the database.
'django-admin makemessages'                # Runs over the entire source tree of the current directory and pulls out all strings marked for translation. It creates (or updates) a message file in the conf/locale (in the django tree) or locale (for projects and applications) directory. You must run this command with one of either the --locale, --exclude, or --all options.
'django-admin help'                        # Display usage information and a list of the commands provided by each application.
'django-admin makemigrations'              # Create new migrations to the database based on the changes detected in the models.
'django-admin migrate'                     # Synchronize the database state with your current state project models and migrations.
'django-admin remove_stale_contenttypes'   # Deletes stale content types (from deleted models) in your database.
'django-admin runserver <port>'            # Start the development webserver at 127.0.0.1 with the port <port> (default is 8000).
'django-admin sendtestemail'               # Sends a test email to the email addresses specified as arguments.
'django-admin shell'                       # Runs a Python interactive interpreter. Tries to use IPython or bpython, if one of them is available. Any standard input is executed as code.
'django-admin showmigrations'              # Shows all available migrations for the current project.
'django-admin sqlflush'                    # Returns a list of the SQL statements required to return all tables in the database to the state they were in just after they were installed.
'django-admin sqlmigrate'                  # Prints the SQL statements for the named migration.
'django-admin sqlsequencereset'            # Prints the SQL statements for resetting sequences for the given app name(s).
'django-admin squashmigrations'            # Squashes an existing set of migrations (from first until specified) into a single new one.
'django-admin startapp <app_name>'         # Create a new django application with the specified name.
'django-admin startproject <project_name>' # Create a new project directory structure.
'django-admin testserver'                  # Runs a development server with data from the given fixture(s).
'django-admin version'                     # Display the current django version.



# *****************************************************************************
# STARTING A SIMPLE DJANGO PROJECT IN PYTHON3
# *****************************************************************************

# 1.  $ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py; python3 get-pip.py						
# 2.  $ pip install virtualenv
# 3.  $ mkdir django-projects
# 4.  $ cd django-projects  
# 5.  $ virtualenv venv 								
# 6.  $ source venv/bin/activate	
# 7.  $ pip install django							
# 8.  $ django-admin startproject myproject
# 9.  $ django-admin startapp myapp
# 10. $ python manage.py runserver



# *****************************************************************************
# DEPLOYMENT
# *****************************************************************************

# Add your media, database, venv, __pycache__ to the .gitignore (there is a compelete list that you can find here: https://github.com/jpadilla/django-project-template/blob/master/.gitignore).
# Keep migration files in the git (you will need to migrate them in target server).
# Don't run "makemigrations" in the target server (you will need to just run "migrate").
# $ pip freeze > requirements.txt
# Make appropriate changes in your project settings.py file (change DEBUG to False and etc).
# Push your code to your git-server.
# Pull your code in your target server.
# Give right permissions to the web-server (e.g. $ chown www-data:www-data -R /var/www/myproject).
# Make a new venv in the target server and activate it.
# $ sudo pip install -r requirements.txt
# sudo ./venv/bin/python3 manage.py migrate
# Restart your web-server (in case of apache: $ sudo service apache2 restart).