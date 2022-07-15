import React from 'react';
import MarkerForm from './MarkerForm';

const AddMarker = ({ history, markers, setMarkers }) => {
	const handleOnSubmit = (marker) => {
		setMarkers([marker, ...markers]);
		history.push('/');
	}

	return(
		<React.Fragment>
			<MarkerForm handleOnSubmit={handleOnSubmit} />
		</React.Fragment>
	)
}

export default AddMarker;