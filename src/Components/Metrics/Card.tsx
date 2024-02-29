import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

// const seifIcon= <FontAwesomeIcon icon={faHeartPulse} />

// type iconpropsType = {seifIcon};

type PropsPerson={
    Activity:string;
    RecentNbHours:number;
    OldNbHours:number;
    bgcolor: string;
    // icon:iconpropsType;
}



export default function Person({Activity, RecentNbHours, OldNbHours, bgcolor}:PropsPerson ){

    return(
        <div className="container" style={{backgroundColor: bgcolor}}  >
            <div className="box">

                <div className="topPart">

                <h6>{Activity}</h6>
                <p>...</p>

                </div>
                <div className="bottomPart">
                <h1>{RecentNbHours}hrs</h1>
                <p>Last week - {OldNbHours}hrs</p>
                </div>
            </div>


        </div>
    )


}