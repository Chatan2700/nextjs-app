import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // const id = params.id; // Alternative way to extract id

  return (
    <>
      <h1 className="text-3xl">User profile: {id}</h1>
    </>
  );
};

export default page;
