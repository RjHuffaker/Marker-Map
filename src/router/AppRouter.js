import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddMarker from '../components/AddMarker';
import MarkerList from '../components/MarkerList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
	const [markers, setMarkers] = useLocalStorage('markers', []);

	return (
		<BrowserRouter>
			<div>
				<Header />
				<div className="main-content">
					<Switch>
						<Route
							render={(props) => (
								<MarkerList {...props} markers={markers} setMarkers={setMarkers} />
							)}
							path="/"
							exact={true}
						/>
						<Route component={MarkerList} path="/" exact={true} />
						<Route
							render={(props) => (
								<AddMarker {...props} markers={markers} setMarkers={setMarkers} />
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