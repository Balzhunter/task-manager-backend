<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Run Laravel with SQLite

1. Install composer `composer install`
2. Run migrations `php artisan migrate`
3. Run seeds `php artisan db:seed`
4. Install node and then run `npm install`
5. Run build `npm run build `
6. Run server `php artisan serve`
7. Open other terminal and run `npm run dev` for hot reloading

## Run Laravel with MySQL

1. Change env DB_CONNECTION=mysql and uncomment:
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravel
   DB_USERNAME=root
   DB_PASSWORD=
   to put your database credentials.

2. Install composer `composer install`
3. Run migrations `php artisan migrate`
4. Run seeds `php artisan db:seed`
5. Install node and then run `npm install`
6. Run build `npm run build `
7. Run server `php artisan serve`
8. Open other terminal and run `npm run dev` for hot reloading

## Consume API

### Register

POST http://localhost:8000/api/register

```
Headers
   "Accept": "application/json"
form-encoded
  "name": "BalvirHunt2",
  "email": "balvirp3@gmail.com"
  "password": "12345678"
  "password_confirmation": "12345678"
```

### Login

POST http://localhost:8000/api/login

```
Headers
   "Accept": "application/json"
form-encoded
  "name": "BalvirHunt2",
  "password": "12345678"
```

### Logout

POST http://localhost:8000/api/logout

```
Headers
   "Accept": "application/json"
Auth Bearer
   Bearer token example
   1|NKeHisN9Jv3Q5Qv4IQkFWLaMvVgeRw6LWnoBDiqx918fd359
```

### GetTasks

GET http://localhost:8000/api/tasks

```
Headers
   "Accept": "application/json"
Auth Bearer
   Bearer token example
   1|NKeHisN9Jv3Q5Qv4IQkFWLaMvVgeRw6LWnoBDiqx918fd359
```

### CreateTasks

POST http://localhost:8000/api/tasks

```
Headers
   "Accept": "application/json"
Auth Bearer
   Bearer token example
   1|NKeHisN9Jv3Q5Qv4IQkFWLaMvVgeRw6LWnoBDiqx918fd359
Body
   {
      "title": "one title 4",
      "description": "one description",
      "expiration_date": "30-05-2024"
   }
```

### UpdateTasks

PUT http://localhost:8000/api/tasks/{id}

```
Headers
   "Accept": "application/json"
Auth Bearer
   Bearer token example
   1|NKeHisN9Jv3Q5Qv4IQkFWLaMvVgeRw6LWnoBDiqx918fd359
Body
   {
      "title": "one title 4",
      "expiration_date": "30-05-2024",
      "is_complete": true
   }
```

### DeleteTasks

DELETE http://localhost:8000/api/tasks/{id}

```
Headers
   "Accept": "application/json"
Auth Bearer
   Bearer token example
   1|NKeHisN9Jv3Q5Qv4IQkFWLaMvVgeRw6LWnoBDiqx918fd359
```
