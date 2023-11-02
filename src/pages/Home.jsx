import React, { useState } from "react";
import FormFields from "../compnents/FormFields";
import Information from "../compnents/Information";
import Loader from "../compnents/Loader";

const Home = () => {
  const [postal, setPostal] = useState("");
  const [data, setdata] = useState("");
  const [generatingData, setGeneratingData] = useState(false);

  const handleChange = (e) => {
    setPostal(e.target.value);
  };

  const handleClear = () => {
    setPostal("");
    setdata("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `https://api.zippopotam.us/in/${postal}`;

    try {
      setGeneratingData(true);
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setdata(data);
      } else {
        alert("No such data");
      }
      setGeneratingData(false);
    } catch (error) {
      console.log(error, "error");
    }
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
        {data && (
          <button
            onClick={handleClear}
            className="mt-3 text-white bg-[#ff6464] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Clear
          </button>
        )}
      </div>
      <form className="mt-5 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormFields
            labelName="Postal Code"
            type="number"
            value={postal}
            btnName="Search"
            placeholder="Enter postal code here.."
            handleChange={handleChange}
          />
        </div>
      </form>

      <div className=" flex justify-center items-center mt-10">
        {generatingData && <Loader />}
      </div>
      <div className="w-full mb-3">
        {data ? <Information data={data} /> : <p></p>}
      </div>
    </section>
  );
};

export default Home;
