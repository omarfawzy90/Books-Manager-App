import React, {useState} from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import BackButtons from '../components/BackButtons';
import { useSnackbar } from 'notistack';


const DeleteBooks = () => {
      
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const {id} = useParams();
    const {enqueueSnackbar} = useSnackbar();
    
    function handleDeleteBook() {
      setLoading(true);
      axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false)
        enqueueSnackbar("Book Deleted Successfully", {variant: 'success'})
        navigate("/")
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
        enqueueSnackbar('Error', {variant:'error'})
        // alert("Error, check console")
      })
     
  }

  return (
    <div className='p-4'>
      <BackButtons />
      <h1 className='text-3xl my-4'> Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col items-center border-2 border-sky-500 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl color-red-500'>Are you sure you want to delete this book?</h3>

        <button className='p-4 bg-red-400 text-white m-8 w-full hover:bg-red-500 hover:cursor-pointer' onClick={handleDeleteBook}> Yes Delete it </button>
      </div>
    </div>
  )
}

export default DeleteBooks