# ##############################################################################
##### HEROKU TOOLBELT COMPLETE GUIDE ###########################################
################################################################################



# Installing Heroku toolbelt using command line

# For MacOS...
brew tap heroku/brew && brew install heroku

# For Ubuntu...
sudo snap install --classic heroku

# Other installation methods are

curl https://cli-assets.heroku.com/install.sh | sh     # only for unix based systems, windows incompatible as it needs sudo

curl https://cli-assets.heroku.com/install-ubuntu.sh | sh    # Ubuntu/Debian apt-get

yay -S heroku-cli     # Arch linux, Note: This package is community maintained not by heroku

npm install -g heroku     # This installation method is required for users on ARM and BSD...


############

# Verifying your installation

heroku --version


# Let's get started with heroku

heroku login      # To login into the heroku toolbelt with your heroku account, this will open browser for you.

heroku login -i   # If you prefer to stay in the command line environment, then you can execute this command


# Now navigate to your desired directory and create a blank heroku application

cd ~/myapp
heorku create


# If you are facing login issues, try to execute the following command

mv ~/.netrc ~/.netrc.backup
heroku login


# Uninstalling the heroku CLI

# For macOS
rm -rf /usr/local/heroku /usr/local/lib/heroku /usr/local/bin/heroku ~/.local/share/heroku ~/Library/Caches/heroku

# or you can try the below command also on macOS
brew uninstall heroku
rm -rf ~/.local/share/heroku ~/Library/Caches/heroku

# For Linux (Standalone installs)
rm /usr/local/bin/heroku
rm -rf /usr/local/lib/heroku /usr/local/heroku
rm -rf ~/.local/share/heroku ~/.cache/heroku

# For Linux (Debian and Ubuntu installs)
sudo apt-get remove heroku heroku-toolbelt
sudo rm /etc/apt/sources.list.d/heroku.list




#####################################################################################################
### Managing and deploying applications on Heroku (Using Git)     ###################################
#####################################################################################################


cd myapp                           # Changing into the project directory
git init 						   # Initializing the project into a git repository
git add .                          # Adding all the contents of the project into the repository excluding .gitignore content
git commit -m "My first commit"    # Commiting the content to the repository

heroku create                      # Creating a new empty application on Heroku
git remote -v                      # verifying that the remote is set to the heroku

heroku git:remote -a thawing-inlet-61413      # For an existing heroku app, you can add remote to the application
git remote rename heroku heroku-staging       # renaming remotes

git push heroku master             # Deploying code to the heroku application
git push heroku testbranch:master  # Deploying code from a non-master branch to the heroku application

heroku create --ssh-git            # ssh git transport for the application instead of https
git config --global url.ssh://git@heroku.com/.insteadOf https://git.heroku.com/     # For using ssh always
git config --global --remove-section url.ssh://git@heroku.com/       # To remove this rewrite setting run the command




#####################################################################################################
### Managing and deploying applications on Heroku (Using Docker)     ###################################
#####################################################################################################


heroku container:login            # Login to the container resistry
git clone https://github.com/heroku/alpinehelloworld.git       # Get sample code by cloning into the following repository
heroku create                     # Creating a blank heroku application

heroku container:push web         # Build the image and push to Container Registry
heroku container:push --recursive     # Pushing from the root directory of the project in recursive manner
heroku container:push web worker --recursive     # Building the image and pushing to container resistry in recursive manner
heroku container:release web      # Releasing the image to your application

heroku open                       # Open the application in the browser

