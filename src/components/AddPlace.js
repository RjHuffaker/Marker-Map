import React from 'react';
import PlaceForm from './PlaceForm';

const AddPlace = ({ history, places, setPlaces }) => {
	const handleOnSubmit = (place) => {
		setPlaces([place, ...places]);
		history.push('/');
	}

	return(
		<React.Fragment>
			<PlaceForm handleOnSubmit={handleOnSubmit} />
		</React.Fragment>
	)
}

export default AddPlace;