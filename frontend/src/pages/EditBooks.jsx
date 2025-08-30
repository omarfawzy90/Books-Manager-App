import React, {useState, useEffect} from 'react';
import BackButtons from '../components/BackButtons';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';



const EditBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedYear, setPublishyear] = useState('');
    const [read, setRead] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 
    const {id} = useParams();
    const {enqueueSnackbar} = useSnackbar();
    


    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/books/${id}`)
        .then((res) => {
            setAuthor(res.data.book.author);
            setPublishyear(res.data.book.publishedYear);
            setTitle(res.data.book.title);
            setLoading(false)
            .catch((err) => {
            setLoading(false);
            alert("An error, Check the console");
            console.log(err);
         })
        });
    }, [])

    function handleEditBook(){
        const data = {
            title,
            author,
            publishedYear,
            read,
        };
        setLoading(true);
        axios
        .put(`http://localhost:3000/books/${id}`, data)
        .then(() => {
            setLoading(false);
            enqueueSnackbar("Book Edited Successfully", {variant: 'success'})
            navigate("/");
        })
        .catch((err) => {
            setLoading(false);
            //alert('An error happend, check console')
            enqueueSnackbar('Error', {variant:'error'})
            console.log(err);
        })
    }

  return (
    <div className='p-4'>
        <BackButtons />
        <h1 className='text-3xl my-4'>Edit Book</h1>
        {loading ? <Spinner /> : "" }
        <div className='felx flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Title</label>
                <input 
                type='text'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'></input>
            </div>

            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Author</label>
                <input 
                type='text'
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'></input>
            </div>

             <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Publish year</label>
                <input 
                type='text'
                value={publishedYear}
                onChange={(e)=> setPublishyear(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'></input>
            </div>

             <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Read or not</label>
                <input 
                type='checkbox'
                value={read}
                onChange={(e)=> setRead(e.target.checked)}
                className='border-2 border-gray-500 px-4 py-2 h-6 w-6 w-full hover:border-blue-500 hover:cursor-pointer'></input>
            </div>

            <button className='p-2 bg-sky-300 m-8 hover:cursor-pointer hover:bg-sky-400' onClick={handleEditBook}>
                Save
            </button>

        </div>
    </div>
  )
}

export default EditBooks