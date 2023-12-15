const express = require('express');
const app = express();

app.use (express.json());

const books =[
    {id :1 , name :'html-css'},
    {id :2 , name :'javascript'},
    {id :3 , name :'nodejs'},
    {id :4 , name :'express'}
]

app.get("/api/books", (req,res)=>{
    res.send(books)
})

app.post("/api/books", (req,res)=>{
    const book ={
        id : books.length + 1,
        name : req.body.name
    }
    books.push(book)
    res.status(201).send(book);
})

app.get("/api/books/:id", (req,res)=>{
    const book = books.find((b)=>b.id === parseInt(req.params.id));
    if (!book) res.status(404).send("Berilgan IDga teng bo'lgan kitob topilmadi..");
    res.send(book);
})

const port = process.env.PORT || 5000;

app.listen(port ,()=>{
    console.log(`${port} portni eshitishni boshladim...`);
})