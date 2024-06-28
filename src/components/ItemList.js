import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";


const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = () =>{
        //dispatch an action
        dispatch(addItem("pizza"));
        console.log(addItem);
    };

    return (
        <div>
            {
                items.map((item) => (

                    <div key={item?.card?.info?.id} 
                        className="p-2 m-2 border-gray-200 text-left border-b-2 flex justify-between" 
                    >
                        <div className="w-9/12">

                            <div className="py-2"> 

                                <span className="text-sm font-bold">{item?.card?.info?.name}</span>
                                <span className="text-sm font-bold">
                                    - ₹
                                    {item?.card?.info?.price
                                    ? item?.card?.info?.price / 100
                                    : item?.card?.info?.defaultPrice / 100}
                                </span>

                            </div>

                                <p className="text-sm">{item?.card?.info?.description}</p>
                        </div>    
                        
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button
                                    className="p-2 mx-16 rounded-lg bg-white shadow-lg "   
                                    onClick = {handleAddItem}
                                >
                                    Add +
                                </button>
                                </div>
                                <img
                                    src={CDN_URL + item?.card?.info?.imageId}
                                    alt={item?.card?.info?.name}
                                    className="w-full rounded-md"
                                />
                        </div>

                    </div>
                ))
            }

        </div>
    );
};

export default ItemList;