import { useContext } from "react";
import { useGetUserQuery } from "../redux/userApi/UserApi";
import { AuthContext } from "../Provider/AuthProvider";

const useCurrentUser = () => {
  const { data } = useGetUserQuery("");
  const { user } = useContext(AuthContext);

  const currentUser = data?.find((dt) => dt.email === user?.email);

  return currentUser;
};

export default useCurrentUser;
