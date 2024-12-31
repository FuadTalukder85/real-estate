"use client";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "../redux/userApi/UserApi";
import { LoginInputs } from "../types/types";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const { data, isLoading } = useGetUserQuery("");

  // Find the current user based on email
  const currentUser = data?.find((dt: LoginInputs) => dt.email === user?.email);

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
    return (
      <div className="flex items-center mt-36 justify-center">
        <p>Loading...</p>
      </div>
    );
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
