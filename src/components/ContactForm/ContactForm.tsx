"use client";
import React from "react";
import Container from "../Container/Container";
import { CiHome } from "react-icons/ci";
import { PiEnvelopeOpenThin, PiPhoneCallThin } from "react-icons/pi";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePostContactMutation } from "../../redux/contactApi/ContactApi";
import toast, { Toaster } from "react-hot-toast";
import { LoginInputs } from "../../types/types";

const ContactForm = () => {
  const [postContact] = usePostContactMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      await postContact(data);
      toast.success("Message send successfully!", { position: "top-right" });
      reset();
    } catch (error) {
      console.error("Message send failed", error);
    }
  };
  return (
    <div className="bg-[#F7F7F7] md:mt-28 md:py-16">
      <Toaster />
      <Container>
        <div className="md:grid grid-cols-12 gap-10 text-seaBlue">
          <div className="col-span-8 bg-white back p-3 md:p-10 rounded-lg">
            <h5 className="text-xl font-semibold pb-2 border-b border-gray-300">
              Fillup The Form
            </h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-10">
                <div className="md:flex gap-5">
                  <div className="text-seaBlue w-full">
                    <p>Name</p>
                    <input
                      {...register("name", { required: true })}
                      className="mt-2 py-2 ps-3 w-full border border-gray-300 outline-none rounded-md"
                      placeholder="Type your name"
                    />
                    {errors.name && (
                      <p className="text-red-400">This field is required</p>
                    )}
                  </div>
                  <div className="text-seaBlue w-full mt-5 md:mt-0">
                    <p>Email</p>
                    <input
                      {...register("email", { required: true })}
                      className="mt-2 py-2 ps-3 w-full border border-gray-300 outline-none rounded-md"
                      placeholder="Type your email"
                    />
                    {errors.email && (
                      <p className="text-red-400">This field is required</p>
                    )}
                  </div>
                </div>
                <div className="text-seaBlue mt-5">
                  <p>Subject</p>
                  <input
                    {...register("subject", { required: true })}
                    className="mt-2 py-2 ps-3 w-full border border-gray-300 outline-none rounded-md"
                    placeholder="Type here subject"
                  />
                  {errors.subject && (
                    <p className="text-red-400">This field is required</p>
                  )}
                </div>
                <div className="text-seaBlue mt-5">
                  <p>Message</p>
                  <textarea
                    {...register("message", { required: true })}
                    className="mt-2 py-2 ps-3 w-full border border-gray-300 outline-none rounded-md"
                    placeholder="Type your message"
                  />
                  {errors.message && (
                    <p className="text-red-400">This field is required</p>
                  )}
                </div>
              </div>
              {/* submit button  */}
              <button
                type="submit"
                className="mt-10 bg-yellow text-white font-semibold py-2 px-6 rounded-md hover:bg-seaBlue transition-all duration-500"
              >
                Submit Request
              </button>
            </form>
          </div>
          <div className="col-span-4 bg-white p-3 md:p-10 mt-10 md:mt-0 rounded-lg">
            <h5 className="text-xl font-semibold pb-2 border-b border-gray-300">
              Reach out
            </h5>
            <p className="mt-3 md:mt-10 font-semibold text-seaBlue text-2xl">
              Get In Touch
            </p>
            <p className="md:mt-5 text-seaBlue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="grid grid-cols-12 items-center gap-5 mt-5">
              <CiHome className="col-span-3 text-yellow w-16 text-8xl" />
              <div className="col-span-9 text-seaBlue">
                <h5 className="font-semibold">Reach Us</h5>
                <p className="font-semibold text-sm">
                  1235, New Market, Eliza Road, Sincher 80 CA, Canada, USA
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-5">
              <PiEnvelopeOpenThin className="col-span-3 text-yellow w-16 text-8xl" />
              <div className="col-span-9 text-seaBlue">
                <h5 className="font-semibold">Email Us</h5>
                <p className="font-semibold text-sm">webfuadtk@gmail.com</p>
              </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-5">
              <PiPhoneCallThin className="col-span-3 text-yellow w-16 text-8xl" />
              <div className="col-span-9 text-seaBlue">
                <h5 className="font-semibold">Call Us</h5>
                <p className="font-semibold text-sm">+8801756867585</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
