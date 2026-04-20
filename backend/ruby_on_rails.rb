# The Rails Command Line
# For more info see: https://guides.rubyonrails.org/command_line.html

# Attention!!!
# In Rails 4 some commands need replace `rails` to `rake`
# For more info see: https://github.com/rails/rails/pull/22288
#
# If commands not working, you can run them as:
# `bin/rails <command> <arg>` or `bundle exec rails <command> <arg>`


# Create new project
rails new project_name

# with the version number of the framework
rails _4.2.7_ new old_project_name



# Run server (for development)
rails server
rails s # shortcut

# Run sever listen 3200 port on all network interfaces
rails s -b 0.0.0.0 -p 3200



# Run console
rails console
rails c # shortcut

# Run console in test environment
rails console test

# Run console in sandbox (all transactions and changes will be canceled)
rails console --sandbox



# Create model
rails generation model Product title:string body:text
rails g model ProductItem product:references 'price:decimal{8,2}'

# Delete a generated model template
rails destroy model Product
rails d model ProductItem



# Create controller
# Controller name is better to use in the plural
rails generate controller Users index show new create edit update destroy
rails g controller Pages index show

# Create a controller in the namespace
rails g controller api/v1/users index show create update destroy

# Delete a generated controller template
rails destroy controller Users
rails d controller Pages



# Create migration
rails g migration AddAwesomeFieldToProduct awesome_field:string

# Delete a generated migration template
rails d migration AddAwesomeFieldToProduct



# Create mailer
rails g mailer UserMailer account_activation password_reset



# Create channel (ActionCable, websockets)
rails g channel Room



# Create database
rails db:create

# Drop database
rails db:drop

# Load seeds (default data in database)
rails db:seed

# Perform migration
rails db:migrate
rake db:migrate # in Rails 4

# Rollback migration
rails db:rollback
rails db:rollback STEP=3 # rollback 3 last migration



# View all available routes in the app
# In the dev environment you can see routes in http://localhost:3000/rails/info/routes
rails routes



# View project code metrics
rails stats



# Run the script in a Rails environment
rails runner path/to/script.rb
