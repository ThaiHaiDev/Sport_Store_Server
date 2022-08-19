### Updating ...

- Chuẩn bị các biến môi trường như sau
	|Tên biến              |Bắt buộc |Mô tả                                                                                     |Mặc định        |
	|----------------------|---------|------------------------------------------------------------------------------------------|----------------|
	|PORT                  |❌       |Port để listen (lắng nghe) server api                                                     |3001            |
	|MONGO_URI             |✔       |Connection string để kết nối tới MongoDb                                                  |                |
	|JWT_ACCESS_KEY            |✔       |Khóa bí mật (secret key), dùng trong Json Web token (accessToken)                                     |                |
	|JWT_REFRESH_KEY       |✔       |Khóa bí mật (secret key), dùng trong Json Web token (refreshToken)                             |                |

### API
#### Register Account 

- *POST: **api/v1/register*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | firstName  | string | true    |
    | lastName  | string | true    |
    | email  | string | true    |
    | password  | string | true    | 
    | avatar  | string | false    |
    | phone  | string | false    |
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
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmYwNjdkMmE2ZjJkMzViNzJiZTY3MyIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjYwOTAwNDEyLCJleHAiOjE2NjA5MDA0NDJ9.eL8hG06zfvY_aIWfb6uMFtPccNcjj-NYfFpxYoE5v-k",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmYwNjdkMmE2ZjJkMzViNzJiZTY3MyIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjYwOTAwNDEyLCJleHAiOjE2NjA5MDE0MTJ9.Llr9MuSPvRRWhWON1AJnRMSFz457H1ucjWv-_zwWGwc"
}
```
