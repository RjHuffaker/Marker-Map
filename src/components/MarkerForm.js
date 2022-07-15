import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const MarkerForm = (props) => {
	const [marker, setMarker] = useState({
		markerName: props.marker ? props.marker.markerName : '',
		lat: props.marker ? props.marker.lat : '',
		lng: props.marker ? props.marker.lng : '',
		date: props.marker ? props.marker.date : ''
	});

	const [ errorMsg, setErrorMsg ] = useState('');
	const { markerName, lat, lng } = marker;

	const handleOnSubmit = (event) => {
		event.preventDefault();
		const values = [markerName, lat, lng];
		let errorMsg = '';

		const allFieldsFilled = values.every((field) => {
			const value = `${field}`.trim();
			return value !== '' && value !== '0';
		});

		if (allFieldsFilled) {
			const marker = {
				id: uuidv4(),
				markerName,
				lat,
				lng,
				date: new Date()
			}
			props.handleOnSubmit(marker);
		} else {
			errorMsg = 'Please fill out all the fields';
		}

		setErrorMsg(errorMsg);

	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setMarker((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	return (
		<div className="main-form">
			{errorMsg && <p className="errorMsg">{errorMsg}</p>}
			<Form onSubmit={handleOnSubmit}>
				<Form.Group controlId="name">
					<Form.Label>Marker Name</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="markerName"
						value={markerName}
						placeholder="Enter name of marker"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="lat">
					<Form.Label>Marker Latitude</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="lat"
						value={lat}
						placeholder="Enter latitude of marker"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="lng">
					<Form.Label>Marker Longitude</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="lng"
						value={lng}
						placeholder="Enter longitude of marker"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="submit-btn">
					Submit
				</Button>
			</Form>
		</div>
	)

}

export default MarkerForm