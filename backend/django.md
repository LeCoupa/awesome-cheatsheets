# What is Django

&nbsp; The Django framework implements the Model-View-Template architectural pattern,\
&nbsp; or MVT for short, which is actually a modification of the MVC (Model-View-Controller) pattern common in web programming.

The main elements of the pattern:

- &nbsp; URL dispatcher: When a request is received, based on the requested URL,\
  &nbsp; determines which resource should handle this request.
- &nbsp; View: receives a request, processes it, and sends some response back to the user.\
  &nbsp; If processing a request requires access to the model and database, then the View interacts with them.\
  &nbsp; Can use Template or templates to create a response.\
  &nbsp; In the MVC architecture, controllers (but not views) correspond to this component.\
- &nbsp; Model: describes the data used in the application.\
  &nbsp; Individual classes generally correspond to tables in a database.\
- &nbsp; Template: Represents the presentation logic as generated html markup.\
  &nbsp; In MVC, this component corresponds to View, that is, views.


# Installing and configuring Django

## Pip package manager

&nbsp; If pip was previously installed, you can update it with the command
- &nbsp; `pip install --upgrade pip`

## Installing a virtual environment (venv)

&nbsp; Create a virtual environment
- &nbsp; `python -m venv .venv`

## Activating a virtual environment

&nbsp; Activation in Windows on the command line
- &nbsp; `.venv\Scripts\activate.bat`

&nbsp; Activation on Linux and MacOS
- &nbsp; `source .venv/bin/activate`

## Installing Django

&nbsp; Installing Django
- &nbsp; `python -m pip install Django`

&nbsp; If we are interested in a specific version of Django, then we can specify it during installation:
- &nbsp; `python -m pip install django~=4.0.0`

## Deactivate a virtual environment

&nbsp; After finishing working with the virtual environment, we can deactivate it using the command:
- &nbsp; `deactivate`
