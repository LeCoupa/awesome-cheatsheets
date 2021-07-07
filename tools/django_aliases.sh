# django server
alias djserver="python manage.py runserver"

# django shell
alias djshell="python manage.py runshell"

# activate virtual env
alias vn_ac=". bin/activate"

# create the django necessary folders and python files using the app name
django-setup-app(){
    python manage.py startapp $1;
    touch $1/urls.py;
    mkdir -p $1/templates/$1;
}