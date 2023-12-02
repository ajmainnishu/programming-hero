import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import usePaymentHistory from "../../../hooks/usePaymentHistory/usePaymentHistory";
import moment from "moment/moment";

const PaymentHistory = () => {
    const [payments] = usePaymentHistory();
    return (
        <div className='bg-[#f6f6f6] pt-12 pb-20'>
            {/* website title dynamic */}
            <Helmet>
                <title>Bistro Boss | Payment History</title>
            </Helmet>
            {/* top section title */}
            <SectionTitle title={'PAYMENT HISTORY'} subTitle={'At a Glance'}></SectionTitle>
            <div className="overflow-x-auto w-10/12 mx-auto mt-16 space-y-4 bg-white p-12">
                {/* info */}
                <p className='text-[#151515] text-3xl font-cinzel font-bold'>TOTAL PAYMENTS: {payments?.length}</p>
                {/* table */}
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#D1A054] rounded-t-2xl'>
                            <th className='rounded-tl-2xl py-7 text-white text-base font-semibold break-words'>EMAIL</th>
                            <th className='py-7 text-white text-base font-semibold break-words'>TOTAL PRICE</th>
                            <td className='py-7 text-white text-base font-semibold break-words rounded-tr-2xl'>PAYMENT DATE</td>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {
                            payments.map((item) => <tr key={item._id}>
                                <td className='text-[#444444] font-normal text-base break-words'>{item?.email}</td>
                                <td className='text-[#737373] font-normal text-base break-words'>{item?.price}</td>
                                <td className='text-[#737373] font-normal text-base break-words'>{moment(item?.date).format('dddd, MMMM Do, YYYY')}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;