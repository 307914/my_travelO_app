
import { Dot } from 'react-bootstrap-icons';
import './hoteldetails.css'

export const HotelDetails = ({ singleHotel }) => {

    const {
        hostName,
        hostJoinedOn,
        numberOfBathrooms,
        numberOfBeds,
        numberOfguest,
        numberOfBedrooms,
        ameneties
    } = singleHotel;
    return (
        <div className="hotel-details-container">
            <div className="host-details">
                <p className="host-name p">
                    <Dot size={25} /> Hosted by {hostName}, Joined on {hostJoinedOn}
                </p>
                <div className="span hotel-room-details">
                    {numberOfguest} guests. {numberOfBedrooms} bedrooms. {numberOfBeds}{" "}
                    beds. {numberOfBathrooms} bathrooms.
                </div>
            </div>

            <div className="key-features host-details">
                <div className="gutter-bottom-small">
                    <p className="p d-flex align-center gap">
                        <Dot size={25} />Dedicated
                        Workspace
                    </p>
                    <span className="span">
                        A common area with wifi that is well suited for working
                    </span>
                </div>
                <div className="gutter-bottom-small">
                    <p className="p d-flex align-center gap">
                        <Dot size={25} />Great Location
                    </p>
                    <span className="span">
                        80% of recent guests gave the location a 5-star rating
                    </span>
                </div>
                <p className="p d-flex align-center gap">
                    <Dot size={25} />Free
                    cancellation before 7 days of booking
                </p>
            </div>
            <div className='offer-container'>
                <p className='p'>What this place offers</p>
                {
                    ameneties && ameneties.map((item) => (
                        <div key={item} className='d-flex align-center quality-container'>
                            <Dot size={25} /> <span className='items'>{item}</span>
                        </div>
                    ))
                }
            </div>


        </div>
    )

}