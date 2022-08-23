### Updating ...

- Chuẩn bị các biến môi trường như sau
	|Tên biến              |Bắt buộc |Mô tả                                                                                     |Mặc định        |
	|----------------------|---------|------------------------------------------------------------------------------------------|----------------|
	|PORT                  |❌       |Port để listen (lắng nghe) server api                                                     |3001            |
	|MONGO_URI             |✔       |Connection string để kết nối tới MongoDb                                                  |                |
	|JWT_ACCESS_KEY            |✔       |Khóa bí mật (secret key), dùng trong Json Web token (accessToken)                                     |                |
	|JWT_REFRESH_KEY       |✔       |Khóa bí mật (secret key), dùng trong Json Web token (refreshToken)                             |                |

### API
#### **Register Account** 

- *POST: **api/v1/register*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | firstName  | string | true    |
    | lastName  | string | true    |
    | email  | string | true    |
    | password  | string | true    | 
    | avatar  | string | false    |
    | phone  | string | true    |
    | googleId  | string | false    |
    | facebookId  | string | false    |
    | status  | string | false    |
    | isAdmin  | boolean | default false    |

- Response:
```json
{
    "_id": "62ff067d2a6f2d35b72be673",
    "firstName": "Hai",
    "lastName": "Nguyen",
    "email": "a@gmail.com",
    "isAdmin": false,
    "createdAt": "2022-08-19T03:41:49.494Z",
    "updatedAt": "2022-08-19T03:41:49.494Z",
    "__v": 0,
}
```

#### **Login Account** 
- *POST: **api/v1/login*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | email  | string | true    |
    | password  | string | true    | 

- Response:
```json
{
    "_id": "62ff067d2a6f2d35b72be673",
    "firstName": "Hai",
    "lastName": "Nguyen",
    "email": "a@gmail.com",
    "isAdmin": false,
    "createdAt": "2022-08-19T03:41:49.494Z",
    "updatedAt": "2022-08-19T03:41:49.494Z",
    "__v": 0,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmYwNjdkMmE2ZjJkMzViNzJiZTY3MyIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjYwOTAwNDEyLCJleHAiOjE2NjA5MDA0NDJ9.eL8hG06zfvY_aIWfb6uMFtPccNcjj-NYfFpxYoE5v-k",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmYwNjdkMmE2ZjJkMzViNzJiZTY3MyIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjYwOTAwNDEyLCJleHAiOjE2NjA5MDE0MTJ9.Llr9MuSPvRRWhWON1AJnRMSFz457H1ucjWv-_zwWGwc"
}
```
   ==> `refreshToken is saved in the returned cookie with the key refreshToken`


#### **Refresh Token**
- *POST: **api/v1/refresh*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[Cookie] : refreshToken**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | email  | string | true    |
    | password  | string | true    | 

- Response:
```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmYwNjdkMmE2ZjJkMzViNzJiZTY3MyIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjEyMjY1NzQsImV4cCI6MTY2MTIyNjg3NH0.MbnNR9XEA9UKiDbniZK8Uuoff4W7FlHNzTDowmYiETw"
}
```

#### **Logout Account**
- *POST: **api/v1/logout*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    "message": ""
}
```

#### **Get All Users**
- *GET: **api/v1/user*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    {
        "Info user 1": ""
    },
    {
        "Info user 2": ""
    }
}
```

#### **Get A User**
- *GET: **api/v1/user/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    "Info user": ""
}
```

#### **Add User**
- *POST: **api/v1/user*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | firstName  | string | true    |
    | lastName  | string | true    |
    | email  | string | true    |
    | password  | string | true    | 
    | avatar  | string | false    |
    | phone  | string | true    |
    | googleId  | string | false    |
    | facebookId  | string | false    |
    | status  | string | false    |
    | isAdmin  | boolean | default false    |

- Response:
```json
{
    "firstName": "Hai Test",
    "lastName": "Nguyen",
    "email": "d@gmail.com",
    "password": "123",
    "isAdmin": false,
    "phone": "14522",
    "_id": "630494af24f33a4ee5cc2340",
    "createdAt": "2022-08-23T08:49:51.091Z",
    "updatedAt": "2022-08-23T08:49:51.091Z",
    "__v": 0
}
```

#### **Update User**
- *PUT: **api/v1/user*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | firstName  | string | true    |
    | lastName  | string | true    |
    | email  | string | true    |
    | password  | string | true    | 
    | avatar  | string | false    |
    | phone  | string | true    |
    | googleId  | string | false    |
    | facebookId  | string | false    |
    | status  | string | false    |
    | isAdmin  | boolean | default false    |

- Response:
```json
{
    "message": ""
}
```

#### **Delete User With Params**
- *DELETE: **api/v1/user/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```

#### **Delete User With Body**
- *DELETE: **api/v1/user*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | id  | string | true    |

- Response:
```json
{
    "message": ""
}
```
