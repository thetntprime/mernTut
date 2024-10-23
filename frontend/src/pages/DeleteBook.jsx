import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navi = useNavigate();

    const handleDeleteBook = () => {
        setLoading(true);

        axios.delete(`http://localhost:5555/books/${id}`)
        .then((response) => {
            setLoading(false);
            navi('/');
        })
        .catch((error) => {
            setLoading(false);
            alert('Something went wrong, please check the console');
            console.log(error);
        })
    }

    return (
        <div className="p-4">
            <BackButton/>
            <h1 className='text-4xl my-4'>Delete Book</h1>
            {loading ? <Spinner/> : ''}
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>

                <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DeleteBook