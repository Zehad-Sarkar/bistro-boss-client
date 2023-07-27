import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosSecure from "../useAxiosInterceptor/useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    // queryFn: async () => {
    //   if (!user?.email) {
    //     return [[], () => {}];
    //   }
    //   const res = await axiosSecure.get(
    //     `http://localhost:5000/carts?email=${user?.email}`
    //   );
    //   return res.json();
    // },
    queryFn: async () => {
      if (!user?.email) {
        return [[], () => {}];
      }
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      // console.log('res data',res);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
