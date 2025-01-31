"use client"

import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { scaleQuantile } from "d3-scale"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const generateRandomData = () => {
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      id: `country-${i}`,
      value: Math.floor(Math.random() * 100),
    })
  }
  return data
}

const HeatMap = () => {
  const [data, setData] = React.useState(generateRandomData())

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"])

  return (
    <ComposableMap projectionConfig={{ scale: 150 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const d = data.find((s) => s.id === geo.id)
            return <Geography key={geo.rsmKey} geography={geo} fill={d ? colorScale(d.value) : "#EEE"} />
          })
        }
      </Geographies>
    </ComposableMap>
  )
}

export default HeatMap

