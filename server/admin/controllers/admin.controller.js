import jwt from "jsonwebtoken"; // install it if not installed

export const adminLogin = async (req, res) => {
  try {

    const { email, password } = req.body;

    const adminEmail = process.env.adminEmail;
    const adminPassword = process.env.adminPassword;


    if (email === adminEmail && password === adminPassword) {
      // Create JWT token
      const token = jwt.sign(
        { isAdmin: true }, // payload
        process.env.JWT_SECRET_KEY, // secret key
        { expiresIn: '1d' } // token validity
      );


      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 26 * 60 * 60 * 1000, // 1 day in milliseconds
        sameSite: "strict"
      })

      res.status(200).json({
        success: true,
        message: "Admin login successful",
             })
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid admin credentials",
      });
    }
  } catch (error) {
    console.error("Error in admin login:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


export const adminLogout = async (req, res) => {

  try {
      res.clearCookie("token",{
        httpOnly:true,
        sameSite:"strict"
      })

      return res.status(200).json({
        success:true,
        message:"Admin logout successful"
      })  
  } catch (error) {
    console.error("Error in admin logout:", error);
    
  }

}