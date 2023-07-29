import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosInterceptor/useAxiosSecure";

const useCart = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
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
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
