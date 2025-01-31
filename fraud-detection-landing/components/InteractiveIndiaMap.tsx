"use client"

import type React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { Icon } from "leaflet"

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
})

// Mock data for top 10 fraud case cities
const topFraudCities = [
  { name: "Mumbai", coordinates: [19.076, 72.8777], cases: 1000 },
  { name: "Delhi", coordinates: [28.7041, 77.1025], cases: 950 },
  { name: "Bangalore", coordinates: [12.9716, 77.5946], cases: 800 },
  { name: "Hyderabad", coordinates: [17.385, 78.4867], cases: 750 },
  { name: "Chennai", coordinates: [13.0827, 80.2707], cases: 700 },
  { name: "Kolkata", coordinates: [22.5726, 88.3639], cases: 650 },
  { name: "Pune", coordinates: [18.5204, 73.8567], cases: 600 },
  { name: "Ahmedabad", coordinates: [23.0225, 72.5714], cases: 550 },
  { name: "Jaipur", coordinates: [26.9124, 75.7873], cases: 500 },
  { name: "Lucknow", coordinates: [26.8467, 80.9462], cases: 450 },
  { name: "Surat", coordinates: [21.1702, 72.8311], cases: 400 },
  { name: "Kanpur", coordinates: [26.4499, 80.3319], cases: 350 },
  { name: "Nagpur", coordinates: [21.1458, 79.0882], cases: 300 },
  { name: "Indore", coordinates: [22.7196, 75.8577], cases: 250 },
  { name: "Thane", coordinates: [19.2183, 72.9781], cases: 200 },
]

const InteractiveIndiaMap: React.FC = () => {
  const locationIcon = new Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {topFraudCities.map((city, index) => (
        <Marker key={index} position={city.coordinates as [number, number]} icon={locationIcon}>
          <Popup>
            <strong>{city.name}</strong>
            <br />
            Fraud cases: {city.cases}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default InteractiveIndiaMap

