import  express  from "express";
import cors from "cors"
import ProductRouter from "./ProductRouter.js"
import mongoose from "mongoose";
import AdminRouter from "./AdminRouter.js";
import UserRouter from  "./UserRouter.js"

const connection = mongoose.connect ("mongodb://127.0.0.1:27017/ecommerce")
const app = express()
app.use(express.json())
app.use(cors())

app.use("/product",ProductRouter)
app.use('/User',UserRouter)
app.use('/admin',AdminRouter)



connection.then(()=>{
    app.listen(8000,()=> console.log("server started at 8000"))
})
.catch((err)=> console.log("ERROR"))