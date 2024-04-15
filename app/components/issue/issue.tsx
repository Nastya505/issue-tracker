import React from 'react'

interface Props{
    title: string;
    description: string;
}

const IssueCard = ({title, description}:Props) => {
  return (
    <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked /> 
        <div className="collapse-title text-xl font-medium">
            {title}
        </div>
        <div className="collapse-content"> 
            <p>{description}</p>
        </div>
    </div>
  )
}

export default IssueCard