const express=require('express')

const PORT = process.env.PORT || 4000;

const app=express()

app.listen(PORT,()=>{console.log('app started')})
app.get('/',(req,res)=>{
    res.send('Server is running')
})