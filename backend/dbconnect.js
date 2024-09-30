const mysql=require('mysql')

const myCon=mysql.createConnection({

    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"reactshopping"
})

myCon.connect(err=>{
    if(err) console.log(err)
        else
    console.log("Connected to MySQL...")
})

module.exports=myCon