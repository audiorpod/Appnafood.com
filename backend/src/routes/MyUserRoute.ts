import express from "express";
import MyUserController from "../controllers/MyUserController";


const  router = express.Router();


// /api/my/user  -> handel business logic 

router.post("/", MyUserController.createCurrentUser);

export default router;