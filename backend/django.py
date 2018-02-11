# *****************************************************************************
# CODING STYLE > MAKING YOUR CODE READABLE
# *****************************************************************************


# 1. Avoid abbreviating variable names.
# 2. Write out your function argument names.
# 3. Document your classes and methods.
# 4. Comment your code.
# 5. Refactor repeated lines of code into reusable functions or methods.
# 6. Keep functions and methods short. A good rule of thumb is that scrolling
# should not be necessary to read an entire function or method.

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
# Django to begin django-admin
# *****************************************************************************
# Note: When working with single Django Project its easy to use manage.py instead of django-admin
# These two options can be intechangeble
django-admin startproject <ProjectName>     # To create Project Directory structure
											 # https://docs.djangoproject.com/en/2.0/ref/django-admin/#startproject
django-admin startapp <Appname>				 # To create Django Application Name
											 # https://docs.djangoproject.com/en/2.0/ref/django-admin/#startapp
django-admin migrate						 # To Synchronize the database state with your current state project models and migrations
											 # https://docs.djangoproject.com/en/2.0/ref/django-admin/#migrate
django-admin makemigrations					 # To create new migrations to the database based on the changes detected in the models
											 # https://docs.djangoproject.com/en/2.0/ref/django-admin/#makemigrations
django-admin runserver						 # To start the development webserver at 127.0.0.1 with the port 8000
										     # https://docs.djangoproject.com/en/2.0/ref/django-admin/#runserver
