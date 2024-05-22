import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({   // express is going to pass the request to jwt function 
    audience: process.env.Auth0_AUDIENCE,          // check the authorization token for bearer token 
    issuerBaseURL: process.env.AUTH0_ISSUER_URL,
    tokenSigningAlg: 'RS256',
  });