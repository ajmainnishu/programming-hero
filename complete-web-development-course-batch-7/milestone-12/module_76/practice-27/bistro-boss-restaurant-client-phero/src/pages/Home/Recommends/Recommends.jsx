import useFetchData from "../../../hooks/useFetchData/useFetchData";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import OrderTab from "../../Shop/OrderTab/OrderTab";

const Recommends = () => {
    // fetch data
    const [menu] = useFetchData();
    const popular = menu.filter(item => item.category === 'popular');
    const chef = popular.slice(0, 3);
    return (
        <div className="space-y-12">
            <SectionTitle title={'CHEF RECOMMENDS'} subTitle={'Should Try'}></SectionTitle>
            <OrderTab items={chef}></OrderTab>
        </div>
    );
};

export default Recommends;