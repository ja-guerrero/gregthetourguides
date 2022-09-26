import React from "react";

interface prop{
    name:string
    description: string
    img: string
    phone: string
}

export default function Card({name, description, img, phone}:prop){
    return (
    <div className="Card">
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
        <img className=" w-full h-48 object-cover" src={img} alt=""/>
        </a>
        <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
        <p className="text-gray-700 text-base mb-4">
            Rating: {description}/5
        </p>
        <p className="text-gray-700 text-base mb-4">
            Phone: {phone}
        </p>
        </div>
    </div>
    </div>
    )
}