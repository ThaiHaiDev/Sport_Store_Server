### Setup (updating...)

<details>
<summary><b>English</b></summary><br />

- Prepare the environment variables as follows
	|Variable name              |Obligatory |Description                                                                                     |Default        |
	|----------------------|---------|------------------------------------------------------------------------------------------|----------------|
	|PORT                  |❌       |Port to listen to (listen) server api                                                    |3001            |
	|MONGO_URI             |✔       |Connection string to connect to MongoDb                                              |                |
	|JWT_ACCESS_KEY            |✔       |Secret key, used in Json Web token (accessToken)                                     |                |
	|JWT_REFRESH_KEY       |✔       |Secret key, used in Json Web token (refreshToken)                             |                |
	|CLOUDINARY_API_KEY       |✔       |Cloudinary API key to connect to image storage                             |                |
	|CLOUDINARY_API_SECRET       |✔       |Cloudinary API key (secret key) to connect to image storage                           |                |
	|CLOUDINARY_NAME       |✔       |Name of Storage Cloudinary for image storage                             |                |
</details>

<details>
<summary><b>Vietnamese</b></summary><br />

- Chuẩn bị các biến môi trường như sau
	|Tên biến              |Bắt buộc |Mô tả                                                                                     |Mặc định        |
	|----------------------|---------|------------------------------------------------------------------------------------------|----------------|
	|PORT                  |❌       |Port để listen (lắng nghe) server api                                                     |3001            |
	|MONGO_URI             |✔       |Connection string để kết nối tới MongoDb                                                  |                |
	|JWT_ACCESS_KEY            |✔       |Khóa bí mật (secret key), dùng trong Json Web token (accessToken)                                     |                |
	|JWT_REFRESH_KEY       |✔       |Khóa bí mật (secret key), dùng trong Json Web token (refreshToken)                             |                |
	|CLOUDINARY_API_KEY       |✔       |Khóa key của API Cloudinary để kết nối với storage lưu trữ hình ảnh                             |                |
	|CLOUDINARY_API_SECRET       |✔       |Khóa key (secret key) của API Cloudinary để kết nối với storage lưu trữ hình ảnh                           |                |
	|CLOUDINARY_NAME       |✔       |Tên của Storage Cloudinary lưu trữ hình ảnh                             |                |
</details>
<br />

# Description (updating...)
<details>
<summary><b>English</b></summary><br />

Using technologies: NodeJS, Express, MongoDb, Mongoose, jwt-authentication, jwt-authorization, cloudinary
server of an ecommerce website with 3 permissions:
+ Admin (full control, can delete anything, in addition can view customer invoice details as well as statistics on everything of the store)
+ Manager (also has the same rights as admin to be able to manage the store, but does not have the right to delete anything that the admin has not allowed)
+ Customer (only has the right to view and buy goods, does not affect the APIs of higher rights (admin, manager)

***Currently the server is still being updated with the necessary functions, the update will be regularly updated here. Thank you!***
</details>

<details>
<summary><b>Vietnamese</b></summary><br />

Sử dụng các công nghệ: NodeJS, Express, MongoDb, Mongoose, jwt-authentication, jwt-authorization, cloudinary
server của 1 trang web ecommerce với 3 quyền:
+ Admin (toàn quyền thao tác, có thể delete bất cứ gì, ngoài ra có thể xem chi tiết hóa đơn khác hàng cũng như thống kê mọi thứ của cửa hàng)
+ Manager (cũng có các quyền gần giống với admin để có thể quản lý store, tuy nhiên không có quyền xóa bất cứ gì mà admin chưa cho phép)
+ Customer (chỉ có quyền xem và mua hàng, không tác động gì đến các API của quyền cao hơn (admin, manager)

***Hiện tại server vẫn đang được tiếp tục update các chức năng cần thiết, phần cập nhật sẽ thường xuyên được update tại đây. Xin cảm ơn!***
</details>
<br />


# List API (updating...)

<details>
<summary><b>Register Account</b></summary><br />

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
</details>

<details>
<summary><b>Login Account</b></summary><br />

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
</details>

<details>
<summary><b>Refresh Token</b></summary><br />

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
</details>

<details>
<summary><b>Logout Account</b></summary><br />

- *POST: **api/v1/logout*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Get All Users</b></summary><br />

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
</details>

<details>
<summary><b>Get A User</b></summary><br />

- *GET: **api/v1/user/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    "Info user": ""
}
```
</details>

<details>
<summary><b>Add User</b></summary><br />

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
</details>

<details>
<summary><b>Update User</b></summary><br />

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
</details>

<details>
<summary><b>Delete User With Params</b></summary><br />

- *DELETE: **api/v1/user/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Delete User With Body</b></summary><br />

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
</details>

<details>
<summary><b>Get All Categories</b></summary><br />

- *GET: **api/v1/category*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    {
        "Info cate 1": ""
    },
    {
        "Info cate 2": ""
    }
}
```
</details>

<details>
<summary><b>Get A Category</b></summary><br />

- *GET: **api/v1/category/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info cate": {
        ...,
        products: [
            {
                infoProduct_1
            },
            {
                infoProduct_2
            }
        ]
    }
}
```
</details>

<details>
<summary><b>Add A Category</b></summary><br />

- *POST: **api/v1/category*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | image  | string | true    |
    | slug  | string | false    |
    | desc  | string | false    |
    | countProduct  | number | false    |

- Response:
```json
{
    infoCateNew: {}
}
```
</details>

<details>
<summary><b>Update A Category</b></summary><br />

- *PUT: **api/v1/category*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | image  | string | true    |
    | slug  | string | false    |
    | desc  | string | false    |
    | countProduct  | number | false    |

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Delete A Category With Params</b></summary><br />

- *DELETE: **api/v1/category*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Delete A Category With Body</b></summary><br />

- *DELETE: **api/v1/category*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | _id  | string | true    |

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Get All Products</b></summary><br />

- *GET: **api/v1/product*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info product 1": ""
}
```
</details>

<details>
<summary><b>Get A Product</b></summary><br />

- *GET: **api/v1/product/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info product": {}
}
```
</details>

<details>
<summary><b>Add A Product</b></summary><br />

- *POST: **api/v1/product*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | slug  | string | false    |
    | thumbnail  | string | true    |
    | desc  | string | false    |
    | videoid  | string | false    |
    | pictures  | string | false    |
    | quantity  | number | true    |
    | sold  | number | default 0    |
    | price  | number | false    |
    | category  | string | false    |
    | pictures  | string | false    |

- Response:
```json
{
    infoProductNew: {}
}
```
</details>

<details>
<summary><b>Update A Product</b></summary><br />

- *PUT: **api/v1/product*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | slug  | string | false    |
    | thumbnail  | string | true    |
    | desc  | string | false    |
    | videoid  | string | false    |
    | pictures  | string | false    |
    | quantity  | number | true    |
    | sold  | number | default 0    |
    | price  | number | false    |
    | category  | string | false    |
    | pictures  | string | false    |

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Delete A Product</b></summary><br />

- *DELETE: **api/v1/product*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>

