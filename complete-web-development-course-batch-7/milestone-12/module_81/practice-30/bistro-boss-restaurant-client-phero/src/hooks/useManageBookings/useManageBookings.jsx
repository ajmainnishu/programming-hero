import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useManageBookings = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookings');
            return res.data;
        }
    })
    return [bookings, refetch];
};

export default useManageBookings;