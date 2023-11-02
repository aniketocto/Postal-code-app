import React from "react";

const FormFields = ({
  type,
  placeholder,
  name,
  handleChange,
  labelName,
  value,
}) => {
  return (
    <div>
      <div className=" flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900 w-auto"
        >
          {labelName}
        </label>
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          // required
          className="bg-gray-50 border
          border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-[#6469ff] focus:border-[#6469ff] outline-none 
           block w-full p-3"
        />
      </div>
    </div>
  );
};

export default FormFields;
