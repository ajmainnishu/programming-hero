import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useAuth from "../useAuth/useAuth";

const usePaymentHistory = () => {
    // user state
    const { user, loading } = useAuth();
    // axios
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data;
        }
    })
    return [payments, refetch];
};

export default usePaymentHistory;