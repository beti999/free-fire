const express=require("express");
const multer=require("multer");
const path=require("path")
const cors=require("cors");
const exp = require("constants");
const app=express();
const port=3000;
//const uploads=multer({dest:"uploads/"});
// const storage=multer.diskStorage({
// destination:function(req,file,cb){
//    return cb(null,"./uploads")
// },
// filename:function(req,file,cb){
//    return cb(null,file.originalname)
// }
// })
// app.use(cors());
// // app.use(express.static("./public"))
// app.use(express.urlencoded({extended:false}))
// app.set("view engine","ejs")
// app.set("views",path.resolve("./views"))
// app.get("/",(req,res)=>{
//     res.render("multer")
// })
// const upload=multer({storage:storage});
// app.post("/upload",upload.single("file"),(req,res)=>{
//     res.redirect("/")
// })
// app.listen(port,()=>{
//     console.log(`Server is listening to the port number: ${port}`)
// })
