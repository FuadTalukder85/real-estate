"use client";
import React, { useState } from "react";

const AddProperty: React.FC = () => {
  const [formData, setFormData] = useState({
    propertyImage: "",
    propertyName: "",
    price: "",
    propertyFor: "Other",
    propertyCategory: "Apartment",
    bedroom: "",
    bathroom: "",
    squareFoot: "",
    floor: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mx-10 mt-10 text-[#2A4766] bg-white p-5 rounded-md"
    >
      <h5 className="font-semibold">Property Details</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Name
          </label>
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleInputChange}
            placeholder="Name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Image
          </label>
          <input
            type="text"
            name="propertyImage"
            value={formData.propertyImage}
            onChange={handleInputChange}
            placeholder="Property Image"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              $
            </span>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="000"
              className="block w-full pl-7 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property For
          </label>
          <select
            name="propertyFor"
            value={formData.propertyFor}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Categories
          </label>
          <select
            name="propertyCategory"
            value={formData.propertyCategory}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Office">Office</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bedroom
          </label>
          <input
            type="number"
            name="bedroom"
            value={formData.bedroom}
            onChange={handleInputChange}
            placeholder="Bedroom"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bathroom
          </label>
          <input
            type="number"
            name="bathroom"
            value={formData.bathroom}
            onChange={handleInputChange}
            placeholder="Bathroom"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Square Foot
          </label>
          <input
            type="number"
            name="squareFoot"
            value={formData.squareFoot}
            onChange={handleInputChange}
            placeholder="Square Foot"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Floor
          </label>
          <input
            type="number"
            name="floor"
            value={formData.floor}
            onChange={handleInputChange}
            placeholder="Floor"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Property Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Enter address"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Zip-Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            placeholder="zip-code"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Choose a city</option>
            <option value="City1">City1</option>
            <option value="City2">City2</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Choose a country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
          </select>
        </div>
      </div>

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
