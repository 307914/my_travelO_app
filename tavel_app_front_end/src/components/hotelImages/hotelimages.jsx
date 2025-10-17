import './hotelimages.css'


export const HotelImages = ({ singleHotel }) => {

    const { image: newImage, imageArr } = singleHotel;
    return (
        <div className='hotel-image-container d-flex gap-small '>
            <div className='primary-image-container'>
                <img src={newImage} alt="primary-img" className='primary-img'></img>
            </div>
            <div className='image-container d-flex wrap gap-small'>
                {
                    imageArr && imageArr.map((image) => (
                        <img src={image} key={image} className='hotel-img' alt="hotel-img" />
                    ))
                }
            </div>
        </div>
    )
}