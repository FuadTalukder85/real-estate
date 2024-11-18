"use client";
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }
  if (!user) {
    router.push("/Login");
  } else {
    return children;
  }
};

export default PrivateRoute;
