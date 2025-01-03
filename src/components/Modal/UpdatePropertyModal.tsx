"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import {
  useGetSinglePropertyQuery,
  useUpdatePropertyMutation,
} from "../../redux/propertyApi/PropertyApi";
import toast from "react-hot-toast";
import { TPropertyTypes } from "../../types/types";

type UpdatePropertyModalProps = {
  onClose: () => void;
  propertyId: string | null;
};
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
  } = useForm<TPropertyTypes>();
  const onSubmit: SubmitHandler<TPropertyTypes> = async (formData) => {
    try {
      if (!propertyId) {
        console.log("Property ID is missing, cannot update Property");
        return;
      }
      const result = await updateProperty({
        id: propertyId || "",
        body: formData,
      }).unwrap();
      console.log("Property updated successfully:", result);
      toast.success("Property updated successfully!", {
        position: "top-right",
      });
      onClose();
    } catch (error) {
      console.error("Failed to update Property:", error);
    }
    console.log("formData", formData);
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
        {/* update property form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mt-5 text-seaBlue bg-white p-5 rounded-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Property Name*
              </label>
              <input
                {...register("propertyName", { required: true })}
                type="text"
                placeholder="Name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                defaultValue={property?.propertyName}
              />
              {errors.propertyName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Property Image 01*
              </label>
              <input
                {...register("propertyImage01", { required: true })}
                type="text"
                placeholder="Property Image"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                defaultValue={property?.propertyImage01}
              />
              {errors.propertyImage01 && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Property Image 02*
              </label>
              <input
                {...register("propertyImage02", { required: true })}
                type="text"
                placeholder="Property Image"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                defaultValue={property?.propertyImage02}
              />
              {errors.propertyImage02 && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Property Image 03*
              </label>
              <input
                {...register("propertyImage03", { required: true })}
                type="text"
                placeholder="Property Image"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                defaultValue={property?.propertyImage03}
              />
              {errors.propertyImage03 && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Property Image 04*
              </label>
              <input
                {...register("propertyImage04", { required: true })}
                type="text"
                placeholder="Property Image"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                defaultValue={property?.propertyImage04}
              />
              {errors.propertyImage04 && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-seaBlue">
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
                  defaultValue={property?.price}
                />
              </div>
              {errors.price && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Property For*
              </label>
              <select
                {...register("propertyFor", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value={property?.propertyFor}>
                  {property?.propertyFor}
                </option>
                <option value="Sale">Sale</option>
                <option value="Rent">Rent</option>
                <option value="Featured">Featured</option>
              </select>
              {errors.propertyFor && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Property Categories*
              </label>
              <select
                {...register("propertyCategory", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value={property?.propertyCategory}>
                  {property?.propertyCategory}
                </option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Office">Office</option>
              </select>
              {errors.propertyCategory && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Bedroom*
              </label>
              <input
                {...register("bedroom", { required: true })}
                type="number"
                placeholder="Bedroom"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                defaultValue={property?.bedroom}
              />
              {errors.bedroom && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Bathroom*
              </label>
              <input
                {...register("bathroom", { required: true })}
                type="number"
                placeholder="Bathroom"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                defaultValue={property?.bathroom}
              />
              {errors.bathroom && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Square Foot*
              </label>
              <input
                {...register("squareFoot", { required: true })}
                type="number"
                placeholder="Square Foot"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                defaultValue={property?.squareFoot}
              />
              {errors.squareFoot && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Floor*
              </label>
              <input
                {...register("floor", { required: true })}
                type="number"
                placeholder="Floor"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                defaultValue={property?.floor}
              />
              {errors.floor && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Build year*
              </label>
              <input
                {...register("buildYear", { required: true })}
                type="number"
                placeholder="Build year"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                defaultValue={property?.buildYear}
              />
              {errors.floor && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Property Address*
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Enter address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                defaultValue={property?.address}
              />
              {errors.address && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-seaBlue">
                Zip-Code*
              </label>
              <input
                {...register("zipCode", { required: true })}
                type="text"
                placeholder="zip-code"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                defaultValue={property?.zipCode}
              />
              {errors.zipCode && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-seaBlue">
                City*
              </label>
              <select
                {...register("city", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value={property?.city}>{property?.city}</option>
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
              <label className="block text-sm font-medium text-seaBlue">
                Country*
              </label>
              <select
                {...register("country", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value={property?.country}>{property?.country}</option>
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
            defaultValue={property?.description}
          ></textarea>
          {errors.description && (
            <span className="text-red-600">This field is required</span>
          )}

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
              onClick={() => onClose()}
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
