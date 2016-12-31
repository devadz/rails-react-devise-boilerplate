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

## Configuration

With Figaro gem configuration is very comfortable.
First create a new YAML file: **/config/application.yml**

### Configure Mailing

Open **/config/application.yml** and insert the following lines:
```
mail_host: "localhost"
mail_port: "3000"
```


### Configure OAuth

With OAuth you can allow users to sign up with their social accounts.
Out of the box this boilerplate supports:
- Facebook
- Google+

To use this, you'll have to create an App first, here are good tutorials:
[Create Facebook App](https://developers.facebook.com/docs/apps/register#create-app)
[Create Google+ App](http://wpweb.co.in/documents/social-network-integration/google/)

Insert the following content into **/config/application.yml** and paste in your created App IDs and Secrets:
```
facebook_app_id: "{FacebookAppID}"
facebook_app_secret: "{FacebookAppSecret}"

google_app_id: "{GoogleAppID}"
google_app_secret: "{GoogleAppSecret}"
```

Currently name and email are used for generating users.
If you need more user data, check the Facebook documentation at:  https://developers.facebook.com/docs/graph-api/reference/user/

### Remove OAuth

If you want to remove OAuth support, you have to modify just a few files:
**config/initializers/devise.rb**
Comment out this lines:
```
config.omniauth :facebook, ENV["facebook_app_id"], ENV["facebook_app_secret"], scope: 'email', info_fields: 'email, name'

config.omniauth :google_oauth2, ENV["google_app_id"], ENV["google_app_secret"], :strategy_class => OmniAuth::Strategies::GoogleOauth2, skip_jwt: "true"
```

Just remove one line from the login links from these files: **app/views/devise/sessions/new.html.erb** and **app/views/devise/registrations/new.html.erb**
```
<%= render "devise/_social" %>
```

And that's it!

---

## Start server
```
rails s
```
