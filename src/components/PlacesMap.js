import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '900px',
  height: '600px'
};

const center = {
  lat: 40.54149320752432,
  lng: -112.31041498069737
};

function PlacesMap({places}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBi54ehlrrs28I7qEeU1jA6mJKB0If9KkI"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.setCenter(center);
    setMap(map)
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  const onMapClick = (event) => {
    console.log('onMapClick');
    console.log(event);
  };

  const onMarkerClick = (event) => {
    console.log('onMarkerClick');
    console.log(event);
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
      >
          {
            places.map((el,i) => {
              return (
                <Marker
                  key={i}
                  position={{lat: parseFloat(el.lat), lng: parseFloat(el.lng)}}
                  onClick={onMarkerClick}
                />
              );
            })
          }
      </GoogleMap>
  ) : <></>
}

export default React.memo(PlacesMap)