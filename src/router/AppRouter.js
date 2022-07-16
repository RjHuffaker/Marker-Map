import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddPlace from '../components/AddPlace';
import EditPlace from '../components/EditPlace';
import PlacesList from '../components/PlacesList';
import PlacesMap from '../components/PlacesMap';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
	const [places, setPlaces] = useLocalStorage('places', []);

	return (
		<BrowserRouter>
			<div>
				<Header />
				<div className="main-content">
					<Switch>
						<Route
							render={(props) => (
								<PlacesList {...props} places={places} setPlaces={setPlaces} />
							)}
							path="/"
							exact={true}
						/>
						<Route component={PlacesList} path="/" exact={true} />
						<Route
							render={(props) => (
								<AddPlace {...props} places={places} setPlaces={setPlaces} />
							)}
							path="/add"
						/>
						<Route 
							render={(props) => (
								<PlacesMap {...props} places={places} setPlaces={setPlaces} />
							)}
							path="/map"
						/>
						<Route
							render={(props) => (
								<EditPlace {...props} places={places} setPlaces={setPlaces} />
							)}   
							path="/edit/:id"
						/>

					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter