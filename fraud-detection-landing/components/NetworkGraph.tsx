"use client"
import { ForceGraph2D } from "react-force-graph"

const NetworkGraph = () => {
  const data = {
    nodes: [
      { id: "A", group: 1 },
      { id: "B", group: 1 },
      { id: "C", group: 2 },
      { id: "D", group: 2 },
      { id: "E", group: 3 },
    ],
    links: [
      { source: "A", target: "B" },
      { source: "B", target: "C" },
      { source: "C", target: "D" },
      { source: "D", target: "E" },
      { source: "E", target: "A" },
    ],
  }

  return (
    <ForceGraph2D
      graphData={data}
      nodeAutoColorBy="group"
      nodeCanvasObject={(node, ctx, globalScale) => {
        const label = node.id
        const fontSize = 12 / globalScale
        ctx.font = `${fontSize}px Sans-Serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = node.color
        ctx.fillText(label, node.x, node.y)
      }}
      width={600}
      height={400}
    />
  )
}

export default NetworkGraph

