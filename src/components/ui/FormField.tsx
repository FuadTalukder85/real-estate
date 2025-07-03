import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  name: string;
  required?: boolean;
  type?: "text" | "number" | "select";
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  options?: Option[];
  defaultValue?: any;
};

const FormField: React.FC<Props> = ({
  label,
  name,
  required = false,
  type = "text",
  placeholder = "",
  register,
  error,
  options = [],
  defaultValue,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-seaBlue">
        {label}
        <span className="text-red-500">{required && "*"}</span>
      </label>

      {type === "select" ? (
        <select
          {...register(name, { required })}
          className="mt-1 block w-full p-2 outline-none border border-gray-300 rounded-md shadow-sm"
          defaultValue={defaultValue}
        >
          <option value={defaultValue}>Select {label.toLowerCase()}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...register(name, { required })}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="mt-1 block w-full p-2 outline-none border border-gray-300 rounded-md shadow-sm"
        />
      )}

      {error && <span className="text-red-600">This field is required</span>}
    </div>
  );
};

export default FormField;
