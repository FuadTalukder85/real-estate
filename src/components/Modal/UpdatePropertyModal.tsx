"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import {
  useGetSinglePropertyQuery,
  useUpdatePropertyMutation,
} from "../../redux/propertyApi/PropertyApi";
import toast from "react-hot-toast";
import { TPropertyTypes } from "../../types/types";
import FormField from "../ui/FormField";
import { useEffect } from "react";

interface UpdatePropertyModalProps {
  onClose: () => void;
  propertyId: string | null;
}

const UpdatePropertyModal: React.FC<UpdatePropertyModalProps> = ({
  onClose,
  propertyId,
}) => {
  const { data: property } = useGetSinglePropertyQuery(propertyId ?? "");
  const [updateProperty] = useUpdatePropertyMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TPropertyTypes>({ defaultValues: property });
  useEffect(() => {
    if (property) {
      reset(property);
    }
  }, [property, reset]);
  const onSubmit: SubmitHandler<TPropertyTypes> = async (formData) => {
    try {
      if (!propertyId) return;
      await updateProperty({ id: propertyId, body: formData }).unwrap();
      toast.success("Property updated successfully!", {
        position: "top-right",
      });
      onClose();
    } catch (error) {
      console.error("Failed to update Property:", error);
    }
  };

  return (
    <div className="absolute bg-black bg-opacity-5 inset-0 z-50">
      <div className="w-full md:w-[1200px] absolute bg-white md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 rounded-lg">
        <div className="flex justify-between items-center mb-4 p-5">
          <button className="text-lg font-bold text-seaBlue">
            Update your property
          </button>
          <button
            onClick={onClose}
            className="text-white bg-yellow hover:bg-seaBlue hover:text-white transition-all duration-700 rounded px-2 py-1"
          >
            <MdClose />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mt-5 text-seaBlue bg-white p-5 rounded-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
            <FormField
              label="Property Name"
              name="propertyName"
              placeholder="Name"
              register={register}
              error={errors.propertyName}
              defaultValue={property?.propertyName}
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
                placeholder="Property Image"
                register={register}
                error={errors[field as keyof TPropertyTypes]}
                defaultValue={
                  property?.[field as keyof TPropertyTypes] as string
                }
              />
            ))}
            <FormField
              label="Price"
              name="price"
              type="number"
              placeholder="000"
              register={register}
              error={errors.price}
              defaultValue={property?.price}
            />
            <FormField
              label="Property For"
              name="propertyFor"
              type="select"
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
              type="number"
              register={register}
              error={errors.bedroom}
              placeholder="Bedroom"
              defaultValue={property?.bedroom}
            />
            <FormField
              label="Bathroom"
              name="bathroom"
              type="number"
              register={register}
              error={errors.bathroom}
              placeholder="Bathroom"
              defaultValue={property?.bathroom}
            />
            <FormField
              label="Square Foot"
              name="squareFoot"
              type="number"
              register={register}
              error={errors.squareFoot}
              placeholder="Square Foot"
              defaultValue={property?.squareFoot}
            />
            <FormField
              label="Floor"
              name="floor"
              type="number"
              register={register}
              error={errors.floor}
              placeholder="Floor"
              defaultValue={property?.floor}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Build year"
              name="buildYear"
              type="number"
              register={register}
              error={errors.buildYear}
              placeholder="Build year"
              defaultValue={property?.buildYear}
            />
            <FormField
              label="Property Address"
              name="address"
              register={register}
              error={errors.address}
              placeholder="Enter address"
              defaultValue={property?.address}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              label="Zip-Code"
              name="zipCode"
              register={register}
              error={errors.zipCode}
              placeholder="Zip-Code"
              defaultValue={property?.zipCode}
            />
            <FormField
              label="City"
              name="city"
              type="select"
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
              register={register}
              error={errors.country}
              options={[
                { value: "Bangladesh", label: "Bangladesh" },
                { value: "USA", label: "USA" },
              ]}
              defaultValue={property?.country}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-seaBlue">
              Description
            </label>
            <textarea
              {...register("description")}
              placeholder="Description"
              className="w-full border border-gray-300 rounded-md shadow-sm mt-1 p-2 row-span-5"
              defaultValue={property?.description}
            ></textarea>
            {errors.description && (
              <span className="text-red-600">This field is </span>
            )}
          </div>

          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="submit"
              className="bg-seaBlue text-white py-2 px-4 rounded-md hover:bg-yellow transition-all duration-700"
            >
              Update Property
            </button>
            <button
              type="button"
              className="bg-yellow text-white py-2 px-4 rounded-md hover:bg-seaBlue transition-all duration-700"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePropertyModal;
