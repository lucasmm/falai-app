import React from 'react';
import {Dimensions, Text} from 'react-native';
import MapView, {Polyline, Marker} from 'react-native-maps';

import {Container, LoadButton} from './styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const RouteMap = ({route}) => {
  const {mapParams, location} = route.params;

  return (
    <Container>
      <MapView
        style={{width, height}}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {mapParams.routeForMap && (
          <Polyline
            coordinates={mapParams.routeForMap}
            strokeWidth={7}
            strokeColor="red"
            geodesic={true}
          />
        )}
        {mapParams.markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        ))}
      </MapView>
    </Container>
  );
};

export default RouteMap;
