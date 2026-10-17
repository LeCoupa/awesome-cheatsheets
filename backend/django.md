# CODING STYLE > MAKING YOUR CODE READABLE

1. Avoid abbreviating variable names.
2. Write out your function argument names.
3. Document your classes and methods.
4. Comment your code.
5. Refactor repeated lines of code into reusable functions or methods.
6. Keep functions and methods short. A good rule of thumb is that scrolling should not be necessary to read an entire function or method.

TIP: Use Flake8 for Checking Code Quality.


# CODING STYLE > THE WORD ON IMPORTS

Imports should be grouped in the following order:

1. Standard library imports.
2. Core Django imports.
3. Third-party app imports.
4. Imports from your apps.

Use explicit relative imports.
Avoid using import *


# CODING STYLE > OTHERS

Use underscores in URL pattern names rather than dashes.


# CODING STYLE > DATABASE

1. Register your app in admin file in your app folder to use admin panel in Django.
2. Create a superuser using command python manage.py createsuperuser.
3. Remember to migrate after you change anything in your models.py file.
4. Use /admin/ page to add data in your tables for testing purpose.


# Deployment

- Add your media, database, venv, __pycache__ to the .gitignore (there is a complete list that you can find here: https://github.com/jpadilla/django-project-template/blob/master/.gitignore).
- Keep migration files in the git (you will need to migrate them in target server).
- Don't run "makemigrations" in the target server (you will need to just run "migrate").
- `$ pip freeze > requirements.txt`
- Make appropriate changes in your project settings.py file (change DEBUG to False and etc).
- Push your code to your git-server.
- Pull your code in your target server.
- Give right permissions to the web-server (e.g. `$ chown www-data:www-data -R /var/www/myproject`).
- Make a new venv in the target server and activate it.
- `$ sudo pip install -r requirements.txt`
- `$ sudo ./venv/bin/python3 manage.py migrate`
- Restart your web-server (in case of Apache: `$ sudo service apache2 restart`).


# DJANGO-ADMIN

- `django-admin check`: Checks the entire Django project for potential problems.
- `django-admin changepassword <username>`: Allows changing a user’s password. It prompts you to enter a new password twice for the given user.
- `django-admin clearsessions`: Can be run as a cron job or directly to clean out expired sessions.
- `django-admin collectstatic`: Helps to collect all the static files in the one mentioned directory.
- `django-admin createsuperuser`: Creates a superuser account (a user who has all permissions).
- `django-admin compilemessages`: Compiles .po files to .mo files for use with built-in gettext support.
- `django-admin createcachetable`: Creates the tables needed to use the SQL cache backend.
- `django-admin dbshell`: Runs the command-line client for specified database, or the default database if none is provided.
- `django-admin diffsettings`: Displays differences between the current settings.py and Django's default settings.
- `django-admin dumpdata`: Output the contents of the database as a fixture of the given format (using each model's default manager unless --all is specified).
- `django-admin flush`: Removes ALL DATA from the database, including data added during migrations. Does not achieve a "fresh install" state.
- `django-admin inspectdb`: Introspects the database tables in the given database and outputs a Django model module.
- `django-admin loaddata`: Installs


# DJANGO-ADMIN CONTINUED
- `django-admin startapp`: <appname> # Create a new Django app named <appname> in the current directory.
- `django-admin startproject`: <projectname> # Create a new Django project named <projectname> in the current directory.
- `django-admin test`: # Discover and run tests in the specified modules or the current directory.
- `django-admin testserver`: # Runs a development server with data from the test database instead of the production database.
- `django-admin validate`: # Validates all installed models.
- `django-admin version`: # Display the Django version.

# DJANGO-DEBUG-TOOLBAR
    Add 'debug_toolbar' to the installed apps in settings.py
    In urls.py add the following lines:
    from django.conf import settings
    if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
    url(r'^debug/', include(debug_toolbar.urls)),

... the rest of your URLconf goes here ...

# DJANGO-REST-FRAMEWORK
To use Django Rest Framework, add it to your installed apps in settings.py:

    INSTALLED_APPS = (
    ...
    'rest_framework',
    )
    Add DRF's token authentication to your installed authentication classes:
    REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
    'rest_framework.authentication.TokenAuthentication',
    'rest_framework.authentication.SessionAuthentication',
    'rest_framework.authentication.BasicAuthentication',
    )
    }

Use Django Rest Framework's serializers to format your API responses.

<br>

# Starting a django project in python3

    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py; python3 get-pip.py						
    pip install virtualenv
    mkdir django-projects
    cd django-projects  
    virtualenv venv 								
    source venv/bin/activate	
    pip install django							
    django-admin startproject myproject
    django-admin startapp myapp
    python manage.py runserver
