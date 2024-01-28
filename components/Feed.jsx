"use client"

import { useState } from 'react';

export default function Feed() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // Process the result as needed
      } else {
        console.error('Error uploading image:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className='w-full h-full py-40 text-center '>
      <div className='flex justify-center gap-0'>
        <h1 className='font-bold orange_gradient capitalize items-center'>
          Drop Your Image Here:-
        </h1>
        <form action="" className='text-center'>
          <input type="file" onChange={handleImageChange} accept='image/*'/>
        </form>
        <button className='font-bold bg-orange_gradient box-border hover:bg-orange-500' onClick={handleUpload}>
          Upload Image
        </button>
      </div>
    </div>
  );
}
