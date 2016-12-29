## Install rails-react-devise-boilerplate

1. Clone repository

    ```
    git clone git@github.com:DevHD83/rails-react-devise-boilerplate.git
    ```

2. Install all gem files

    ```
    bundle install
    ```

3. Initialize database (if neccessary)

    ```
    rake db:create
    ```

4. Edit configuration files for devise gem:

    **config/environments/development.rb** and **config/environments/production.rb**
    
    Set up config.action_mailer.default_url_options host and port
    (For development host is 'localhost' and port is '3000')

---

## Migrate database

Run database migration in console:
```
rake db:migrate
```

---

## Start server
```
rails s
```
