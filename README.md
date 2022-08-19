### Updating ...

- Chuẩn bị các biến môi trường như sau
	|Tên biến              |Bắt buộc |Mô tả                                                                                     |Mặc định        |
	|----------------------|---------|------------------------------------------------------------------------------------------|----------------|
	|PORT                  |❌       |Port để listen (lắng nghe) server api                                                     |3001            |
	|MONGO_URI             |✔       |Connection string để kết nối tới MongoDb                                                  |                |
	|JWT_ACCESS_KEY            |✔       |Khóa bí mật (secret key), dùng trong Json Web token (accessToken)                                     |                |
	|JWT_REFRESH_KEY       |✔       |Khóa bí mật (secret key), dùng trong Json Web token (refreshToken)                             |                |