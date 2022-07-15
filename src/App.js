import { useState } from 'react'
import './App.css';
import MapComponent from './components/MapComponent';

export default function App() {

  const markerList = [
    { lat: 40.54149320752432, lng: -112.31041498069737 },
    { lat: 40.52149320752432, lng: -112.32051498069727 },
    { lat: 40.55963900732105, lng: -112.30175993300523 },
    { lat: 40.52963900733105, lng: -112.29165993301523 },
    { lat: 40.56963900734105, lng: -112.33195993302523 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Marker Map</h1>
        <MapComponent
          markerList={markerList}
        />
      </header>
    </div>
  );
}