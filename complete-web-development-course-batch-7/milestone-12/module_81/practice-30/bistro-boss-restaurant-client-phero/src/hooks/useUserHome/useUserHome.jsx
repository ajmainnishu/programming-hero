import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useUserHome = () => {
    // user state
    const { user, loading } = useAuth();
    // axios
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: userhome = {} } = useQuery({
        queryKey: ['userhome', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/userhome?email=${user?.email}`)
            return res.data;
        }
    })
    return [userhome, refetch];
};

export default useUserHome;