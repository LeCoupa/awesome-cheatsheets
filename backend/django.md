<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" />

> # CODING STYLES
> MAKING YOUR CODE READABLE
> 1. Avoid abbreviating variable names.
> 1. Write out your function argument names.
> 1. Document your classes and methods.
> 1. Comment your code.
> 1. Refactor repeated lines of code into reusable functions or methods.
> 1. Keep functions and methods short. A good rule of thumb is that scrolling should not be necessary to read an entire function or method.
> ### *TIP: Use Flake8 for Checking Code Quality.*
> ---
> ## A WORD ON IMPORTS
> ## Imports should be grouped in the following order:
> 1. Standard library imports.
> 1. Core Django imports.
> 1. Third-party app imports.
> 1. Imports from your apps.
> ### *Use explicit relative imports.*
> ### _Avoid using import *_
> ---
> ## OTHERS
> ### *Use underscores in URL pattern names rather than dashes.*

---

> # Deployment
> 1. Add your media, database, venv, __pycache__ to the .gitignore (there is a compelete list that you can find here: [https://github.com/jpadilla/django-project-template/blob/master/.gitignore](https://github.com/jpadilla/django-project-template/blob/master/.gitignore))
> 1. Keep migration files in the git (you will need to migrate them in target server)
> 1. Don't run "makemigrations" in the target server (you will need to just run "migrate")
> 1. ``` $ pip freeze > requirements.txt ```
> 1. Make appropriate changes in your project settings.py file (change DEBUG to False and etc)
> 1. Push your code to your git-server
> 1. Pull your code in your target server
> 1. Give right permissions to the web-server (e.g. $ chown www-data:www-data -R /var/www/myproject)
> 1. Make a new venv in the target server and activate it
> 1. ``` $ sudo pip install -r requirements.txt ```
> 1. ``` sudo ./venv/bin/python3 manage.py migrate ```
> 1. Restart your web-server (in case of apache: $ sudo service apache2 restart)

---

> # DJANGO-ADMIN
> | Syntax | Description |
> |--------|-------------|
> |` django-admin check `| Checks the entire django project for potential problems|
> |`django-admin changepassword <username>`| Allows changing a user’s password. It prompts you to enter a new password twice for the given user|
> |`django-admin clearsessions`| Can be run as a cron job or directly to clean out expired sessions. |
> |`django-admin collectstatic`| Helps to collect all the static files in the one mentioned directory|
> |`django-admin createsuperuser`| Creates a superuser account (a user who has all permissions)|
> |`django-admin compilemessages`| Compiles .po files to .mo files for use with builtin gettext support|
> |`django-admin createcachetable`| Creates the tables needed to use the SQL cache backend|
> |`django-admin dbshell`| Runs the command-line client for specified database, or the default database if none is provided|
> |`django-admin diffsettings`| Displays differences between the current settings.py and Django's default settings|
> |`django-admin dumpdata`| Output the contents of the database as a fixture of the given format (using each model's default manager unless --all is specified)|
> |`django-admin flush`| Removes ALL DATA from the database, including data added during migrations. Does not achieve a "fresh install" state|
> |`django-admin inspectdb`| Introspects the database tables in the given database and outputs a Django model module|
> |`django-admin loaddata`| Installs the named fixture(s) in the database|
> |`django-admin makemessages`| Runs over the entire source tree of the current directory and pulls out all strings marked for translation. It creates (or updates) a message file in the conf/locale (in the django tree) or locale (for projects and applications) directory. You must run this command with one of either the --locale, --exclude, or --all options|
> |`django-admin help`| display usage information and a list of the commands provided by each application|
> |`django-admin makemigrations`| create new migrations to the database based on the changes detected in the models|
> |`django-admin migrate`| synchronize the database state with your current state project models and migrations|
> |`django-admin remove_stale_contenttypes`| Deletes stale content types (from deleted models) in your database.y|
> |`django-admin runserver <port>`| start the development webserver at 127.0.0.1 with the port <port> default 8000|
> |`django-admin sendtestemail`| Sends a test email to the email addresses specified as arguments|
> |`django-admin shell`| Runs a Python interactive interpreter. Tries to use IPython or bpython, if one of them is available. Any standard input is executed as code|
> |`django-admin showmigrations`| Shows all available migrations for the current project|
> |`django-admin sqlflush`| Returns a list of the SQL statements required to return all tables in the database to the state they were in just after they were installed|
> |`django-admin sqlmigrate`| Prints the SQL statements for the named migration|
> |`django-admin sqlsequencereset`| Prints the SQL statements for resetting sequences for the given app name(s)|
> |`django-admin squashmigrations`| Squashes an existing set of migrations (from first until specified) into a single new one|
> |`django-admin startapp <Appname>`| create a new django application with the specified name|
> |`django-admin startproject <ProjectName>`| create a new project directory structure|
> |`django-admin testserver`| Runs a development server with data from the given fixture(s)|
> |`django-admin version`| display the current django version|

---
  
> # Starting a django project in python3
> 1. `$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py; python3 get-pip.py`						
> 1. `$ pip install virtualenv`
> 1. `$ mkdir django-projects`
> 1. `$ cd django-projects`  
> 1. `$ virtualenv venv` 								
> 1. `$ source venv/bin/activate`	
> 1. `$ pip install django`							
> 1. `$ django-admin startproject myproject`
> 1. `$ python manage.py startapp myapp`
> 1. `$ python manage.py runserver`

---

> # Models in Django
> ## Step 1:
> In the code given below, following implementations in your `models.py` file are shown:
> * How to create models
> * Different types of fields - CharField, ImageField, BooleanField, DateTimeField.
> * Usage of `Ckeditor` that can enable *RichTextField* and give an interactive text editor panel to user in Django-Admin page.
> * Implementation of Date and TIme stamp.
> * Proper headline when it is seen in Django Admin page.
>
> ```
> from django.db import models
> from ckeditor.fields import RichTextField
> from datetime import datetime
> # Create your models here.
> class <Model Name>(models.Model):
>
>    title = models.CharField(max_length=255)
>    category = models.CharField(max_length=255, blank=True)
>    photo = models.ImageField(upload_to='media/home/%Y/%m')
>    content = RichTextField()
>    author = models.CharField(max_length=255, blank=True)
>    is_featured = models.BooleanField(default=False)
>    created_date = models.DateTimeField(default=datetime.now)
>
>    def __str__(self):
>        return self.title
>  ```
>
> ## Step 2:
> After creating models, we need to register them in `admin.py` page.
> In your `admin.py` add the following code:
> ```
> from django.contrib import admin
> from .models import <Model Name>
>
> admin.site.register(<Model Name>)
> ```
>
> If you want some filters on your Django-Admin page, you can use the following code:
> ```
> from django.contrib import admin
> from .models import <Model Name>
> # Register your models here.
>
> class ModelDisplay(admin.ModelAdmin):
> 
>    list_display = ('id', 'name', 'email', 'subject', 'created_date',) # model fields that you want to display
>    search_fields = ('name', 'email',) # model field that you want to add in search
>    list_display_links = ('id', 'name', 'email',)
>
>
> admin.site.register(<Model Name>, ModelDisplay)
> ```  
> ## Step 3:
> In your terminal run the following commands:
> ```
> python manage.py makemigrations
> python manage.py migrate
> ```
