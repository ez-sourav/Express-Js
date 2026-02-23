const express = require('express') 
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/profile',(req,res)=>{
    const profile = {
        name:'Sourav Biswas',
        department:"BCA",
        username:"souravb",
        email:'sourav@gmail.com'
    }
    res.json(profile);
    res.send()
})

app.post('/profile',(req,res)=>{
    const {name,roll} = req.body;
    console.log(`Body ${name} ${roll}`);
    res.send()
})
app.listen(3000,()=>{
    console.log("Server Started : 3000");
})