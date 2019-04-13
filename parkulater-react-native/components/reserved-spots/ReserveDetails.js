import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { reservationList }  from '../../reservationEntryData.js'

/*
    The purpose of this function is to display and list of upcomming events
    this function requires a list of reservations and checks whther or not they were
    past, or upcoming.
    
    When the reservation list item is clicked, it then takes you to the reservation item entry details for cancelling?
    
    ReservationList: [
        {
            username: aqilt29,
            dateMade: 4/13/19,
            dateReserved: 4/15/19,
            price: "$30.10",
            timeStart: "11:00"
            timeEnd: "22:30",
            address: "110 E 9th Street Los Angeles"
        }
    ]
    
*/


const ReserveDetails = (props) => {
    return (
        <Text>{reservationList[0]}</Text>
    )
}




export default ReserveDetails;

