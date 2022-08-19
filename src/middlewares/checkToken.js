const jwt = require('jsonwebtoken');

// middleware như 1 thằng ở giữa, nếu thoả hết điều kiện này nó mới cho đi tiếp, không thỏa thì trả lại ở else

const middlewareController = {
    // verifyToken
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if(token) {
            // Bearer 123abc
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if(err) {
                    return res.status(403).json('Token is not valid')
                }
                req.user = user;
                next();  // Đạt hết đủ điều kiện mới được chạy tiếp
            })
        }
        else {
            return res.status(401).json("You're not authenticated")
        }
        /* Console user ta ra đc 
        {
            id: '62c199895d55c39699e892c2',
            admin: false,
            iat: 1657381521,
            exp: 1657381621
        } */
    },

    // verifyTokenAdmin
    verifyTokenAdmin: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            // Nếu id của user login = id user mình muốn xóa hoặc là admin
            if(req.user.id == req.params.id || req.user.admin) { 
                next();
            }
            else {
                return res.status(403).json("You're not allowed to delete orther...")
            }
        })
    }
}

module.exports = middlewareController;

// Giải thích: Hàm jwt.verify sẽ nhận các params là token=accessToken, secretOrPublicKey=process.env.JWT_ACESS_KEY và callback là function truyền vào.
// Callback sẽ nhận 2 parameter là err và dữ liệu decode. Bởi vì chuỗi JWT chứa thông tin user nên đặt tên thay vì decode bằng user sẽ dễ hiểu hơn
// Sau đó hàm callback sẽ gán req.user = user là thông tin lấy ra đc từ JWT. 
// Sau đó nó sẽ gọi hàm next() là hàm middleware tiếp theo. Ở hàm verifyTokenAdmin sẽ gọi hàm verifyToken có argument next là 1 arrow function thì arrow function đó coi như là 1 middleware function và dc gọi ở dòng 17