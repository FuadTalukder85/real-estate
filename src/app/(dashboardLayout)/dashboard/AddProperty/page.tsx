"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { usePostPropertyMutation } from "../../../../redux/propertyApi/PropertyApi";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useCurrentUser from "../../../../hooks/CurrentUser";
import { TPropertyTypes } from "../../../../types/types";
import FormField from "../../../../components/ui/FormField";
import toast, { Toaster } from "react-hot-toast";

const AddProperty: React.FC = () => {
  const [postProperty] = usePostPropertyMutation();
  const { user } = useContext(AuthContext);
  const currentUser = useCurrentUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TPropertyTypes>();

  const onSubmit: SubmitHandler<TPropertyTypes> = async (data) => {
    try {
      const postBy = currentUser.role;
      const email = user?.email;
      const postedData = { ...data, postBy, email };
      await postProperty(postedData);
      toast.success("Property added successfully", { position: "top-right" });
      reset();
    } catch (error) {
      console.error("Add property failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:mx-10 md:mt-10 text-seaBlue bg-white p-5 rounded-md"
    >
      <Toaster />
      <h5 className="font-semibold">Property Details</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
        <FormField
          label="Property Name"
          name="propertyName"
          required
          register={register}
          error={errors.propertyName}
          placeholder="Name"
        />

        {[
          "propertyImage01",
          "propertyImage02",
          "propertyImage03",
          "propertyImage04",
        ].map((field, idx) => (
          <FormField
            key={field}
            label={`Property Image 0${idx + 1}`}
            name={field}
            required
            register={register}
            error={errors[field as keyof TPropertyTypes]}
            placeholder="Property Image"
          />
        ))}

        <FormField
          label="Price"
          name="price"
          required
          type="number"
          register={register}
          error={errors.price}
          placeholder="000"
        />

        <FormField
          label="Property For"
          name="propertyFor"
          type="select"
          required
          register={register}
          error={errors.propertyFor}
          options={[
            { value: "Sale", label: "Sale" },
            { value: "Rent", label: "Rent" },
            { value: "Featured", label: "Featured" },
          ]}
        />

        <FormField
          label="Property Categories"
          name="propertyCategory"
          type="select"
          required
          register={register}
          error={errors.propertyCategory}
          options={[
            { value: "Apartment", label: "Apartment" },
            { value: "House", label: "House" },
            { value: "Office", label: "Office" },
          ]}
        />

        <FormField
          label="Bedroom"
          name="bedroom"
          required
          type="number"
          register={register}
          error={errors.bedroom}
          placeholder="Bedroom"
        />

        <FormField
          label="Bathroom"
          name="bathroom"
          required
          type="number"
          register={register}
          error={errors.bathroom}
          placeholder="Bathroom"
        />

        <FormField
          label="Square Foot"
          name="squareFoot"
          required
          type="number"
          register={register}
          error={errors.squareFoot}
          placeholder="Square Foot"
        />

        <FormField
          label="Floor"
          name="floor"
          required
          type="number"
          register={register}
          error={errors.floor}
          placeholder="Floor"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Build year"
          name="buildYear"
          required
          type="number"
          register={register}
          error={errors.buildYear}
          placeholder="Build year"
        />
        <FormField
          label="Property Address"
          name="address"
          required
          register={register}
          error={errors.address}
          placeholder="Enter address"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          label="Zip-Code"
          name="zipCode"
          required
          register={register}
          error={errors.zipCode}
          placeholder="Zip-Code"
        />

        <FormField
          label="City"
          name="city"
          type="select"
          required
          register={register}
          error={errors.city}
          options={[
            { value: "Faridpur", label: "Faridpur" },
            { value: "Mirpur", label: "Mirpur" },
            { value: "Gazipur", label: "Gazipur" },
            { value: "Narayanganj", label: "Narayanganj" },
            { value: "Dhaka", label: "Dhaka" },
          ]}
        />

        <FormField
          label="Country"
          name="country"
          type="select"
          required
          register={register}
          error={errors.country}
          options={[
            { value: "Bangladesh", label: "Bangladesh" },
            { value: "USA", label: "USA" },
          ]}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-seaBlue">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          className="w-full border border-gray-300 rounded-md shadow-sm mt-1 p-2 outline-none row-span-5"
        ></textarea>
        {errors.description && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>

      <div className="flex justify-end space-x-4 mt-4">
        <button
          type="submit"
          className="bg-seaBlue text-white py-3 px-4 rounded-md hover:bg-yellow transition-all duration-700"
        >
          Create Product
        </button>
        <button
          type="button"
          className="bg-yellow text-white py-2 px-4 rounded-md hover:bg-seaBlue transition-all duration-700"
          onClick={() => console.log("Canceled")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddProperty;
