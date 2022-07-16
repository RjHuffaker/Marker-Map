import React from 'react';
import PlaceForm from './PlaceForm';
import { useParams } from 'react-router-dom';

const EditPlace = ({ history, places, setPlaces }) => {
  const { id } = useParams();
  const placeToEdit = places.find((place) => place.id === id);

  const handleOnSubmit = (place) => {
    const filteredPlaces = places.filter((place) => place.id !== id);
    setPlaces([place, ...filteredPlaces]);
    history.push('/');
  };

  return (
    <div>
      <PlaceForm place={placeToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditPlace;