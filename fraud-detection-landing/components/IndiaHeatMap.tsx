"use client"

import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { scaleQuantile } from "d3-scale"
import { Tooltip as ReactTooltip } from "react-tooltip"

const INDIA_TOPO_JSON =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json"

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // Coordinates for India
}

const COLOR_RANGE = ["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"]

const DEFAULT_COLOR = "#EEE"

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
}

// Mock data for cyber fraud intensity
const cyberFraudData = [
  { id: "AP", state: "Andhra Pradesh", value: 40 },
  { id: "AR", state: "Arunachal Pradesh", value: 15 },
  { id: "AS", state: "Assam", value: 30 },
  { id: "BR", state: "Bihar", value: 55 },
  { id: "CT", state: "Chhattisgarh", value: 25 },
  { id: "GA", state: "Goa", value: 10 },
  { id: "GJ", state: "Gujarat", value: 70 },
  { id: "HR", state: "Haryana", value: 65 },
  { id: "HP", state: "Himachal Pradesh", value: 20 },
  { id: "JH", state: "Jharkhand", value: 45 },
  { id: "KA", state: "Karnataka", value: 80 },
  { id: "KL", state: "Kerala", value: 35 },
  { id: "MP", state: "Madhya Pradesh", value: 50 },
  { id: "MH", state: "Maharashtra", value: 90 },
  { id: "MN", state: "Manipur", value: 5 },
  { id: "ML", state: "Meghalaya", value: 8 },
  { id: "MZ", state: "Mizoram", value: 3 },
  { id: "NL", state: "Nagaland", value: 7 },
  { id: "OR", state: "Odisha", value: 40 },
  { id: "PB", state: "Punjab", value: 60 },
  { id: "RJ", state: "Rajasthan", value: 55 },
  { id: "SK", state: "Sikkim", value: 2 },
  { id: "TN", state: "Tamil Nadu", value: 75 },
  { id: "TG", state: "Telangana", value: 65 },
  { id: "TR", state: "Tripura", value: 12 },
  { id: "UT", state: "Uttarakhand", value: 30 },
  { id: "UP", state: "Uttar Pradesh", value: 85 },
  { id: "WB", state: "West Bengal", value: 70 },
  { id: "AN", state: "Andaman and Nicobar Islands", value: 1 },
  { id: "CH", state: "Chandigarh", value: 25 },
  { id: "DN", state: "Dadra and Nagar Haveli", value: 5 },
  { id: "DD", state: "Daman and Diu", value: 4 },
  { id: "DL", state: "Delhi", value: 95 },
  { id: "JK", state: "Jammu and Kashmir", value: 35 },
  { id: "LA", state: "Ladakh", value: 10 },
  { id: "LD", state: "Lakshadweep", value: 1 },
  { id: "PY", state: "Puducherry", value: 15 },
]

const IndiaHeatMap = () => {
  const [tooltipContent, setTooltipContent] = React.useState("")

  const colorScale = scaleQuantile()
    .domain(cyberFraudData.map((d) => d.value))
    .range(COLOR_RANGE)

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`)
    }
  }

  const onMouseLeave = () => {
    setTooltipContent("")
  }

  return (
    <div className="full-width-height container">
      <ReactTooltip id="india-map-tooltip" />
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tooltip-id="india-map-tooltip"
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const current = cyberFraudData.find((s) => s.id === geo.id)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}

export default IndiaHeatMap

