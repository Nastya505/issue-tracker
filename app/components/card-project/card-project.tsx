import React from "react";
import Image from "next/image";

interface CardProjectProps {
  title: string;
  img: string;
}
const CardProject = ({ title, img }: CardProjectProps) => {
  return (
    <div className="card w-full max-w-md h-96 glass m-2">
      <figure className="relative w-full h-64">
        <Image 
        src={img} 
        alt={title} 
        fill 
        className="object-cover" 
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">open project</button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
