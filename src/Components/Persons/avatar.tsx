import './avatar.css'
import visage from '../Assets/visage.jpg'

export default function Avatar(){

    return(
        <div className="globalContainer">

            <div className='top'>

            <img src={visage} alt="avatar" />
             <p>Report for</p>
             <h1>khalil</h1>   {/* <h1>{namePerson}</h1> */}

            </div>
        

        <div className="interval">

            <p>Daily</p>
            <p>Weekly</p>
            <p>Monthly</p>
            

            
          
        </div>


    </div>
    )
    
}