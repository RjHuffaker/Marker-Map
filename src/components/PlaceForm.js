import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const PlaceForm = (props) => {
	const [place, setPlace] = useState({
		placeName: props.place ? props.place.placeName : '',
		lat: props.place ? props.place.lat : '',
		lng: props.place ? props.place.lng : '',
		date: props.place ? props.place.date : ''
	});

	const [ errorMsg, setErrorMsg ] = useState('');
	const { placeName, lat, lng } = place;

	const handleOnSubmit = (event) => {
		event.preventDefault();
		const values = [placeName, lat, lng];
		let errorMsg = '';

		const allFieldsFilled = values.every((field) => {
			const value = `${field}`.trim();
			return value !== '' && value !== '0';
		});

		if (allFieldsFilled) {
			const place = {
				id: uuidv4(),
				placeName,
				lat,
				lng,
				date: new Date()
			}
			props.handleOnSubmit(place);
		} else {
			errorMsg = 'Please fill out all the fields';
		}

		setErrorMsg(errorMsg);

	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setPlace((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	return (
		<div className="main-form">
			{errorMsg && <p className="errorMsg">{errorMsg}</p>}
			<Form onSubmit={handleOnSubmit}>
				<Form.Group controlId="name">
					<Form.Label>Place Name</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="placeName"
						value={placeName}
						placeholder="Enter name of place"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="lat">
					<Form.Label>Place Latitude</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="lat"
						value={lat}
						placeholder="Enter latitude of place"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="lng">
					<Form.Label>Place Longitude</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="lng"
						value={lng}
						placeholder="Enter longitude of place"
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

export default PlaceForm