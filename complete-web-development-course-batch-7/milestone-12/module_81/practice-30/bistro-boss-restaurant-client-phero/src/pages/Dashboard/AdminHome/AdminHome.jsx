import { FaStore, FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import useAdminStats from "../../../hooks/useAdminStats/useAdminStats";
import useAdminChartData from "../../../hooks/useAdminChartData/useAdminChartData";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
    // admin stats state
    const [adminstats] = useAdminStats();
    // admin order state
    const [adminChartData] = useAdminChartData();
    // recharts colors
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    // bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    // pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="bg-[#f6f6f6] pt-12 pb-20 lg:pb-72">
            {/* website title dynamic */}
            <Helmet>
                <title>Bistro Boss | Admin Home</title>
            </Helmet>
            <div className="w-11/12 mx-auto">
                {/* heading */}
                <h2 className="text-[#151515] font-cinzel font-semibold text-[32px] break-words mb-6">HI, WELCOME BACK!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* revenue */}
                    <div className="stats rounded-lg shadow text-white">
                        <div className="flex items-center gap-x-6 justify-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] py-8">
                            <div>
                                <FaWallet className="w-[50px] h-[50px]" />
                            </div>
                            <div>
                                <p className="text-[40px] font-extrabold">{adminstats?.revenue}</p>
                                <p className="text-2xl font-normal">Revenue</p>
                            </div>
                        </div>
                    </div>
                    {/* customers */}
                    <div className="stats rounded-lg shadow text-white">
                        <div className="flex items-center gap-x-6 justify-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] py-8">
                            <div>
                                <FaUsers className="w-[50px] h-[50px]" />
                            </div>
                            <div>
                                <p className="text-[40px] font-extrabold">{adminstats?.customers}</p>
                                <p className="text-2xl font-normal">Customers</p>
                            </div>
                        </div>
                    </div>
                    {/* products */}
                    <div className="stats rounded-lg shadow text-white">
                        <div className="flex items-center gap-x-6 justify-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] py-8">
                            <div>
                                <FaStore className="w-[50px] h-[50px]" />
                            </div>
                            <div>
                                <p className="text-[40px] font-extrabold">{adminstats?.products}</p>
                                <p className="text-2xl font-normal">Products</p>
                            </div>
                        </div>
                    </div>
                    {/* orders */}
                    <div className="stats rounded-lg shadow text-white">
                        <div className="flex items-center gap-x-6 justify-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] py-8">
                            <div>
                                <FaTruck className="w-[50px] h-[50px]" />
                            </div>
                            <div>
                                <p className="text-[40px] font-extrabold">{adminstats?.orders}</p>
                                <p className="text-2xl font-normal">Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* recharts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-white py-10 rounded">
                    {/* bar chart */}
                    <div className="hidden md:block mx-auto">
                        <BarChart
                            width={500}
                            height={300}
                            data={adminChartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {adminChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>
                    {/* pie chart */}
                    <div>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Legend></Legend>
                                <Pie
                                    data={adminChartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="count"
                                >
                                    {adminChartData.map((entry, index) => (
                                        <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;