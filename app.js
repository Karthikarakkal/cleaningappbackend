const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const {cleaning}=require("./model/cleaning")




const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://karthi:Karthikarakkal@cluster0.xi3nlpm.mongodb.net/clgdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let cle=new cleaning(input)
    cle.save()
    res.json({status:"success"})
})

app.listen(8005,(req,res)=>{
    console.log("server started")
})