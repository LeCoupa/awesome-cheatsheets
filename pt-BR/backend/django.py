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
# DJANGO-ADMIN
# *****************************************************************************


django-admin startproject <ProjectName>  # create a new project directory structure
django-admin startapp <Appname>          # create a new django application with the specified name
django-admin migrate                     # synchronize the database state with your current state project models and migrations
django-admin makemigrations              # create new migrations to the database based on the changes detected in the models
django-admin runserver                   # start the development webserver at 127.0.0.1 with the port 8000
