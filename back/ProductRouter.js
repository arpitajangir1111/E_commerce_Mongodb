import express from "express"
import productModel from "./productModel.js";
import multer from "multer";
import path from "path"

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
    let allProducts = await productModel.find({});
    res.json(allProducts)
})

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, callback) {
       
        const ext = path.extname(file.originalname);
        const filename = req.body.name + ext;
        callback(null, filename);
    },
})
const upload = multer({ storage: storage });

productRouter.post("/add", upload.single("image"), async (req, res) => {
    const { name, price, category, company } = req.body;
    const image = req.file;
    console.log(image)
    let productToAdd = new productModel({ name, price, category, company, image })
    let result = await productToAdd.save();
    res.json(result)
})

productRouter.delete("/del/:id", async (req, res) => {
    const productToDeleteId = req.params.id;
    let result = await productModel.deleteOne({ _id: productToDeleteId })
    res.json(result);
})

productRouter.get("/edit/:id", async (req, res) => {
    let result = await productModel.findOne({ _id: req.params.id })
    if (result) {
        res.json(result)
    } else {
        res.send({ Result: "NO Product Found" })
    }
})

productRouter.put("/update/:id", upload.single("image"), async (req, res) => {
    const { name, price, category, company } = req.body
    let image = req.file
    const productToUpdate = { name, price, category, company, image }
    let result = await productModel.updateOne(
        { _id: req.params.id },
        {
            $set: productToUpdate
        }
    )
    res.json(result)
})
export default productRouter