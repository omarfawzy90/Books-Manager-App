import express from 'express';
import {Book} from "../models/bookModel.js";

const router = express.Router();






//Route for saving new books
router.post('/', async (req,res) => 
{
  console.log(req.body);
  try {
    if(
      !req.body.title ||
      !req.body.author ||
      !req.body.publishedYear
    )
    { 
      return res.status(400).json({message: "All fields are required"});
    }

    const newBook = 
    {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear
    }

    const book = await Book.create(newBook);
    return res.status(201).json(book);

  }catch(error){
    console.log(error.message)
    res.status(500).json({message: error.message});
  }
})


//Route for getting all books from DB
router.get('/', async (req,res) => 
{
  try {
    const books = await Book.find({});
    return res.status(200).json(
      {
        count: books.length,
        data: books
      }
    );

  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message});
  }
})


//Route for getting specific book from DB
router.get('/:id', async (req,res) => 
{
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    return res.status(200).json({book});

  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message});
  }
})


//Route to update book
router.put('/:id', async (req,res) => {
  try
  {
    if(
      !req.body.title ||
      !req.body.author ||
      !req.body.publishedYear ||
      !req.body.read
    )
    { 
      return res.status(400).json({message: "All fields are required"});
    }

    const id = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body);
    if (!updatedBook)
    {
      return res.status(404).send({message: "Book not found"});
    }
    return res.status(200).send({message: "Book updated successfully"});

  }
  catch(error)
  {
    console.log(error.message)
    res.status(500).json({message: error.message});
  }
})


router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { read } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { read },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



//Delete a book
router.delete("/:id", async (req,res) => {

  try 
  {
    const id = req.params.id;

    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook)
    {
      return res.status(404).send({message: "Book not found"});
    }
    return res.status(200).send({message: "Book deleted successfully"});
   }
  catch(error)
   {
    console.log(error.message)
    res.status(500).json({message: error.message});
   }
  
});


export default router;