const express=require("express")
const app=express();
const session=require("express-session")
const path=require("path");
const user=require("./Database/model")
const mongoose=require("mongoose");
const item = require("./Database/item")
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"abc"
}))
mongoose.connect("mongodb+srv://sanketdas839952:Sanket@123@cluster0.oskkpqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("connect")).catch((err)=>console.log("Not connect",err))
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.get("/",(req,res)=>{
    res.render("login")
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
   const data= await user.findOne({email,password})
   if(!data){
    res.render("login")
   }
   req.session.UserId=data;
    res.redirect("/home")
})
function authentication(req,res,next){
    if(req.session.UserId)
        next();
    else
    res.redirect("/");
}
app.get("/home",authentication,async(req,res)=>{
    let data1=await item.find({})
    res.render("home",{item:data1})
})
app.get("/signuppage",(req,res)=>{
    res.render("signup")
})
app.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;
await user.create({name,email,password})
res.redirect("/")
})
app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})
app.get("/additem",(req,res)=>{
    res.render("additem")
})
app.post("/itemadd",async(req,res)=>{
    const {name,model,price}=req.body;
    await item.create({name,model,price})
    res.redirect("/additem")
})
app.get("/remove",(req,res)=>{
    res.render("remove")
})
app.post("/itemremove",async(req,res)=>{
    const {model}=req.body;
    await item.findOneAndDelete({model})
    res.redirect("/remove")
})
app.get("/update",(req,res)=>{
    res.render("update")
})
app.post("/itemupdate",async(req,res)=>{
    const {model}=req.body;
   const data= await item.findOne({model})
    res.render("realupdate",{data:data})
})
app.post("/realupdate",async(req,res)=>{
const {name,model,price}=req.body
await item.findByOneAndUpdate({name,model,price})
res.redirect("/update")
})
app.listen(3000);
