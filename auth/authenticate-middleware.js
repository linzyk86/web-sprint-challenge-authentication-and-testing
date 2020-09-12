
const jwt = require("jsonwebtoken")

function auth(){

    return async(req, res, next)=>{
        const authError = {
            message:"Invalid credentials",
        }
        try{
            const token = req.headers.authorization
            if(!token){
                return res.status(401).json(authError)
            }
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
                if(err){
                    return res.status(401).json(authError)
                }
                req.token = decoded

                next()
            })
        } catch(err){
            next(err)
        }
    }
}

module.exports = auth






// module.exports = (req, res, next) => {
//   res.status(401).json({ you: 'shall not pass!' });
// };
