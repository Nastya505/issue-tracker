"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";

import { IssueForm } from "@/app/validation-schemas";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validation-schemas";

import ErrorMessage from "@/app/components/error-message/error-message";

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const [error, setError] = useState<string | null>(null);

  const mdeOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    };
  }, []);

  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center h-full">
        <form
          className="max-w-xl space-y-5"
          onSubmit={handleSubmit(async (data) => {
            try {
              await axios.post("/api/issues", data);
              router.push("/issues");
            } catch (error) {
              setError("Unaxpected error. Please try again later.");
            }
          })}
        >
          <h1 className="text-3xl text-center text-zinc-600 font-bold">
            New Issue
          </h1>

          <input
            type="text"
            {...register("title")}
            placeholder="Title"
            className="input input-bordered w-full"
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>

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

       
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
        
          {error && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 display-flex justify-end items-end"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}
          <button type="submit" className="btn btn-neutral w-full">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewIssuePage;
