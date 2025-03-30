import React from "react";
import { useForm } from "react-hook-form";

function Step1({ update, handleNext, data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, errors) => {
    update(data);
    handleNext();
  };

  return (
    <div>
      <h1 className="text-2xl">Step 1</h1>
      <hr className="mt-5" />
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5"
        action=""
      >
        <input
          {...register("name", { required: true, minLength: 3 })}
          defaultValue={data.name}
          className="px-2 block w-3/4 mt-3 py-2 border border-zinc-800 outline-none rounded"
          type="text"
          placeholder="Full Name"
        />
        {errors.name?.type === "required" && (
          <span className="text-red-500 text-xs">This field is required</span>
        )}
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          defaultValue={data.email}
          className="px-2 block w-3/4 mt-3 py-2 border border-zinc-800 outline-none rounded"
          type="text"
          placeholder="Email Address"
        />
        {errors.email?.type === "required" && (
          <span className="text-red-500 text-xs">This field is required</span>
        )}
        <br />
        <input
          value="Next"
          type="submit"
          className="mt-4 px-3 text-xs py-2 bg-blue-600 rounded-4xl text-white"
        />
      </form>
    </div>
  );
}

export default Step1;
