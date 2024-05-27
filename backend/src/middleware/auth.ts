import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import User from "../models/user";


// to prevent typos in type script   and adding custom  properties 
declare global {
   namespace Express {
        interface Request {
      userId: string;
      auth0Id: string;
    }
   }
}

export const jwtCheck = auth({   // express is going to pass the request to jwt function 
    audience: process.env.Auth0_AUDIENCE,          // check the authorization token for bearer token 
    issuerBaseURL: process.env.AUTH0_ISSUER_URL,
    tokenSigningAlg: 'RS256',
  });

  export const jwtParse = async(
    req: Request,
     res: Response, 
     next: NextFunction
    )  => {
      const { authorization } = req.headers;


      // bearer opqwkdpoewqkdopewqdpkewo

      if( !authorization || ! authorization.startsWith("Bearer ")){
        return res.sendStatus(401);
      }

      const token = authorization.split(" ")[1];

      try {
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0Id = decoded.sub;     // sub is convention where auth0Id hold 

        const user = await User.findOne({auth0Id })

        if(!user){
          return res.sendStatus(401);
        }

        req.auth0Id = auth0Id as string ;   // here we had defined as sting bec its help to understand the machine that it is a string 
        req.userId = user._id.toString();
        next();    // telling the express that we are finished 


      } catch (error){
        return res.sendStatus(401);
      }

  };