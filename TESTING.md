# Test rails-react-devise-boilerplate

For testing the following gems are used:

* rspec
* capybara
* database_cleaner
* factory_girl_rails
* faker
* launchy


## Testing

### Run all tests:

To run all tests, open terminal and start test session with:
```
rspec
```

### Run single tests:

#### User visits homepage
Visit index page and expect to see Congrats message.
```
rspec spec/features/user_visits_homepage_spec.rb
```

#### User sign up
Fill in sign up form and expect to be logged in successfully.
```
rspec spec/features/user_signup_spec.rb
```

#### User sign in
Fill in user credentials and expect to be logged in successfully.
```
rspec spec/features/user_signin_spec.rb
```
