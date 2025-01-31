"use client"

import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { scaleQuantile } from "d3-scale"

const INDIA_TOPO_JSON =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json"

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937],
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

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateMockData = () => {
  const mockData = [
    ["State", "Fraud Cases"],
    ["Andhra Pradesh", getRandomInt(50, 500)],
    ["Arunachal Pradesh", getRandomInt(10, 100)],
    ["Assam", getRandomInt(30, 300)],
    ["Bihar", getRandomInt(100, 1000)],
    ["Chhattisgarh", getRandomInt(20, 200)],
    ["Goa", getRandomInt(5, 50)],
    ["Gujarat", getRandomInt(200, 2000)],
    ["Haryana", getRandomInt(100, 1000)],
    ["Himachal Pradesh", getRandomInt(10, 100)],
    ["Jharkhand", getRandomInt(50, 500)],
    ["Karnataka", getRandomInt(300, 3000)],
    ["Kerala", getRandomInt(100, 1000)],
    ["Madhya Pradesh", getRandomInt(200, 2000)],
    ["Maharashtra", getRandomInt(500, 5000)],
    ["Manipur", getRandomInt(5, 50)],
    ["Meghalaya", getRandomInt(5, 50)],
    ["Mizoram", getRandomInt(5, 50)],
    ["Nagaland", getRandomInt(5, 50)],
    ["Odisha", getRandomInt(100, 1000)],
    ["Punjab", getRandomInt(200, 2000)],
    ["Rajasthan", getRandomInt(300, 3000)],
    ["Sikkim", getRandomInt(5, 50)],
    ["Tamil Nadu", getRandomInt(400, 4000)],
    ["Telangana", getRandomInt(200, 2000)],
    ["Tripura", getRandomInt(10, 100)],
    ["Uttar Pradesh", getRandomInt(1000, 10000)],
    ["Uttarakhand", getRandomInt(50, 500)],
    ["West Bengal", getRandomInt(300, 3000)],
  ]

  return mockData
}

const IndiaMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = React.useState("")
  const [data, setData] = React.useState<[string, number][]>([])

  React.useEffect(() => {
    const mockData = generateMockData()
    setData(mockData.slice(1) as [string, number][])
  }, [])

  const colorScale = scaleQuantile<string>()
    .domain(data.map((d) => d[1]))
    .range(COLOR_RANGE)

  const onMouseEnter = (geo: any, current: any = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`)
    }
  }

  const onMouseLeave = () => {
    setTooltipContent("")
  }

  return (
    <div className="full-width-height container">
      <ComposableMap projectionConfig={PROJECTION_CONFIG} projection="geoMercator" width={600} height={220} data-tip="">
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const current = data.find((s) => s[0] === geo.properties.name)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current[1]) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <div className="tooltip" style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}>
          {tooltipContent}
        </div>
      )}
    </div>
  )
}

export default IndiaMap

