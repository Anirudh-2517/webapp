const express=require('express')
const bp=require('body-parser')
const cors=require('cors')
const send=require('send')
const myCon=require('./dbconnect')
const port=9022
const App= new express()

App.use(cors({origin:"*"}))
App.use(bp.json())

App.get("/api/Products/getallProducts",(req,resp)=>{
    myCon.query("select * from product",(err,response)=>{
        if(err)
            console.log(err)
        else
            resp.send(response)
    })
})

App.post("/api/Products/insertProduct",(req,resp)=>{
    const {pid,pname,price,imageURl}=req.body
    myCon.query("insert into product(pid,pname,price,qtty,imageURl) values(?,?,?,?,?)",[pid,pname,price,1,imageURl],(err,response)=>{
        if(err){
            console.log(err)
        resp.send(err)
        }
        else
            resp.send(response)
    })
})

App.listen(port,err=>
{
    if(err)
        console.log(err)
    else
        console.log("Server running at port "+port)
})