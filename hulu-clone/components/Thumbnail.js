import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import {forwardRef} from "react"
const Thumbnail=forwardRef(({result},ref)=> {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    return (
        <div ref={ref} className='group cursor-pointer p-5 transition duration-200 
        ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image
            layout='responsive'
            height={1080}
            width={1920}
            src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}`||
                `${BASE_URL}${result.poster_path}`}>
            </Image>
            <div className='p-2'>
                <p className="max-w-md truncate">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white 
                transition-all duration-100 ease-in-out sm:group-hover:font-bold">
                {result.title || result.orginal_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                {result.media_type && `${result.media_type}`} •{" "}
                {result.release_date || result.first_air_date} •{" "}
                <ThumbUpIcon className="h-5 mx-2"/>
                {result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
