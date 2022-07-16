import React from 'react';
import _ from 'lodash';
import Place from './Place';

const PlacesList = ({ places, setPlaces }) => {

	const handleRemovePlace = (id) => {
		setPlaces(places.filter((place) => place.id !== id))
	}

	return (
		<React.Fragment>
			<div className="place-list">
				{!_.isEmpty(places) ? (
					places.map((place) => (
						<Place
							key={place.id}
							{...place}
							handleRemovePlace={handleRemovePlace}
						/>
					))
				) : (
					<p className="message">No places available. Please add some places.</p>
				)}
			</div>
		</React.Fragment>
	)
};

export default PlacesList;