import { Hotel, Navbar } from "../../components";
import { useUserdata } from "../../context"
import './wishlist.css';
export const Wishlist = () => {
    const { userdata } = useUserdata();
    console.log({ userdata });

    return (
        <div className="relative">
            <Navbar />
            <div className="wishlist-container">Wishlist</div>
            <main className=" shadow wishlist-selected-container">
                {userdata?.wishlist?.map((hotel) =>
                    <Hotel key={hotel._id} hotel={hotel} />
                )}
            </main>
        </div>
    )
}