import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useUserBookings = () => {
    // user state
    const { user, loading } = useAuth();
    // axios
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: userbookings = [] } = useQuery({
        queryKey: ['userbookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/userbookings?email=${user.email}`)
            return res.data;
        }
    })
    return [userbookings, refetch];
};

export default useUserBookings;