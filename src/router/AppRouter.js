import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddPlace from '../components/AddPlace';
import PlaceList from '../components/PlaceList';
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
								<PlaceList {...props} places={places} setPlaces={setPlaces} />
							)}
							path="/"
							exact={true}
						/>
						<Route component={PlaceList} path="/" exact={true} />
						<Route
							render={(props) => (
								<AddPlace {...props} places={places} setPlaces={setPlaces} />
							)}
							path="/add"
						/>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter