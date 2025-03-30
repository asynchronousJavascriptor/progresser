import React from "react";

function Step3({ handlePrev, data }) {
  return (
    <div>
      <h1 className="text-2xl">Step 3</h1>
      <hr className="mt-5" />
      <div className="flex mt-10 gap-20">
        <div className="mt-4">
          <p className="text-sm text-zinc-500">Full Name</p>
          <p className="text-lg">{data.name}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-zinc-500">Email</p>
          <p className="text-lg">{data.email}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-zinc-500">Zip Code</p>
          <p className="text-lg">{data.zipCode}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-zinc-500">City</p>
          <p className="text-lg">{data.city}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-10">
        <button
          onClick={handlePrev}
          className="mt-4 px-3 text-xs py-2 bg-zinc-800 rounded-4xl text-white"
        >
          Back
        </button>
        <button className="mt-4 px-3 text-xs py-2 bg-green-600 rounded-4xl text-white">
          Finish
        </button>
      </div>
    </div>
  );
}

export default Step3;
