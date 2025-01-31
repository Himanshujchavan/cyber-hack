"use client"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { scaleLinear } from "d3-scale"
import { Tooltip } from "react-tooltip"

const INDIA_TOPO_JSON =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json"

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // Coordinates for India
}

// Mock data for top 10 fraud case cities
const topFraudCities = [
  { name: "Mumbai", coordinates: [72.8777, 19.076], cases: 1000 },
  { name: "Delhi", coordinates: [77.1025, 28.7041], cases: 950 },
  { name: "Bangalore", coordinates: [77.5946, 12.9716], cases: 800 },
  { name: "Hyderabad", coordinates: [78.4867, 17.385], cases: 750 },
  { name: "Chennai", coordinates: [80.2707, 13.0827], cases: 700 },
  { name: "Kolkata", coordinates: [88.3639, 22.5726], cases: 650 },
  { name: "Pune", coordinates: [73.8567, 18.5204], cases: 600 },
  { name: "Ahmedabad", coordinates: [72.5714, 23.0225], cases: 550 },
  { name: "Jaipur", coordinates: [75.7873, 26.9124], cases: 500 },
  { name: "Lucknow", coordinates: [80.9462, 26.8467], cases: 450 },
]

const IndiaSatelliteMap = () => {
  const maxCases = Math.max(...topFraudCities.map((city) => city.cases))
  const minCases = Math.min(...topFraudCities.map((city) => city.cases))

  const colorScale = scaleLinear<string>().domain([minCases, maxCases]).range(["#FFA07A", "#FF0000"])

  return (
    <div className="relative">
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />)
          }
        </Geographies>
        {topFraudCities.map((city, index) => (
          <Marker key={index} coordinates={city.coordinates as [number, number]}>
            <circle
              r={5}
              fill={colorScale(city.cases)}
              stroke="#FFFFFF"
              strokeWidth={2}
              data-tooltip-id="city-tooltip"
              data-tooltip-content={`${city.name}: ${city.cases} cases`}
            />
          </Marker>
        ))}
      </ComposableMap>
      <Tooltip id="city-tooltip" />
      <div className="absolute top-0 right-0 bg-white p-2 rounded shadow">
        <h3 className="text-sm font-bold mb-1">Fraud Cases</h3>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-[#FFA07A] mr-1"></span>
          <span className="text-xs">{minCases}</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-[#FF0000] mr-1"></span>
          <span className="text-xs">{maxCases}</span>
        </div>
      </div>
    </div>
  )
}

export default IndiaSatelliteMap

