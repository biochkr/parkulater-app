import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { StyleSheet, Text, View, Button } from "react-native";
import { MapView } from "expo";
import ReservationForm from './ReservationForm.js';
import mapConfig from './mapconfig.js'

class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingSpot: [
                {
					id: 1,
					owner_id: 1,
					parking_address: '17933 Castellammare Dr, Pacific Palisades, CA 90272',
					longitudes: -118.565495,
					latitudes: 34.042962,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Thu Mar 21 2019 04:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 21 2019 07:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 22 2019 15:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Mar 24 2019 05:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Mar 25 2019 02:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Mar 26 2019 04:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Mar 26 2019 16:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 28 2019 09:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Mar 31 2019 00:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 01 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 01 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 01 2019 21:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 04 2019 23:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 05 2019 18:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Apr 06 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 06 2019 12:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 09 2019 14:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Apr 11 2019 00:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 11 2019 21:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 13 2019 21:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 16 2019 01:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 16 2019 08:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 16 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 19 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Apr 20 2019 12:00:00 GMT-0700 (Pacific Daylight Time)" }],
					// name: `Taylor's house`
				},
				{
					id: 2,
					owner_id: 1,
					parking_address: '563 Via de la Paz, Pacific Palisades, CA 90272',
					longitudes: -118.529235,
					latitudes: 34.039780,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Fri Mar 22 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 23 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Mar 23 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Mar 27 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Mar 28 2019 08:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Mar 29 2019 02:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 04:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Mar 29 2019 16:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 01 2019 08:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 04 2019 21:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 06 2019 00:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 02:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 07 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 09 2019 02:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 10 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 11 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 13 2019 02:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 14 2019 13:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 17 2019 00:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 18 2019 23:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 19 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 18:00:00 GMT-0700 (Pacific Daylight Time)" }],
					// name: 'Another house'
				},
				{
					id: 3,
					owner_id: 2,
					parking_address: '1900 Glendon Ave, Los Angeles, CA 90025',
					longitudes: -118.434037,
					latitudes: 34.048813,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Thu Mar 21 2019 05:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 21 2019 06:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Mar 25 2019 21:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 28 2019 21:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 15:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 30 2019 06:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 02 2019 10:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 02 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 03 2019 09:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 04 2019 01:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 07 2019 07:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 08 2019 11:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 08 2019 18:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Apr 11 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 11 2019 22:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 12 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 16 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 16 2019 21:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 18 2019 04:00:00 GMT-0700 (Pacific Daylight Time)" }],
					// name: `Taylor's apartment`
				},
				{
					id: 4,
					owner_id: 10,
					parking_address: '6060 Center Dr, Los  Angeles,  CA 90045',
					longitudes: -118.391106,
					latitudes: 33.976126,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Tue Mar 26 2019 12:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Mar 26 2019 15:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Mar 27 2019 00:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 28 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Mar 31 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Mar 31 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Mar 31 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 02 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 04 2019 10:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 05 2019 10:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 03:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 08 2019 06:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 09 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 09 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Apr 10 2019 01:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 10 2019 07:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Apr 10 2019 15:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 14 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 16 2019 12:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 19 2019 09:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 13:00:00 GMT-0700 (Pacific Daylight Time)" }],
					// name: 'Hack Reactor @ Galvanize'
				},
				{
					id: 5,
					owner_id: 3,
					parking_address: '811 W 7th St, Los  Angeles,  CA 90017',
					longitudes: -118.258964,
					latitudes: 34.049140,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Fri Mar 22 2019 06:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 23 2019 07:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Mar 23 2019 16:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 23 2019 18:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Mar 25 2019 01:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Mar 25 2019 03:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Mar 25 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Mar 26 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 01:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 30 2019 00:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Mar 30 2019 18:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 01 2019 03:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 02 2019 03:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 05 2019 15:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 06 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 11:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 08 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Apr 13 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 14 2019 01:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 14 2019 10:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 15 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 15 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Apr 18 2019 15:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 00:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 19 2019 03:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 23:00:00 GMT-0700 (Pacific Daylight Time)" }],
					// name: 'WeWork Fine Arts'
				},
				{
					id: 6,
					owner_id: 9,
					parking_address: '9149 S Sepulveda Blvd, Los Angeles, CA 90045',
					longitudes: -118.396787,
					latitudes: 33.953685,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Fri Mar 22 2019 06:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Mar 25 2019 15:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Mar 27 2019 07:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Mar 27 2019 12:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Mar 27 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 30 2019 06:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Mar 30 2019 10:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 01 2019 04:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 02 2019 01:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 09 2019 05:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 09 2019 07:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 09 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Apr 10 2019 11:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Apr 11 2019 11:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 12 2019 07:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 13 2019 10:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 14 2019 05:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 14 2019 16:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 15 2019 06:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 15 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 15 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 17 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 05:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 20 2019 12:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Apr 20 2019 22:00:00 GMT-0700 (Pacific Daylight Time)" }],
					// name: 'In n Out'
				}
            ]
        }
    }
    
    render() {
        const {navigate} = this.props.navigation;
        const {parkingSpot} = this.state;
        
        return (
            <MapView
                style={{ flex: 1 }}
                provider="google"
                initialRegion={{
                  latitude: 34.040687,
                  longitude: -118.255258,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
             >
                {parkingSpot.map((spot, i) => {
                    let address = spot.parking_address.split(',')[0];
					return <Marker
						key={i}
						name={address}
						title={spot.parking_address}
						spot={spot}
						position={{ lat: spot.latitudes, lng: spot.longitudes }}
						icon={{
							url: 'https://cdn4.iconfinder.com/data/icons/car-service-1/512/park-512.png',
							anchor: new google.maps.Point(32, 32),
							scaledSize: new google.maps.Size(40, 40)
						}}
					/>
                })}
                <Button title="Lot A" onPress={() => navigate('Reserved')}/>
            </MapView>
        )
    }
}

export default GoogleApiWrapper({
	apiKey: mapConfig.API_KEY
})(MainMap);

// export default MainMap;