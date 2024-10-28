

import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
      try {
            const { token } = req.headers;
            if (!token) {
                  return res.json({ success: false, message: 'Not Authorized, try again!' });
            }

            const decode_token = jwt.verify(token, process.env.JWT_SECRET);
            const { isAdmin } = decode_token
            // console.log("admin", isAdmin)
            if (!isAdmin) {
                  return res.json({ success: false, message: 'Not Authorized, try again!' });
            }

            next();
      } catch (error) {
            console.log('Admin Auth Error', error);
            return res.json({ success: false, message: error?.message });
      }
};

export default adminAuth;
