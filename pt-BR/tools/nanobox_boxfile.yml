# *****************************************************************************
# SECTIONS OF THE BOXFILE
# *****************************************************************************


# Boxfiles consist of a handful of sections or "nodes": run.config, deploy.config, web, worker, data.
# These are covered in detail in the next few docs, but here are some quick descriptions:

# run.config - Defines the build, environment, and configuration for web and worker components.
# deploy.config - Defines deploy hooks and possible code transformations.
# web - Defines settings unique to each web component.
# worker - Defines settings unique to each worker component.
# data - Defines settings unique to a specific data component.


# *****************************************************************************
# RUN.CONFIG
# https://docs.nanobox.io/boxfile/run-config/
# *****************************************************************************


run.config:
  # Engine
  engine: engine-name

  # Configuration used by the engine
  engine.config:
    runtime: ruby-2.3

  # Contents of these dirs to be cached inside of Nanobox
  cache_dirs:
    - vendor
    - packages

  # Extra Packages (in addition to what the engine installs)
  extra_packages:
    - nodejs
    - newrelic

  # Dev Packages
  dev_packages:
    - psutils

  # Build Triggers - Changes to these files automatically
  # trigger a new build the next time a build is required.
  build_triggers:
    - Gemfile
    - Gemfile.lock
    - package.json

  # Additions to $PATH
  extra_path_dirs:
    - vendor/bin

  # Custom commands to prepare the environment
  extra_steps:
    - npm install

  # Enable filesystem watcher
  fs_watch: true


# *****************************************************************************
# DEPLOY.CONFIG
# https://docs.nanobox.io/boxfile/deploy-config/
# *****************************************************************************


deploy.config:
  # Custom commands to prepare the production environment
  extra_steps:
    - mv config-prod.yml config.yml

  # Run after your code has been deployed to your live app,
  # but before everything is locked down with read-only permissions and distributed into new containers/servers.
  transform:
    - 'sed -i /HOST/$DATA_DB_HOST/g config/database.xml'
    - 'if [ "$ENV" = "prod" ]; then mv config-prod.yml config.yml; fi'

  # Run command on any one instance of web.main component before activation
  before_live:
    web.main:
      - 'bundle exec rake clear-cache'

  # Run command on all instances of web.main component before activation
  before_live_all:
    web.main:
      - 'bundle exec rake register-nodes'

  # Run command on any one instance of web.main component after activation
  after_live:
    worker.mail:
      - 'bundle exec rake prime-cache'

  # Run command on all instances of web.main component after activation
  after_live_all:
    worker.mail:
      - 'bundle exec rake prime-local-cache'
  
  # Set a timeout for your deploy hooks
  hook_timeout: 300


# *****************************************************************************
# WEB
# https://docs.nanobox.io/boxfile/web/
# *****************************************************************************


web.site:
  # Start Command
  start: start-command

  # Stop Config
  stop: stop-command
  stop_force: false
  stop_timeout: 60  

  # Current Working Directory
  cwd: directory

  # Routing
  routes:
    - 'sub:/path/'
    - '/admin/'

  # Port Mapping
  ports:
    - tcp:21:3420
    - udp:53:3000

  # Network Storage
  network_dirs:
    data.files:
      - path/to/directoryA
      - path/to/directoryB
    data.unfs:
      - path/to/directoryC

  # Writable Dirs
  writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: /app/path/to/error.log

  # Cron
  cron:
    - id: flush_cache
      schedule: '0 0 * * *'
      command: rm -rf app/cache/*
    - id: echo_msg
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: echo i\'m a little teapot

  # Only provision component locally
  local_only: true


# *****************************************************************************
# WORKER
# https://docs.nanobox.io/boxfile/worker/
# *****************************************************************************


worker.jobs:
  # Start Command
  start: ruby worker.rb

  # Stop Config
  stop: stop-command
  stop_force: false
  stop_timeout: 30

  # Current Working Directory
  cwd: directory

  # Network Storage
  network_dirs:
    data.storage1:
      - path/to/directoryA
      - path/to/directoryB
    data.storage2:
      - path/to/directoryC

  # Writable Dirs
  writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    job[error]: /app/path/to/error.log

  # Cron
  cron:
    - id: flush_cache
      schedule: '0 0 * * *'
      command: rm -rf app/cache/*
    - id: echo_msg
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: echo i\'m a little teapot

  # Only provision component locally
  local_only: true


# *****************************************************************************
# DATA
# https://docs.nanobox.io/boxfile/data/
# *****************************************************************************


data.db:
  # Image
  image: nanobox/mysql:5.6

  # Config Options Exposed by the Image
  config:
    plugins:
      - federated
      - audit_log
    event_scheduler: 'Off'

  # Cron
  cron:
    - id: backup
      schedule: '0 0 * * *'
      command: 'bash /path/to/scripts/backup.sh'
    - id: echo_msg
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: 'echo i\'m a little teapot'

  # Extra Packages (in addition to what the image installs)
  extra_packages:
    - perl
    - curl

  # Additions to $PATH
  extra_path_dirs:
    - /custom/bin

  # Custom commands to prepare the environment
  extra_steps:
    - wget -o /path/to/scripts/cron.sh http://example.com/cron.sh

  # Only provision component locally
  local_only: true
