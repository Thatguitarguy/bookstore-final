import React, { useState } from 'react'


import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
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
  const handleBookSubmit = (event) => {
     event.preventDefault();
     const form = event.target;

     const bookTitle = form.bookTitle.value;
     const authorName = form.authorName.value;
     const imageURL = form.imageURL.value;
     const category = form.categoryName.value;
     const bookDescription = form.bookDescription.value;
     const bookPDFURL = form.bookPDFURL.value;

     const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
     }

     console.log(bookObj)

     // send data to db
     
     fetch("https://bookstore-final-0oef.onrender.com/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
     }).then(res => res.json()).then(data => {
     // console.log(data)
     alert("Book uploaded successfully!!!")
     form.reset();
     })
  }
  return (
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>

       <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>  
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
      </div>

      {/* authorName   */}
      <div className='lg:w-1/2'>  
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
      </div>
        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>  
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book image URL" required />
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
        <Textarea id="bookDescription" name='bookDescription' placeholder="Describe your book..." required className='W-full' rows={6} />
        
      </div>

      {/* book pdf link */}

      <div className="mb-2 block">
        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
    
      <TextInput id="bookPDFURL" type="text" name='bookPDFURL' placeholder="book pdf url" required />
    </div>
    <Button type="submit" className='mt-5 bg-blue-700 rounded'>
      Upload Book
      </Button>
      
    </form>
    </div>
  )
}

export default UploadBook