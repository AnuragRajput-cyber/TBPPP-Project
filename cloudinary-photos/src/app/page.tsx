'use client';

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';


export type UploadResult={
  info:{
     public_id:string;
  },
  event : 'success'
}
export default function Home() {

  const [imageId,setImageId]=useState("");
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CldUploadButton 
        onSuccess={(result:UploadResult|any)=>{
          setImageId(result.info.public_id)
        }}
        uploadPreset="upload_preset" />


      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
        
      </main>
    
  );
}
