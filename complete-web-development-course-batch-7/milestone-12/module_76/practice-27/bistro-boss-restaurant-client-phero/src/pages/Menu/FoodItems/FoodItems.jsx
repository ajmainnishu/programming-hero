import useFetchData from "../../../hooks/useFetchData/useFetchData";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import FoodItem from "./FoodItem";
import dessertImg from '../../../assets/images/menu/foodItems/dessert-bg.jpg';
import pizzaImg from '../../../assets/images/menu/foodItems/pizza-bg.jpg';
import saladImg from '../../../assets/images/menu/foodItems/salad-bg.jpg';
import soupImg from '../../../assets/images/menu/foodItems/soup-bg.jpg';

const FoodItems = () => {
    // fetch data
    const [menu] = useFetchData();
    const salads = menu.filter(item => item.category === 'salad');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div className="mt-32">
            {/* section title */}
            <SectionTitle title={"TODAY'S OFFER"} subTitle={"Don't miss"}></SectionTitle>
            <div className="mt-12 space-y-12">
                <FoodItem items={offered}></FoodItem>
                <FoodItem items={desserts} img={dessertImg} title={'desserts'}></FoodItem>
                <FoodItem items={pizzas} img={pizzaImg} title={'pizza'}></FoodItem>
                <FoodItem items={salads} img={saladImg} title={'salads'}></FoodItem>
                <FoodItem items={soups} img={soupImg} title={'soups'}></FoodItem>
            </div>
        </div>
    );
};

export default FoodItems;