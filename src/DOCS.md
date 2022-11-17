# User management system
### GET - _Get all data_
Route - _https://localhost:3000/_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 825
ETag: W/"339-83L3oSD6FQFIhRsw1jkare8zvjY"
Date: Thu, 17 Nov 2022 17:26:59 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "userId": 1,
        "userInfo": {
            "name": "Jožko Mrkvička",
            "address": "Hodžovo Námestie 1",
            "phone": "+421912319128",
            "email": "jozo@mrkvicka.sk"
        },
        "invoices": [
            {
                "id": 1,
                "services": [
                    {
                        "id": 1,
                        "name": "Domena - testujem.xyz",
                        "price": 9.99
                    },
                    {
                        "id": 2,
                        "name": "Web - testujem.xyz",
                        "price": 5.99
                    }
                ],
                "totalPrice": 15.98
            }
        ],
        "services": [
            {
                "id": 1,
                "name": "Domena - testujem.xyz",
                "price": 9.99
            },
            {
                "id": 2,
                "name": "Web - testujem.xyz",
                "price": 5.99
            }
        ]
    },
    {
        "userId": 2,
        "userInfo": {
            "name": "Peter Malý",
            "address": "Zochová 12",
            "phone": "+421908621098",
            "email": "p.maly@gmail.com"
        },
        "invoices": [
            {
                "id": 1,
                "services": [
                    {
                        "id": 1,
                        "name": "Web - test.xyz",
                        "price": 3.99
                    }
                ],
                "totalPrice": 3.99
            },
            {
                "id": 2,
                "services": [
                    {
                        "id": 2,
                        "name": "Virtual Server",
                        "price": 25.99
                    }
                ],
                "totalPrice": 25.99
            }
        ],
        "services": [
            {
                "id": 1,
                "name": "Web - test.xyz",
                "price": 3.99
            },
            {
                "id": 2,
                "name": "Virtual Server",
                "price": 25.99
            }
        ]
    }
]
```
## User management
### GET - _Get all user data_
Route - _https://localhost:3000/users_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 259
ETag: W/"103-tSQym53hlMFXxiCXhDYX1xx6tD8"
Date: Thu, 17 Nov 2022 17:24:10 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "userId": 1,
        "userInfo": {
            "name": "Jožko Mrkvička",
            "address": "Hodžovo Námestie 1",
            "phone": "+421912319128",
            "email": "jozo@mrkvicka.sk"
        }
    },
    {
        "userId": 2,
        "userInfo": {
            "name": "Peter Malý",
            "address": "Zochová 12",
            "phone": "+421908621098",
            "email": "p.maly@gmail.com"
        }
    }
]
```
### POST - _Create new user_
Route - _https://localhost:3000/_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 124
ETag: W/"7c-M3/HBvL58iwqXwVKxBPotXRF1NQ"
Date: Thu, 17 Nov 2022 17:29:13 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
    "userId": 3,
    "userInfo": {
        "name": "František Dlhý",
        "address": "Zochova 14",
        "phone": "+421912836123",
        "email": "frand@gmail.com"
    }
}
```
### GET - _Get info about specific user_
Route - _https://localhost:3000/users/:id_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 135
ETag: W/"87-LCvziMZBNGF1ecmdmPeaQxQ4phA"
Date: Thu, 17 Nov 2022 17:31:44 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
    "userId": 1,
    "userInfo": {
        "name": "Jožko Mrkvička",
        "address": "Hodžovo Námestie 1",
        "phone": "+421912319128",
        "email": "jozo@mrkvicka.sk"
    }
}
```
### POST - _Create user with specific ID_
Route - _https://localhost:3000/users/:id_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 125
ETag: W/"7d-f2CaS61/8yZ6Fs2zDVqBkFutqYA"
Date: Thu, 17 Nov 2022 17:33:37 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
    "userId": 10,
    "userInfo": {
        "name": "František Dlhý",
        "address": "Zochova 14",
        "phone": "+421912836123",
        "email": "frand@gmail.com"
    }
}
```
### PUT - _Edit existing user_
Route - _https://localhost:3000/users/:id_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 134
ETag: W/"86-QQ40DU6KhrRh/3P9i6tj0mfuNbs"
Date: Thu, 17 Nov 2022 17:35:43 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
    "userId": 1,
    "userInfo": {
        "name": "Jozef Peter Mak",
        "address": "Hodžovo Námestie 1",
        "phone": "+421912319128",
        "email": "jozo@mrkvicka.sk"
    }
}
```
### DELETE - _Delete user with all of their data_
Route - _https://localhost:3000/users/:id_

Example response:
```
[
    {
        "userId": 1,
        "userInfo": {
            "name": "Jozef Peter Mak",
            "address": "Hodžovo Námestie 1",
            "phone": "+421912319128",
            "email": "jozo@mrkvicka.sk"
        },
        "invoices": [
            {
                "id": 1,
                "services": [
                    {
                        "id": 1,
                        "name": "Domena - testujem.xyz",
                        "price": 9.99
                    },
                    {
                        "id": 2,
                        "name": "Web - testujem.xyz",
                        "price": 5.99
                    }
                ],
                "totalPrice": 15.98
            }
        ],
        "services": [
            {
                "id": 1,
                "name": "Domena - testujem.xyz",
                "price": 9.99
            },
            {
                "id": 2,
                "name": "Web - testujem.xyz",
                "price": 5.99
            }
        ]
    }
]
```
### GET - _Get all user data including invoices & services_
Route - _https://localhost:3000/users/:id/all_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 414
ETag: W/"19e-hhK2ZpZpXOP0AtAyofZuoyKAwFc"
Date: Thu, 17 Nov 2022 17:37:13 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
    "userId": 2,
    "userInfo": {
        "name": "Peter Malý",
        "address": "Zochová 12",
        "phone": "+421908621098",
        "email": "p.maly@gmail.com"
    },
    "invoices": [
        {
            "id": 1,
            "services": [
                {
                    "id": 1,
                    "name": "Web - test.xyz",
                    "price": 3.99
                }
            ],
            "totalPrice": 3.99
        },
        {
            "id": 2,
            "services": [
                {
                    "id": 2,
                    "name": "Virtual Server",
                    "price": 25.99
                }
            ],
            "totalPrice": 25.99
        }
    ],
    "services": [
        {
            "id": 1,
            "name": "Web - test.xyz",
            "price": 3.99
        },
        {
            "id": 2,
            "name": "Virtual Server",
            "price": 25.99
        }
    ]
}
```
### GET - _Get all invoices for selected user_
Route - _https://localhost:3000/users/:id/invoices_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 175
ETag: W/"af-8m/LuFcD0A0gReM87bo+uPApoc0"
Date: Thu, 17 Nov 2022 17:59:14 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "id": 1,
        "services": [
            {
                "id": 1,
                "name": "Web - test.xyz",
                "price": 3.99
            }
        ],
        "totalPrice": 3.99
    },
    {
        "id": 2,
        "services": [
            {
                "id": 2,
                "name": "Virtual Server",
                "price": 25.99
            }
        ],
        "totalPrice": 25.99
    }
]
```
### GET - _Get specific invoice for selected user_
Route - _https://localhost:3000/users/:userid/invoices/:invoiceid_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 85
ETag: W/"55-R3pRkzY9wrku1W0vqfxsvcoiWiU"
Date: Thu, 17 Nov 2022 17:59:24 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
    "id": 1,
    "services": [
        {
            "id": 1,
            "name": "Web - test.xyz",
            "price": 3.99
        }
    ],
    "totalPrice": 3.99
}
```
### GET - _Get all services for selected user_
Route - _https://localhost:3000/users/:id/services_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 94
ETag: W/"5e-ceZbhzwawRbSnZM0kF0Phbl0HfY"
Date: Thu, 17 Nov 2022 18:05:03 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
    {
        "id": 1,
        "name": "Web - test.xyz",
        "price": 3.99
    },
    {
        "id": 2,
        "name": "Virtual Server",
        "price": 25.99
    }
]
```
### GET - _Get specific service for selected user_
Route - _https://localhost:3000/users/:userid/services/:serviceid_

Example response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 45
ETag: W/"2d-84GrzMJ0jIy3coRmxETKG2pOoiM"
Date: Thu, 17 Nov 2022 18:05:05 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
    "id": 1,
    "name": "Web - test.xyz",
    "price": 3.99
}
```