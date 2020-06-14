import React, {useEffect, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

import {Container, ViewData, TextBold, TextData} from './styles';
import DefaultButton from '../../components/Button';

const PlanningRoute = ({navigation}) => {
  const [location, setLocation] = useState();
  const [mapParams, setMapParams] = useState({});

  useEffect(() => {
    (async () => {
      Geolocation.getCurrentPosition(info => {
        setLocation(info);
      });
    })();
  }, [setLocation]);

  const load = (lat, lon) => {
    axios
      .get(
        `https://route.ls.hereapi.com/routing/7.2/calculateroute.json?apiKey=&mode=fastest;truck&waypoint0=geo!${
          location?.coords?.latitude
        },${
          location?.coords?.longitude
        }&waypoint1=geo!${lat},${lon}&height=3&routeattributes=sh,bb,gr`,
      )
      .then(res => {
        let routeCoordinates = [];
        res.data.response.route[0].shape.map(m => {
          // here we are getting latitude and longitude in seperate variables because HERE sends it together, but we
          // need it seperate for <Polyline/>
          let latlong = m.split(',');
          let latitude = parseFloat(latlong[0]);
          let longitude = parseFloat(latlong[1]);
          routeCoordinates.push({latitude: latitude, longitude: longitude});
        });
        setMapParams({
          routeForMap: routeCoordinates,
          summary: res.data.response.route[0].summary,
          markers: res.data.response.route[0].waypoint.map(wp => {
            return {
              latitude: wp.mappedPosition.latitude,
              longitude: wp.mappedPosition.longitude,
            };
          }),
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Pesquisar"
        onPress={(data, details = null) => {
          load(details?.geometry.location.lat, details?.geometry.location.lng);
        }}
        query={{
          key: '',
          language: 'pt-BR',
        }}
        styles={{
          textInputContainer: {
            backgroundColor: '#f5f5f5',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          listView: {
            position: 'absolute',
            top: 60,
          },
          container: {
            height: 10,
          },
        }}
      />
      {mapParams.summary && (
        <ViewData>
          <TextData>
            Distância total:{' '}
            <TextBold>
              {(mapParams.summary.distance / 1000).toFixed()} Km
            </TextBold>
          </TextData>
          <TextData>
            Tempo estimado:{' '}
            <TextBold>
              {new Date(mapParams.summary.baseTime * 1000)
                .toISOString()
                .substr(11, 8)}
            </TextBold>
          </TextData>
          <TextData>
            Valor de pedágio: <TextBold>R$ 123,50</TextBold>
          </TextData>
          <TextData>
            Valor de combustível: <TextBold>R$ 1011,50</TextBold>
          </TextData>
          <DefaultButton
            onPress={() => {
              navigation.push('routeMap', {
                mapParams,
                location,
              });
            }}>
            Ver rota
          </DefaultButton>
        </ViewData>
      )}
    </Container>
  );
};

export default PlanningRoute;
