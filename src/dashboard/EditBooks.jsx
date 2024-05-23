import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();
  const bookCategories = [
    "Fiction",
     "Non-Fiction",
     "Mistery",
     "Programming",
     "Science Fiction",
     "Fantasy",
     "Horror",
     "Bibliography",
     "Autobiography",
     "History",
     "Self-help",
     "Memoir",
     "Business",
     "Children-Books",
     "Travel",
     "Religion",
     "Art and design",

  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // handle book submission
  const handleUpdate = (event) => {
     event.preventDefault();
     const form = event.target;

     const bookTitle = form.bookTitle.value;
     const authorName = form.authorName.value;
     const imageURL = form.imageURL.value;
     const category = form.categoryName.value;
     const bookDescription = form.bookDescription.value;
     const bookPDFURL = form.bookPDFURL.value;

     const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
     }

    // console.log(bookObj)
    // update a book data
    fetch(`https://bookstore-final-0oef.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert("Book is updated successfully!!!")
      })

  }
  return (
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

       <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>  
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required defaultValue={bookTitle} />
      </div>

      {/* authorName   */}
      <div className='lg:w-1/2'>  
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName} />
      </div>
        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>  
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book image URL" required defaultValue={imageURL} />
      </div>

      {/* Ctegory */}
      <div className='lg:w-1/2'>  
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }

        </select>
        </div>
        </div>
        {/* bookDescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Describe your book..." required className='W-full' rows={6} defaultValue={bookDescription} />
        
      </div>

      {/* book pdf link */}

      <div className="mb-2 block">
        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
    
      <TextInput id="bookPDFURL" type="text" name='bookPDFURL' placeholder="book pdf url" required defaultValue={bookPDFURL} />
    </div>
    <Button type="submit" className='mt-5 bg-blue-700 rounded'>
      Update Book
      </Button>
      
    </form>
    </div>
  )
}

export default EditBooks