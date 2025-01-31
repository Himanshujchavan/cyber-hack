"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, Line, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement)

export default function Analytics() {
  const fraudTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Fraud Attempts",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const fraudTypesData = {
    labels: ["Identity Theft", "Phishing", "Card Skimming", "Money Mules"],
    datasets: [
      {
        data: [300, 50, 100, 80],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  }

  const detectionRateData = {
    labels: ["Detected", "Missed"],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["#4CAF50", "#FF5722"],
        hoverBackgroundColor: ["#45a049", "#f4511e"],
      },
    ],
  }

  const geographicDistributionData = {
    labels: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"],
    datasets: [
      {
        label: "Fraud Cases",
        data: [120, 190, 30, 50, 20],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="space-y-8 p-8 bg-background">
      <h1 className="text-3xl font-bold text-primary">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Fraud Trends Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={fraudTrendsData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Types of Fraud Detected</CardTitle>
          </CardHeader>
          <CardContent>
            <Doughnut data={fraudTypesData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fraud Detection Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <Doughnut data={detectionRateData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution of Fraud</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={geographicDistributionData} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fraud attempts have increased by 15% in the last quarter.</li>
            <li>Identity theft remains the most common type of fraud.</li>
            <li>Our AI system has successfully detected 85% of all fraud attempts.</li>
            <li>Mumbai and Delhi show the highest number of fraud cases.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

