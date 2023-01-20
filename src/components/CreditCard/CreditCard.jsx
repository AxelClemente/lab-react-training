import './creditcard.css';


function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    let last4Digits = number.slice(-4);
    return(
        <div style={{backgroundColor: bgColor, color: color}} className='credit-card'>
            <div className='card-type'>{type}</div>
            <div className='card-number'> **** **** **** {last4Digits}</div>
            <div className='expirationAnd__cardBank'>
                <div className='expiration-date'>Expired {expirationMonth}/{expirationYear}</div>
                <div className='card-bank'>{bank}</div>
            </div>
            
            <div className='card-owner'>{owner}</div>
        </div>
    )
}

export default CreditCard;