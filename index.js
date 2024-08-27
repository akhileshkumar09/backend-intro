const express = require('express');

const app = express();
const port = 3000;

const addUserMiddleware = (req, res, next)=>{
    req.user = {
        name : 'Akhilesh kumar',
        role : 'Admin'
    }
    next();
}

const addTimeMiddleware = (req, res, next) =>{
    req.time = new Date().toLocaleString();
    
    next();
}



app.get('/', (req, res) =>{
    res.send('Hello word');
});

app.get('/info', addUserMiddleware, addTimeMiddleware, (req, res)=>{
    res.send(`Name : ${req.user.name}, Role : ${req.user.role}, Time : ${req.time}`);
})
app.get('/about', (req, res) =>{
    res.send('This is about page');
});
app.get('/contact', (req, res) =>{
    res.send('Contact us at : contact@example.com');
});
app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello!: ${name}`);
  });

app.listen(port, ()=>{
    console.log(`Server is running on https://localhost:${port}`)
})