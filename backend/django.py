# *****************************************************************************
# DJANGO PROJECT - COMPLETE REFERENCE CHEATSHEET
# *****************************************************************************
# *****************************************************************************
# CODING STYLE > MAKING YOUR CODE READABLE
# *****************************************************************************
# 1. Avoid abbreviating variable names.
# 2. Write out your function argument names.
# 3. Document your classes and methods.
# 4. Comment your code.
# 5. Refactor repeated lines of code into reusable functions or methods.
# 6. Keep functions and methods short. A good rule of thumb is that scrolling
#    should not be necessary to read an entire function or method.
# TIP: Use Flake8 for Checking Code Quality.
# *****************************************************************************
# CODING STYLE > THE WORD ON IMPORTS
# *****************************************************************************
# Imports should be grouped in the following order:
# 1. Standard library imports.
# 2. Core Django imports.
# 3. Third-party app imports.
# 4. Imports from your apps.
# Use explicit relative imports.
# Avoid using import *
# *****************************************************************************
# CODING STYLE > OTHERS
# *****************************************************************************
# Use underscores in URL pattern names rather than dashes.
# *****************************************************************************
# CODING STYLE > DATABASE
# *****************************************************************************
# 1.Register your app in admin file in your app folder to use admin panel in django
# 2.Create a superuser using command python manage.py createsuperuser
# 3.Remember to migrate after you change anything in your models.py file
# 4.Use /admin/ page to add data in your tables for testing purpose
# *****************************************************************************
# Deployment
# *****************************************************************************
# add your media, database, venv, __pycache__ to the .gitignore (there is a compelete list that you can find here: https://github.com/jpadilla/django-project-template/blob/master/.gitignore)
# keep migration files in the git (you will need to migrate them in target server)
# don't run "makemigrations" in the target server (you will need to just run "migrate")
# $ pip freeze > requirements.txt
# make appropriate changes in your project settings.py file (change DEBUG to False and etc)
# push your code to your git-server
# pull your code in your target server
# give right permissions to the web-server (e.g. $ chown www-data:www-data -R /var/www/myproject)
# make a new venv in the target server and activate it
# $ sudo pip install -r requirements.txt
# sudo ./venv/bin/python3 manage.py migrate
# restart your web-server (in case of apache: $ sudo service apache2 restart)
# *****************************************************************************
# DJANGO-ADMIN
# *****************************************************************************
django-admin check                       # Checks the entire django project for potential problems
django-admin changepassword <username>   # Allows changing a user's password. It prompts you to enter a new password twice for the given user.
django-admin clearsessions               # Can be run as a cron job or directly to clean out expired sessions.
django-admin collectstatic               # Helps to collect all the static files in the one mentioned directory
django-admin createsuperuser             # Creates a superuser account (a user who has all permissions).
django-admin compilemessages             # Compiles .po files to .mo files for use with builtin gettext support
django-admin createcachetable            # Creates the tables needed to use the SQL cache backend.
django-admin dbshell                     # Runs the command-line client for specified database, or the default database if none is provided.
django-admin diffsettings                # Displays differences between the current settings.py and Django's default settings.
django-admin dumpdata                    # Output the contents of the database as a fixture of the given format (using each model's default manager unless --all is specified).
django-admin flush                       # Removes ALL DATA from the database, including data added during migrations. Does not achieve a "fresh install" state.
django-admin inspectdb                   # Introspects the database tables in the given database and outputs a Django model module.
django-admin loaddata                    # Installs the named fixture(s) in the database.
django-admin makemessages                # Runs over the entire source tree of the current directory and pulls out all strings marked for translation. It creates (or updates) a message file in the conf/locale (in the django tree) or locale (for projects and applications) directory. You must run this command with one of either the --locale, --exclude, or --all options.
django-admin help                        # display usage information and a list of the commands provided by each application
django-admin makemigrations              # create new migrations to the database based on the changes detected in the models
django-admin migrate                     # synchronize the database state with your current state project models and migrations
django-admin remove_stale_contenttypes   # Deletes stale content types (from deleted models) in your database.y.
django-admin runserver <port>            # start the development webserver at 127.0.0.1 with the port <port> default 8000
django-admin sendtestemail               # Sends a test email to the email addresses specified as arguments.
django-admin shell                       # Runs a Python interactive interpreter. Tries to use IPython or bpython, if one of them is available. Any standard input is executed as code.
django-admin showmigrations              # Shows all available migrations for the current project.
django-admin sqlflush                    # Returns a list of the SQL statements required to return all tables in the database to the state they were in just after they were installed.
django-admin sqlmigrate                  # Prints the SQL statements for the named migration.
django-admin sqlsequencereset            # Prints the SQL statements for resetting sequences for the given app name(s).
django-admin squashmigrations            # Squashes an existing set of migrations (from first until specified) into a single new one.
django-admin startapp <Appname>          # create a new django application with the specified name
django-admin startproject <ProjectName>  # create a new project directory structure
django-admin testserver                  # Runs a development server with data from the given fixture(s).
django-admin version                     # display the current django version
# *****************************************************************************
# Starting a django project in python3
# *****************************************************************************
# 1. $ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py; python3 get-pip.py
# 2. $ pip install virtualenv
# 3. $ mkdir django-projects
# 4. $ cd django-projects
# 5. $ virtualenv venv
# 6. $ source venv/bin/activate
# 7. $ pip install django
# 8. $ django-admin startproject myproject
# 9. $ django-admin startapp myapp
# 10. $ python manage.py runserver


# *****************************************************************************
# FILE ARCHITECTURE
# *****************************************************************************
#
#   myproject/                        <-- Root directory (git repo lives here)
#   |
#   |-- manage.py                     <-- CLI entry point. Used to run commands
#   |                                     like runserver, migrate, shell, etc.
#   |                                     Never edit this file.
#   |
#   |-- requirements.txt              <-- All pip packages for the project.
#   |                                     Generate with: pip freeze > requirements.txt
#   |                                     Install with:  pip install -r requirements.txt
#   |
#   |-- .gitignore                    <-- Files to exclude from git.
#   |                                     Must include: venv/, media/, db.sqlite3, __pycache__/
#   |                                     Reference: github.com/jpadilla/django-project-template
#   |
#   |-- venv/                         <-- Virtual environment. NEVER commit to git.
#   |                                     Create:   virtualenv venv
#   |                                     Activate: source venv/bin/activate (Linux/Mac)
#   |                                               venv\Scripts\activate     (Windows)
#   |
#   |-- db.sqlite3                    <-- Default SQLite database. NEVER commit to git.
#   |                                     For production, switch to PostgreSQL or MySQL.
#   |
#   |-- media/                        <-- User-uploaded files (images, docs, etc).
#   |                                     Served separately in production. NEVER commit to git.
#   |
#   |-- static/                       <-- Project-wide static files (CSS, JS, images).
#   |                                     Collected here via: django-admin collectstatic
#   |
#   |-- myproject/                    <-- Project configuration package (same name as root).
#   |   |
#   |   |-- __init__.py               <-- Makes this folder a Python package. Usually empty.
#   |   |
#   |   |-- settings.py               <-- Master settings file. Controls everything:
#   |   |                                 INSTALLED_APPS, DATABASES, STATIC_URL,
#   |   |                                 MEDIA_ROOT, ALLOWED_HOSTS, DEBUG, etc.
#   |   |                                 Set DEBUG=False before deploying to production.
#   |   |
#   |   |-- urls.py                   <-- Root URL configuration.
#   |   |                                 Maps top-level URL paths to each app's urls.py.
#   |   |                                 Uses include() to delegate to app-level routing.
#   |   |                                 Example: path('blog/', include('blog.urls'))
#   |   |
#   |   |-- wsgi.py                   <-- WSGI entry point for production servers
#   |   |                                 (e.g. Apache + mod_wsgi, Gunicorn).
#   |   |                                 Not used in development (manage.py runserver handles it).
#   |   |
#   |   |-- asgi.py                   <-- ASGI entry point for async servers
#   |                                     (e.g. Daphne, Uvicorn). Use for WebSockets/async views.
#   |
#   |-- myapp/                        <-- A Django application (reusable module).
#       |                                 Create with: django-admin startapp myapp
#       |                                 Register in settings.py > INSTALLED_APPS.
#       |
#       |-- __init__.py               <-- Makes this folder a Python package. Usually empty.
#       |
#       |-- models.py                 <-- Define your database tables as Python classes.
#       |                                 Each class = one table. Each attribute = one column.
#       |                                 After any change here, run:
#       |                                   python manage.py makemigrations
#       |                                   python manage.py migrate
#       |
#       |-- views.py                  <-- Business logic. Receives HTTP requests,
#       |                                 queries models, returns HTTP responses.
#       |                                 Can be function-based (FBV) or class-based (CBV).
#       |
#       |-- urls.py                   <-- App-level URL routing.  (you must create this file)
#       |                                 Maps URL patterns to views within this app.
#       |                                 Use underscores in URL pattern names, not dashes.
#       |                                 Include this in the root urls.py using include().
#       |
#       |-- admin.py                  <-- Register your models here to manage them
#       |                                 via the /admin/ panel.
#       |                                 Example: admin.site.register(MyModel)
#       |
#       |-- apps.py                   <-- App configuration class. Holds the app name
#       |                                 and any app-specific startup signals.
#       |
#       |-- forms.py                  <-- Django forms for validating and rendering
#       |                                 HTML forms. (you must create this file)
#       |                                 Keeps validation logic out of views.
#       |
#       |-- serializers.py            <-- For Django REST Framework only.  (you must create this file)
#       |                                 Converts model instances to/from JSON.
#       |
#       |-- tests.py                  <-- Unit and integration tests for this app.
#       |                                 Run with: python manage.py test
#       |
#       |-- migrations/               <-- Auto-generated migration files.
#       |   |                             ALWAYS commit these to git.
#       |   |                             Run makemigrations locally, never on the server.
#       |   |                             Run migrate on both local and server.
#       |   |
#       |   |-- __init__.py           <-- Makes migrations a Python package.
#       |   |-- 0001_initial.py       <-- First migration (creates tables).
#       |   |-- 0002_auto_xxxx.py     <-- Subsequent migrations (schema changes).
#       |
#       |-- templates/                <-- HTML templates for this app. (you must create this folder)
#       |   |                             Django looks here automatically if
#       |   |                             APP_DIRS=True in settings.py TEMPLATES config.
#       |   |
#       |   |-- myapp/                <-- Namespace folder to avoid template name clashes.
#       |       |-- index.html
#       |       |-- detail.html
#       |
#       |-- static/                   <-- App-level static files. (you must create this folder)
#           |                             Collected to project static/ via collectstatic.
#           |
#           |-- myapp/                <-- Namespace folder to avoid static file name clashes.
#               |-- css/
#               |-- js/
#               |-- images/


# *****************************************************************************
# HOW THE PIECES CONNECT  (Request Lifecycle)
# *****************************************************************************
#
#   Browser sends HTTP request
#        |
#        v
#   wsgi.py / asgi.py                 <-- Receives the request from the web server
#        |
#        v
#   myproject/urls.py                 <-- Root router. Finds the matching URL pattern
#        |
#        v
#   myapp/urls.py                     <-- App router. Finds the specific view to call
#        |
#        v
#   myapp/views.py                    <-- View processes the request
#        |         |
#        v         v
#   models.py   forms.py              <-- View queries the DB and/or validates form data
#        |
#        v
#   templates/myapp/page.html         <-- View renders the template with context data
#        |
#        v
#   HTTP Response sent back to browser


# *****************************************************************************
# SETTINGS.PY - KEY VARIABLES TO KNOW
# *****************************************************************************
#
#   DEBUG = True                         <-- Show detailed error pages. Set to False in production.
#   ALLOWED_HOSTS = []                   <-- Add your domain/IP in production. e.g. ['example.com']
#   INSTALLED_APPS = [...]               <-- Register all apps here (both Django built-ins and yours).
#   DATABASES = {...}                    <-- DB connection. Default is SQLite. Switch to PostgreSQL for production.
#   STATIC_URL = '/static/'              <-- URL prefix for static files.
#   STATICFILES_DIRS = [...]             <-- Extra directories Django looks for static files.
#   STATIC_ROOT = BASE_DIR/'staticfiles' <-- Where collectstatic dumps all files.
#   MEDIA_URL = '/media/'                <-- URL prefix for user-uploaded files.
#   MEDIA_ROOT = BASE_DIR/'media'        <-- Filesystem path where uploads are stored.
#   TEMPLATES = [{'DIRS': [...]}]        <-- Where Django looks for templates.
#   SECRET_KEY = '...'                   <-- Keep this secret. Use environment variables in production.
#   AUTH_USER_MODEL = 'myapp.User'       <-- Override the default user model (do this early).
