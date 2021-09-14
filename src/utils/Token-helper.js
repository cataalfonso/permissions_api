import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import md5 from 'md5';

const PRIVATE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJNQExGMjMwOSIsIm5hbWUiOiJGcmFuY2lzY28gQWxmb25zbyBCdWl0cmFnbyIsImlhdCI6MTE1MjQ0MjgxN30.NW91BDLWprw_sCwW-aBUF7Os5RZH21EfNcl9RuYz_VU";

export class TokenHelper{
    public static signIn(id: string, userName: string, role: string){
        const accessToken =  jwt.sign({id: id, username: userName, role: role}, PRIVATE_TOKEN,{
            expiresIn:'1h'
        });
        const now = new Date();
        const expires = new Date();
        expires.setHours(now.getHours() + 1);
        return {accessToken, start: now.getTime(), expires: expires.getTime()}
    }
    public static securePassword(password: string){
        return md5(password);
    }

    public static accessTokenValidation(req: Request, res: Response, next){
            const authHeader = req.headers.authorization;
            if (authHeader) {
                const token = authHeader.split(' ')[1];
                jwt.verify(token, PRIVATE_TOKEN, (err, user) => {
                    if (err) {
                        return res.sendStatus(403);
                    }
                    (req as any).user = user;
                    return next();
                });
            } else {
                res.sendStatus(401);
            }
    }
}
