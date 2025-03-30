import React from "react";
import { useForm } from "react-hook-form";

function Step2({ data, update, handleNext, handlePrev }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          {...register("city", {
            required: "City is required",
          })}
          defaultValue={data.city}
          className="px-2 block w-3/4 mt-3 py-2 border border-zinc-800 outline-none rounded"
          type="text"
          placeholder="City"
        />
        {errors.city && (
          <span className="text-red-500 text-xs">{errors.city.message}</span>
        )}
        <input
          {...register("zipCode", {
            required: "Zip Code is required",
            pattern: {
              value: /^[0-9]{5}$/,
              message: "Zip Code must be 5 digits",
            },
          })}
          defaultValue={data.zipCode}
          className="px-2 block w-3/4 mt-3 py-2 border border-zinc-800 outline-none rounded"
          type="text"
          placeholder="Zip Code"
        />
        {errors.zipCode && (
          <span className="text-red-500 text-xs">{errors.zipCode.message}</span>
        )}
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
