"use client";

import React, {useMemo} from 'react';
import dynamic from 'next/dynamic';
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })
import "easymde/dist/easymde.min.css";
import axios from 'axios'
import { useRouter } from 'next/navigation'

import { useForm, Controller } from "react-hook-form"

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {

  const { register, control, handleSubmit } = useForm<IssueForm>();

  const mdeOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false
    }
  }, []);


  const router = useRouter()

  return (
    <div className='flex items-center justify-center'>
      <form className="max-w-xl space-y-5" onSubmit={handleSubmit( async (data) => 
      {
        await axios.post('/api/issues', data);
        router.push('/issues');
      })}>

        <h1 className="text-3xl text-center text-zinc-600 font-bold">New Issue</h1>

        <input type="text" {...register("title")} placeholder="Title" className="input input-bordered w-full" />

        <Controller
          control={control}
          name="description"
          render={({ field: { ref, value, onBlur, onChange } }) => (
            <SimpleMDE
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className="textarea textarea-bordered"
              placeholder="Description"
              options={mdeOptions}
            />
          )}
        />

        <button type='submit' className="btn btn-neutral w-full">Submit</button>
      </form>
    </div>
  )
}

export default NewIssuePage
