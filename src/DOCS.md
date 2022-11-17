# User management system
### GET - _Get all data_
_https://localhost:3000/_
### GET - _Get all user data_
_https://localhost:3000/users_
### POST - _Create new user_
_https://localhost:3000/_

POST request payload
```
name
address
phone
email
```
### GET - _Get info about specific user_
_https://localhost:3000/users/:id_
### POST - _Create user with specific ID_
_https://localhost:3000/users/:id_

POST request payload
```
name
address
phone
email
```
### PUT - _Edit existing user_
_https://localhost:3000/users/:id_

PUT request payload
```
name (optional)
address (optional)
phone (optional)
email (optional)
```
### DELETE - _Delete user with all of their data_
_https://localhost:3000/users/:id_
### GET - _Get all user data including invoices & services_
_https://localhost:3000/users/:id/all_
### GET - _Get all invoices for selected user_
_https://localhost:3000/users/:id/invoices_
### GET - _Get specific invoice for selected user_
_https://localhost:3000/users/:userid/invoices/:invoiceid_
### GET - _Get all services for selected user_
_https://localhost:3000/users/:id/services_
### POST - _Create new service for selected user_

POST request payload
```
name
price
```
### GET - _Get specific service for selected user_
_https://localhost:3000/users/:userid/services/:serviceid_
### DELETE - _Delete user service_
_https://localhost:3000/users/:userid/services/:serviceid_
### PUT - _Edit existing service_
_https://localhost:3000/users/:userid/services/:serviceid_

PUT request payload
```
name (optional)
price (optional)
```