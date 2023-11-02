import React, { useState } from "react";
import FormFields from "../compnents/FormFields";
import Information from "../compnents/Information";

const Home = () => {
  const [postal, setPostal] = useState(null);
  const [data, setdata] = useState("");

  const handleChange = (e) => {
    setPostal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `https://api.zippopotam.us/in/${postal}`;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setdata(data);
      } else {
        alert("No such data");
      }
    } catch (error) {
      console.log(error, "error");
    }
    setPostal("");
  };

  return (
    <section>
      <div className=" flex justify-center flex-col items-center">
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Postal Information
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px] text-center">
          Get information about your postal address with an ease
        </p>
      </div>

      <form className="mt-5 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormFields
            labelName="Postal Code"
            type="number"
            name="name"
            placeholder="Enter postal code here.."
            handleChange={handleChange}
          />
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Search
          </button>
        </div>
      </form>
      <div className=" mt-5 w-full">
        {data ? <Information data={data} /> : <p></p>}
      </div>
    </section>
  );
};

export default Home;
