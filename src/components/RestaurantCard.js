import {CDN_URL} from "../utils/constants";

const RestaurantCard=(props) => {
    const{resData}=props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.info;


    return (
        <div data-testid = "resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className=" rounded-lg" alt="res-logo"
                src={
                     CDN_URL + cloudinaryImageId
                    }
            />
            <h4 className="font-bold py-3 text-lg">{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString} </h4>
        </div>
    );
};

export const withPromotedLabel = (RestauranrCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-slate-900 text-white m-2 p-2 rounded-lg ">
                    Open
                </label>
                <RestauranrCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;