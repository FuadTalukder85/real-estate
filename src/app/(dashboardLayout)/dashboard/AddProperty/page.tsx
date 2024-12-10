"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePostPropertyMutation } from "../../../../redux/propertyApi/PropertyApi";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useCurrentUser from "../../../../hooks/CurrentUser";
import { PropertyTypes } from "../../../../types/types";

const AddProperty: React.FC = () => {
  const [postProperty] = usePostPropertyMutation();
  const { user } = useContext(AuthContext);
  const currentUser = useCurrentUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PropertyTypes>();
  const onSubmit: SubmitHandler<PropertyTypes> = async (data) => {
    try {
      const postBy = currentUser.role;
      const email = user?.email;
      const postedData = { ...data, postBy, email };
      await postProperty(postedData);
      reset();
    } catch (error) {
      console.error("Add property failed:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mx-10 mt-10 text-[#2A4766] bg-white p-5 rounded-md"
    >
      <h5 className="font-semibold">Property Details</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Name*
          </label>
          <input
            {...register("propertyName", { required: true })}
            type="text"
            placeholder="Name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.propertyName && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Image 01*
          </label>
          <input
            {...register("propertyImage01", { required: true })}
            type="text"
            placeholder="Property Image"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.propertyImage01 && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Image 02*
          </label>
          <input
            {...register("propertyImage02", { required: true })}
            type="text"
            placeholder="Property Image"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.propertyImage02 && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Image 03*
          </label>
          <input
            {...register("propertyImage03", { required: true })}
            type="text"
            placeholder="Property Image"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.propertyImage03 && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Image 04*
          </label>
          <input
            {...register("propertyImage04", { required: true })}
            type="text"
            placeholder="Property Image"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.propertyImage04 && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price*
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              $
            </span>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="000"
              className="block w-full pl-7 p-2 border border-gray-300 rounded-md"
            />
          </div>
          {errors.price && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property For*
          </label>
          <select
            {...register("propertyFor", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Sale / Rent</option>
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
            <option value="Featured">Featured</option>
          </select>
          {errors.propertyFor && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Categories*
          </label>
          <select
            {...register("propertyCategory", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select property</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Office">Office</option>
          </select>
          {errors.propertyCategory && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bedroom*
          </label>
          <input
            {...register("bedroom", { required: true })}
            type="number"
            placeholder="Bedroom"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.bedroom && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bathroom*
          </label>
          <input
            {...register("bathroom", { required: true })}
            type="number"
            placeholder="Bathroom"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.bathroom && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Square Foot*
          </label>
          <input
            {...register("squareFoot", { required: true })}
            type="number"
            placeholder="Square Foot"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.squareFoot && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Floor*
          </label>
          <input
            {...register("floor", { required: true })}
            type="number"
            placeholder="Floor"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.floor && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Build year*
          </label>
          <input
            {...register("buildYear", { required: true })}
            type="number"
            placeholder="Build year"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.floor && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Address*
          </label>
          <input
            {...register("address", { required: true })}
            type="text"
            placeholder="Enter address"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.address && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Zip-Code*
          </label>
          <input
            {...register("zipCode", { required: true })}
            type="text"
            placeholder="zip-code"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.zipCode && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            City*
          </label>
          <select
            {...register("city", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Choose a city</option>
            <option value="Faridpur">Faridpur</option>
            <option value="Mirpur">Mirpur</option>
            <option value="Gazipur">Gazipur</option>
            <option value="Narayanganj">Narayanganj</option>
            <option value="Dhaka">Dhaka</option>
          </select>
          {errors.city && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country*
          </label>
          <select
            {...register("country", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Choose a country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
          </select>
          {errors.country && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
      </div>
      <textarea
        {...register("description", { required: true })}
        placeholder="Description"
        className="w-full border border-gray-300 rounded-md shadow-sm mt-1 p-2 row-span-5"
      ></textarea>
      {errors.description && (
        <span className="text-red-600">This field is required</span>
      )}

      <div className="flex justify-end space-x-4 mt-4">
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Create Product
        </button>
        <button
          type="button"
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          onClick={() => console.log("Canceled")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddProperty;
