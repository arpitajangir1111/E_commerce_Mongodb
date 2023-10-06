import  express  from "express";
import cors from "cors"
import ProductRouter from "./ProductRouter.js"
import mongoose from "mongoose";

const connection = mongoose.connect ("mongodb://127.0.0.1:27017/ecommerce")
const port = 4000
const app = express()
app.use(express.json())
app.use(cors())

app.use("/product",ProductRouter)



connection.then(()=>{
    app.listen(8000,()=> console.log("server started at 8000"))
})
.catch((err)=> console.log("ERROR"))