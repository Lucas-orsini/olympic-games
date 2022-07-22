# symfony-Lucas-orsini
symfony-Lucas-orsini created by GitHub Classroom

## Install project 

 ``` 
 composer install
 ```
 ## Create database

 ``` 
 php bin/console doctrine:database:create
 ```

## Create migration 
 ``` 
php bin/console doctrine:migrations:diff

php bin/console doctrine:migrations:migrate
 ``` 
## Load fixtures 
 ``` 
php bin/console doctrine:fixtures:load
 ``` 
## Project start 
 ``` 
symfony server:start
 ``` 
