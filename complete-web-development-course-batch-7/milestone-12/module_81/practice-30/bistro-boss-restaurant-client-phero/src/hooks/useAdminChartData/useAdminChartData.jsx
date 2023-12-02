import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdminChartData = () => {
   // axios
   const [axiosSecure] = useAxiosSecure();
   const { data: adminChartData = [] ,refetch } = useQuery({
       queryKey: ['chart-data'],
       queryFn: async () => {
           const res = await axiosSecure.get('/admin-order-stats')
           return res.data;
       }
   })
   return [adminChartData, refetch];
};

export default useAdminChartData;