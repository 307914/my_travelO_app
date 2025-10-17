import { Star, StarFill } from "react-bootstrap-icons";
import { Navbar } from "../components"
import { useDate } from "../context"
import './paymnt.css'
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export const Payment = () => {
    const { checkInDate, checkOutDate } = useDate();
    const { id } = useParams();
    const navigate = useNavigate();
    const [singleHotel, setSingleHotel] = useState({});

    useEffect(() => {
        (async () => {

            try {
                const { data } = await axios.get(`http://localhost:3500/api/singlehotel/${id}`);
                setSingleHotel(data);

            } catch (error) {
                console.log("error is in singlehotel", error);
            }
        })()

    }, [id])

    const { image, address, price, name, rating, state, _id } = singleHotel;

    const totalNights = (checkOutDate.getTime() - checkInDate.getTime()) / (24 * 3600 * 1000);
    const totalpayableAmount = price * totalNights;

    const loadScript = (source) => {
        return new Promise(resolve => {
            const script = document.createElement("script");
            script.src = source;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        })
    }

    const handleconfirmbookingclick = async () => {
        const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!response) {
            console.log("Razorpay SDK failed to load");
        }

        const options = {
            key: "rzp_test_VSdp7X3K39GwBK",
            amount: totalpayableAmount * 100,
            currrency: "INR",
            name: "TravelO",
            email: "sarkari@gmail.com",
            contact: "9876543210",
            description: "Thank you for booking with us",

            handler: ({ payment_id }) => {
                navigate(`/order-summary/${_id}`);
            },
            prefill: {
                name: "Prakash sarkari",
                email: "sarkari@gmail.com",
                contact: "9876543210",
            }
        }
        const paymentObject = new window.Razorpay(options);

        paymentObject.open();
    }
    return (
        <div className=" payment-main-container">
            <Navbar />
            <div className="payment-container d-flex align-center">
                <div className="total-container d-flex align-center">
                    <div className="trip-container ">
                        <h2 className="h2-heading">Trip Details</h2>
                        <div className="dates-guests para-con">
                            <h3 className="heading-trip">Your Trip</h3>

                            <div className="dates-container">
                                <span className="trip-heading">Dates</span>
                                <div className="pad-con">
                                    {
                                        checkInDate && checkOutDate ?
                                            `${checkInDate.toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'short',
                                            })} -
                                            ${checkOutDate.toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'short',
                                            })}` : ""
                                    }
                                </div>
                            </div>
                            <div className="d-flex pad-con direction-column">
                                <span className="trip-heading">Guests</span>
                                <span className="trip-cheading">4 Guests</span>
                            </div>
                        </div>
                        <div className="pay-container">
                            <h2 className="h2-heading">Pay with</h2>
                            <span>Razorpay</span>

                        </div>
                        <button className="booking-btn" onClick={handleconfirmbookingclick}>
                            Confirm Booking
                        </button>
                    </div>
                    <div className="price-container">
                        <div className="image-container d-flex para-con">
                            <img src={image} className="singlehotel-img" alt="sukoon bag" />
                            <div className="image-desc-container">
                                <div className="d-flex direction-column">
                                    <span>{name}</span>
                                    <span>{address},{state}</span>
                                </div>
                                <div className="d-flex aling-center">
                                    <span><StarFill /></span>
                                    <span>{rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="para-con booking-con">
                            <p className="booking">Your booking is protected by <strong className="travel-text">TravelO</strong> cover</p>
                        </div>

                        <div className="price-details-container">
                            <h3 className="h3-heading">Price Details</h3>
                            <div className="trip-heading price-span">
                                <span>Rs. {price} X {totalNights} nights</span>
                                <span>Rs. {totalpayableAmount}</span>
                            </div>

                            <div className="price-span para-con trip-heading last">
                                <span >Rs. 200</span>
                                <span>Rs. 200</span>
                            </div>
                            <div className="trip-heading price-span">
                                <span>Total</span>
                                <span>Rs. {totalpayableAmount + 200}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}