
import express from 'express'
import fs from 'fs'
const json = fs.readFileSync('example.json','utf-8')
const jsonData = JSON.parse(json)
// console.log(jsonData);

const app = express();
app.use(express.json())
app.get('/user',(req,res)=>{
    res.json({
        id:1,
        name:"Sourav",
        age:21,
        title:"Express Js"
        
    })
})

app.post('/randomphoto',(req,res)=>{
    const limit = req.query.limit || 10
        
    const filterData = jsonData.slice(0,limit)
    res.json({
        data:filterData,
        length:filterData.length
    })
})
app.post('/user',(req,res)=>{
    const data = req.body
    res.json({
        ...data,
        section:data.roll>10 ? "A" : "B"
    })
})
app.listen(4000,()=>{
    console.log("Listening to port 4000");
})