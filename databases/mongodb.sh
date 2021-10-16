# *****************************************************************************
# BASICS
# *****************************************************************************


sudo service mongod start                                                       # Start the MongoDB Database
sudo service mongod stop                                                        # Stop the MongoDB Database

mongo --host localhost:27017                                                    # Access the MongoDB database using Shell

show dbs                                                                        # Show all databases
use testdb                                                                      #Create a database (eg. testdb) amd Switch to the database


db.createCollection("user")                                                     # Add a collection (eg. user)
show collections                                                                # Show all collections in a database
show tables                                                                     # Show all tables in a database



db.user.insert({"name": "vishnu", "country": "india", "username": "vishnuxx"})  # Insert a record in the collection; A record is inserted in the collection, "user."


db.user.find()                                                                  # Display list of records of a collection (here "user" collection is used)
db.user.find({"username": "vishnu"})                                            # Display a list of records matching with value (s) of specific fields


db.user.drop()                                                                  # Drop the collection:

db.createUser({"user": "kuttu", "password": "1234"})                            # Create users in the database

show users                                                                      # Show users; If executed without selecting a database, it displays all users along with database information.

mongo -u USERNAME -p PASSWORD --authenticationDatabase DATABASENAME             # Login into the database with username and password; Replace USERNAME , PASSWORD and DATABASENAME with your username , password and databasename
