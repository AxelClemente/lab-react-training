import './idcard.css';

function IdCard(props) {
    const {IdCardInfo} = props
  return (
    <div>
        
        <div className="card">
        
            <div>
                <img src={props.picture}/>
            </div>
            <div className="user">
                <p> <b> lastName </b>: {props.lastName}</p>
                <p> <b>first Name :</b> {props.firstName} </p> 
                <p><b> Gender :</b> {props.gender}</p>
                <p> <b>Height :</b>{props.height}</p>
                <p><b> Brith : </b>{props.birth.toDateString()}</p>

            </div>

        </div>
    </div>

  );
}

export default IdCard;