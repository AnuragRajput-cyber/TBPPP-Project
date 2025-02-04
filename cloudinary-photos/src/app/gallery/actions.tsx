"use server"
import cloudinary from "cloudinary"
import { revalidatePath } from "next/cache"


//server actins are experimental 
export async function setAsFavouriteAction(
    publicId:string,
    isFavourite:boolean,
    path:string
){
    if(isFavourite){
        await cloudinary.v2.uploader.add_tag('favourite', [publicId])
        revalidatePath('/gallery')
    }
    else{
        await cloudinary.v2.uploader.remove_tag('favourite', [publicId])
        
    }
    await new Promise((resolve)=>setTimeout(resolve,1500));
    revalidatePath(path)
}