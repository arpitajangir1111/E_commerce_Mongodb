import  express  from "express";
import AdminModel from "./AdminModel.js";

const AdminRouter = express.Router();

AdminRouter.post("/register",async(req,res)=>{
    let UsertoRegister = new AdminModel(req.body)
    let result = await UsertoRegister.save()
    res.json(result)

})

    AdminRouter.post("/Login",async(req,res)=>{
        if(req.body.username && req.body.password){
            let UsertoLogin = await AdminModel.findOne(req.body).select("_password")

            if(UsertoLogin){
                res.send(UsertoLogin)
            }
            else{
                res.send({result:"no user found"})
            }
        }
        
            else
            {
                res.send({result:"Plzz enter the fields"})
            }
        
    })
    



export default AdminRouter