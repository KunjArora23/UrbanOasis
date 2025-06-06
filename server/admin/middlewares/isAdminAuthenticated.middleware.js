import jwt from 'jsonwebtoken';

export const isAdminAuthenticated=(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"No token provided, authorization denied"
            })
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
       if(!decoded){
            return res.status(401).json({
                success:false,
                message:"Token is not valid"
            })
        }

       
        next();
        
    } catch (error) {
        console.error("Error in admin authentication:", error);
        return res.status(500).json({
            success: false,
            message: "Error in admin authentication",
        });
        
    }
}