const expres = require("express");
const router = expres.Router();
const {createProduct, getProducts, deleteProduct, updateProduct} = require("../controllers/productController")


router.get("/products", getProducts);


router.post("/admin/add", createProduct);

router.delete("/admin/delete/:id", deleteProduct);

router.patch("/admin/update/:id", updateProduct);

module.exports = router;
