import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; 
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
 export const Map = () => {
  const position = [44.85466, -93.24565];
  return (
    <MapContainer center={position} zoom={14} style={{margin:"0px auto 30px auto",border:"solid 1px black", width: "83%", height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>📍 Pz Resturant</Popup>
      </Marker>
    </MapContainer>
  );
};

