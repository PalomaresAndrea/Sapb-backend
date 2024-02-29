import {Router, RouterOptions} from "express";

class AuthRoutes{
    //Objeto de tipo router
    public router: Router;

    //Inicializa 
    constructor(){
        this.router = Router();
        this.config();
    }
    config(){
        this.router.get('/',(req,res)=>{
            res.send('Invocando Autenticación')
        });
    }
}
const authRoutes = new AuthRoutes();
export default authRoutes.router;

