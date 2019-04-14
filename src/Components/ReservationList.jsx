import React from 'react';
import reservationList from './reservationEntryData';


const ReservationList = () => {
  return (
    <div>
      {
        reservationList.map((entry, i) => {
          return <div key={`${i * 2}`}>{entry.toString()}</div>
        })
      }
    </div>
  );
}

export default ReservationList;
