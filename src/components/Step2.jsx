import React from "react";
import { useForm } from "react-hook-form";

function Step2({ update, handleNext, handlePrev }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    update(data);
    handleNext();
  };

  return (
    <div>
      <h1 className="text-2xl">Step 2</h1>
      <hr className="mt-5" />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5" action="">
        <input
          {...register("city")}
          className="px-2 block w-3/4 mt-3 py-2 border border-zinc-800 outline-none rounded"
          type="text"
          placeholder="City"
        />
        <input
          {...register("zipCode")}
          className="px-2 block w-3/4 mt-3 py-2 border border-zinc-800 outline-none rounded"
          type="text"
          placeholder="Zip Code"
        />
        <div className="flex gap-2">
          <input
            type="button"
            value="Previous"
            onClick={handlePrev}
            className="mt-4 px-3 text-xs py-2 bg-zinc-800 rounded-4xl text-white"
          />
          <input
            value="Next"
            type="submit"
            className="mt-4 px-3 text-xs py-2 bg-blue-600 rounded-4xl text-white"
          />
        </div>
      </form>
    </div>
  );
}

export default Step2;
