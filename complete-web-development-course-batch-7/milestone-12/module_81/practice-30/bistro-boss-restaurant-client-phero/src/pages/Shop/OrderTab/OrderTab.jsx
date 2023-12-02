import useCart from "../../../hooks/useCart/useCart";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";

const OrderTab = ({ items }) => {
    // user state
    const { user } = useAuth();
    // email fetch state
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    // button
    const handleAddToCart = item => {
        const { _id, name, image, price, } = item;
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email };
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added On The Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // login redirect
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                items.map(item => <div key={item._id} className="card bg-[#F3F3F3] rounded-none">
                    {/* image */}
                    <figure><img src={item?.image} alt="food" className="w-full" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-[#151515] text-2xl font-semibold">{item?.name}</h2>
                        <p className="text-[#737373] text-base font-normal leading-6 text-justify">{item?.recipe}</p>
                        {/* button */}
                        <div className="card-actions mt-6 justify-center">
                            <button onClick={() => handleAddToCart(item)} className="btn bg-[#E8E8E8] text-[#BB8506] text-xl font-medium border-b-2 border-b-[#BB8506] px-7 hover:bg-[#111827] hover:border-b-[#BB8506]">Add to Cart</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default OrderTab;