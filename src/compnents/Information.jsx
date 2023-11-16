import React from "react";

const Information = (props) => {
  const { data } = props;
  return (
    <>
      <div className=" flex justify-center gap-10 flex-row items-center w-full h-auto border border-gray-900 rounded-md shadow-lg">
        <div className=" flex justify-center items-center flex-col">
          <h1 className=" text-gray-800 text-xl">{data.country}</h1>
          <p>Post code: {data["post code"]}</p>
        </div>
        <div>
          <div className=" text-5xl">{data["country abbreviation"]}</div>
        </div>
      </div>

      <div className=" flex justify-center items-center flex-col">
        {data.places.map((place, index) => (
          <div
            className=" flex flex-wrap flex-col items-start p-3 w-[350px] h-auto border mt-2  bg-[#F8CBA6] border-gray-900 rounded-md shadow-lg"
            key={index}
          >
            <div className="p-2 flex gap-10">
              <div>
                <div>
                  <div className="text-lg  border rounded-md border-gray-500 text-black ">
                    <h3 className=" text-center text-lg">
                      {place["place name"]}
                    </h3>
                  </div>
                  <h3 className="text-neutral-900">State: {place.state}</h3>
                </div>
                <div className=" flex flex-row justify-evenly gap-3 items-center">
                  <p className="text-gray-700 text-sm">
                    Longitude: {place.longitude}°
                  </p>
                  <p className="text-gray-700 text-sm">
                    Latitude: {place.latitude}°
                  </p>
                </div>
              </div>
              <div className=" text-5xl">{place["state abbreviation"]}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Information;
