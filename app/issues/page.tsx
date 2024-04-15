"use client"

import React from 'react';
import Link from 'next/link';
import {IIssue} from "../validation-schemas"
import IssueCard from '../components/issue/issue';

const IssuesPage = () => {
  const [issues, setIssues] = React.useState<IIssue[]>([]);

  const getIssues = () => {
    fetch("http://localhost:3000/api/issues")
      .then((res) => res.json())
      .then((data) => setIssues(data));
  };
  
  React.useEffect(() => {
    getIssues();
  }, []);

  return (
    <div>
      <Link href="/issues/new" className="btn btn-primary">New Issue</Link>

  <div className='flex flex-col gap-5 w-2/4 mt-5'>
    {
      issues.map((issue: IIssue) => (
        <IssueCard title={issue.title} description={issue.description}/>
      ))
    }
  </div>

    </div>
  )
}

export default IssuesPage
