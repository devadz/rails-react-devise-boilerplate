# Test rails-react-devise-boilerplate

For testing the following gems are used:

* rspec
* capybara
* database_cleaner
* factory_girl_rails
* faker
* launchy
* selenium-webdriver


# Setup

## Download and install Firefox into Applications folder (Mac OS X)
Download from https://www.mozilla.org/firefox and install Firefox.app into Mac OS X Application folder.

## Install geckodriver
The selenium-webdriver gem requires geckodriver for JavaScript enabled tests.
I recommend installation using [Homebrew](http://brew.sh/)
```
brew install geckodriver
```


---

# Testing

## Run all tests:

To run all tests, open terminal and start test session with:
```
rspec
```

---

## Run single tests:

### User visits homepage
Visit index page and expect to see Congrats message.
```
rspec spec/features/user_visits_homepage_spec.rb
```

### User sign up
Fill in sign up form and expect to be logged in successfully.
```
rspec spec/features/user_signup_spec.rb
```

### User sign in
Fill in user credentials and expect to be logged in successfully.
```
rspec spec/features/user_signin_spec.rb
```
