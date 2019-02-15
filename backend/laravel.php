<?php

/********************************************************************************************
 * 1. CLI AVAILABLE COMMANDS FOR ARTISAN
 * https://laravel.com/docs/5.7/artisan
 ********************************************************************************************/

// 1.1. MAIN.

php artisan clear-compiled       // Remove the compiled class file
php artisan down                 // Put the application into maintenance mode
php artisan dump-server          // Start the dump server to collect dump information.
php artisan env                  // Display the current framework environment
php artisan help                 // Displays help for a command
php artisan inspire              // Display an inspiring quote
php artisan list                 // Lists commands
php artisan migrate              // Run the database migrations
php artisan optimize             // Cache the framework bootstrap files
php artisan preset               // Swap the front-end scaffolding for the application
php artisan serve                // Serve the application on the PHP development server
php artisan tinker               // Interact with your application
php artisan up                   // Bring the application out of maintenance mode

// 1.2. APP.

php artisan app:name             // Set the application namespace

// 1.3. AUTH

php artisan auth:clear-resets    // Flush expired password reset tokens

// 1.4. CACHE

php artisan cache:clear          // Flush the application cache
php artisan cache:forget         // Remove an item from the cache
php artisan cache:table          // Create a migration for the cache database table
 
// 1.5. CONFIG

php artisan config:cache         // Create a cache file for faster configuration loading
php artisan config:clear         // Remove the configuration cache file
 
// 1.6. DB

php artisan db:seed              // Seed the database with records

// 1.7. EVENT

php artisan event:generate       // Generate the missing events and listeners based on registration

// 1.8. KEY

php artisan key:generate         // Set the application key

// 1.9. MAKE

php artisan make:auth            // Scaffold basic login and registration views and routes
php artisan make:channel         // Create a new channel class
php artisan make:command         // Create a new Artisan command
php artisan make:controller      // Create a new controller class
php artisan make:event           // Create a new event class
php artisan make:exception       // Create a new custom exception class
php artisan make:factory         // Create a new model factory
php artisan make:job             // Create a new job class
php artisan make:listener        // Create a new event listener class
php artisan make:mail            // Create a new email class
php artisan make:middleware      // Create a new middleware class
php artisan make:migration       // Create a new migration file
php artisan make:model           // Create a new Eloquent model class
php artisan make:notification    // Create a new notification class
php artisan make:observer        // Create a new observer class
php artisan make:policy          // Create a new policy class
php artisan make:provider        // Create a new service provider class
php artisan make:request         // Create a new form request class
php artisan make:resource        // Create a new resource
php artisan make:rule            // Create a new validation rule
php artisan make:seeder          // Create a new seeder class
php artisan make:test            // Create a new test class

// 1.10. MIGRATE

php artisan migrate:fresh        // Drop all tables and re-run all migrations
php artisan migrate:install      // Create the migration repository
php artisan migrate:refresh      // Reset and re-run all migrations
php artisan migrate:reset        // Rollback all database migrations
php artisan migrate:rollback     // Rollback the last database migration
php artisan migrate:status       // Show the status of each migration

// 1.11. NOTIFICATIONS

php artisan notifications:table  // Create a migration for the notifications table

// 1.12. OPTIMIZE

php artisan optimize:clear       // Remove the cached bootstrap files

// 1.13. PACKAGE

php artisan package:discover     // Rebuild the cached package manifest

// 1.14. QUEUE

php artisan queue:failed         // List all of the failed queue jobs
php artisan queue:failed-table   // Create a migration for the failed queue jobs database table
php artisan queue:flush          // Flush all of the failed queue jobs
php artisan queue:forget         // Delete a failed queue job
php artisan queue:listen         // Listen to a given queue
php artisan queue:restart        // Restart queue worker daemons after their current job
php artisan queue:retry          // Retry a failed queue job
php artisan queue:table          // Create a migration for the queue jobs database table
php artisan queue:work           // Start processing jobs on the queue as a daemon

// 1.15. ROUTE

php artisan route:cache          // Create a route cache file for faster route registration
php artisan route:clear          // Remove the route cache file
php artisan route:list           // List all registered routes

// 1.16. SCHEDULE

php artisan schedule:run         // Run the scheduled commands

// 1.17. SESSION

php artisan session:table        // Create a migration for the session database table

// 1.18. STORAGE

php artisan storage:link         // Create a symbolic link from "public/storage" to "storage/app/public"

// 1.19. VENDOR

php artisan vendor:publish       // Publish any publishable assets from vendor packages

// 1.20. VIEW

php artisan view:cache           // Compile all of the application's Blade templates
php artisan view:clear           // Clear all compiled view files
