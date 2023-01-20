import './drivecard.css';


function DriverCard(props) {
    const { name, rating, img, car } = props;
    return (
        <div className="driver-card">
            <div>
                 <img src={img} alt={name} />
            </div>
            <div className="driver-info">
                <h2>{name}</h2>
                    <rating>{rating}</rating>
                    <p>Car: {car.model}</p>
                    <p>License Plate: {car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;