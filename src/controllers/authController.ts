import {Request, Response} from "express";
import {authController} from '../controllers/autControllers';

class authController{

    public async iniciarSesion(req: Request, res:Response){
        const {email,password} = req.doby;
        return res.json({message: "Autenticación correcta",
    email: email,
    password:password});
    }
}