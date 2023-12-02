import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdminStats = () => {
    // axios
    const [axiosSecure] = useAxiosSecure();
    const { data: adminstats = {} ,refetch } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })
    return [adminstats, refetch];
};

export default useAdminStats;