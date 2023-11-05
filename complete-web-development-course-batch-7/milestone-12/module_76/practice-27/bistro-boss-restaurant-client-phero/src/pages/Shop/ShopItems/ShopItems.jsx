import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useFetchData from "../../../hooks/useFetchData/useFetchData";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";

const ShopItems = () => {
    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks'];
    const { category } = useParams();
    // find index
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    // fetch data
    const [menu] = useFetchData();
    const salads = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup');
    return (
        <div className="mt-20 md:mt-32 mb-24 w-10/12 lg:w-9/12 mx-auto">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'text-center mb-12 flex flex-wrap justify-center gap-10 lg:gap-14'}>
                    <Tab className={'text-[#151515] text-2xl font-medium hover:underline cursor-pointer hover:text-[#BB8506] hover:font-bold'}>SALAD</Tab>
                    <Tab className={'text-[#151515] text-2xl font-medium hover:underline cursor-pointer hover:text-[#BB8506] hover:font-bold'}>PIZZA</Tab>
                    <Tab className={'text-[#151515] text-2xl font-medium hover:underline cursor-pointer hover:text-[#BB8506] hover:font-bold'}>SOUPS</Tab>
                    <Tab className={'text-[#151515] text-2xl font-medium hover:underline cursor-pointer hover:text-[#BB8506] hover:font-bold'}>DESSERTS</Tab>
                    <Tab className={'text-[#151515] text-2xl font-medium hover:underline cursor-pointer hover:text-[#BB8506] hover:font-bold'}>DRINKS</Tab>
                </TabList>
                {/* items 1 */}
                <TabPanel>
                    <OrderTab items={salads}></OrderTab>
                </TabPanel>
                {/* items 2 */}
                <TabPanel>
                    <OrderTab items={pizzas}></OrderTab>
                </TabPanel>
                {/* items 3 */}
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                {/* items 4 */}
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                {/* items 5 */}
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopItems;