"use client";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "../redux/userApi/UserApi";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const { data, isLoading } = useGetUserQuery("");

  // Find the current user based on email
  const currentUser = data?.find((dt) => dt.email === user?.email);
  console.log("nai", currentUser);

  useEffect(() => {
    if (!loading && !isLoading) {
      // Redirect to /Login if user is not found or has no valid role
      if (
        !currentUser ||
        (currentUser.role !== "Admin" && currentUser.role !== "Agent")
      ) {
        router.push("/Login");
      }
    }
  }, [loading, isLoading, currentUser, router]);

  if (loading || isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  // Render children if the user has a valid role
  if (
    currentUser &&
    (currentUser.role === "Admin" || currentUser.role === "Agent")
  ) {
    return children;
  }

  // Fallback (shouldn't reach here due to redirection)
  return null;
};

export default PrivateRoute;
