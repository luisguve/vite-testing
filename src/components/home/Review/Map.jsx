import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerPopup from "./MarkerPopup";
import "./map.css";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import React from 'react';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: iconRetina,
	iconUrl: icon,
	shadowUrl: iconShadow
});

// Coords of the United States
const initialView = [37.6, -95.665];
const accessToken = "pk.eyJ1IjoibHVpc2d1dmUiLCJhIjoiY2toYW4yYXM4MDRndzJ3cXA2a29vdHN6YiJ9.P2WIRXmtlkXYKqTtO-pHsA";
const url = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`;

const Map = (props) => {
	const markers = props.markerLocations.map((m, idx) => {
		return (
			<Marker position={m.coords} key={idx}>
				<Popup>
					<MarkerPopup
					userReviews={m.userReviews}
					businessReviews={m.businessReviews}
					/>
				</Popup>
			</Marker>
		);
	});
	return (
		<MapContainer center={initialView} zoom={4} >
			<TileLayer
			attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
			url={url}
			id={"mapbox/streets-v11"}
			tileSize={512}
			zoomOffset={-1}
			/>
			{markers}
		</MapContainer>
	);
}

export default Map;