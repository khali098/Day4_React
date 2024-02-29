import React from 'react';

import './App.css';
import Person from './Components/Metrics/Card';
import Avatar from './Components/Persons/avatar';


function App() {
  
  const props=[
    {
      Activity:"Work",
      RecentNbHours:32,
      OldNbHours:36,
      bgcolor: "#fd8b64",
      // iconimage:{seifIcon},


    },
    {
      Activity:"Play",
      RecentNbHours:10,
      OldNbHours:8,
      bgcolor: "#54c2e6",

    },
    {
      Activity:"Study",
      RecentNbHours:4,
      OldNbHours:7,
      bgcolor: "#ff5e7d",

    },
    {
      Activity:"Exercise",
      RecentNbHours:4,
      OldNbHours:5,
      bgcolor: "#4dcf83",

    },
    {
      Activity:"Social",
      RecentNbHours:5,
      OldNbHours:10,
      bgcolor: "#7236d2",

    },
    {
      Activity:"Seif Care",
      RecentNbHours:2,
      OldNbHours:2,
      bgcolor: "#f1c660",

    },
  ]
  return (
    <div className="App">
      
       <div className="rightPart" >
       <Avatar></Avatar>
        {
          
          props.map((card, index) => (
            <div key={index}>
             
              <Person Activity={card?.Activity} RecentNbHours={card?.RecentNbHours} OldNbHours={card?.OldNbHours} bgcolor={card?.bgcolor || 'defaultColor'} />
              {/* icon={card?.iconimage}  */}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;

