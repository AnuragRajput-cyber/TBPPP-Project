"use client"

import { Heart } from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import { setAsFavouriteAction } from "./actions"
import { useTransition } from "react";
import { searchResult } from "./page";
import { FullHeart } from "@/components/icons/full-heart";


export function CloudinaryImage(props:any & {imagedata: searchResult;path:string}){

  const [transition, startTransition] = useTransition();
  const {imagedata} = props;
  const isFavourited = imagedata.tags.includes('favourite');
    return (
    <div className="relative">
      <CldImage {...props} src={imagedata.public_id}/>
      {isFavourited ? 
      (<FullHeart
      onClick={()=>{
        startTransition(()=>{
          setAsFavouriteAction(imagedata.public_id,false,props.path);
        });
        
      }} 
      className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
      />
    ):(
      <Heart
      onClick={()=>{
        startTransition(()=>{
          setAsFavouriteAction(imagedata.public_id,true,props.path);
        });
        
      }} 
      className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
      />)}
      
    </div>
    ) 
    
}