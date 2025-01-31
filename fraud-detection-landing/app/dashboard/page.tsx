"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
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
import { Pie, Line, Bar } from "react-chartjs-2"
import dynamic from "next/dynamic"
import { toast } from "@/components/ui/use-toast"

const IndiaHeatMap = dynamic(() => import("@/components/IndiaHeatMap"), { ssr: false })
const InteractiveIndiaMap = dynamic(() => import("@/components/InteractiveIndiaMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
})

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement)

export default function Dashboard() {
  const router = useRouter()
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Rahul Sharma", status: "Active", riskScore: 30, transactions: "5 entries" },
    { id: 2, name: "Priya Patel", status: "Flagged", riskScore: 75, transactions: "3 entries" },
    { id: 3, name: "Amit Singh", status: "Suspended", riskScore: 95, transactions: "2 entries" },
  ])

  const pieData = {
    labels: ["Low Risk", "Medium Risk", "High Risk"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  }

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Transaction Velocity",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const barData = {
    labels: ["Account A", "Account B", "Account C", "Account D", "Account E"],
    datasets: [
      {
        label: "Flagged Transactions",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  }

  const handleViewDetails = (accountId: number) => {
    router.push(`/account/${accountId}`)
  }

  const handleFreezeAccount = (accountId: number) => {
    setAccounts(accounts.map((account) => (account.id === accountId ? { ...account, status: "Frozen" } : account)))
    toast({
      title: "Account Frozen",
      description: `Account ${accountId} has been frozen.`,
    })
  }

  const handleRequestVerification = (accountId: number) => {
    setAccounts(
      accounts.map((account) =>
        account.id === accountId ? { ...account, status: "Verification Requested" } : account,
      ),
    )
    toast({
      title: "Verification Requested",
      description: `Additional verification requested for Account ${accountId}.`,
    })
  }

  const handleMarkSafe = (accountId: number) => {
    setAccounts(
      accounts.map((account) => (account.id === accountId ? { ...account, status: "Safe", riskScore: 10 } : account)),
    )
    toast({
      title: "Account Marked Safe",
      description: `Account ${accountId} has been marked as safe.`,
    })
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="space-y-8 p-8 bg-background">
      <h1 className="text-3xl font-bold text-primary">Fraud Detection Dashboard</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Live Risk Score of Bank Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Holder Name</TableHead>
                <TableHead>Account Status</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Recent Transactions</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.status}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded ${
                        account.riskScore < 50
                          ? "bg-green-200 text-green-800"
                          : account.riskScore < 80
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-red-200 text-red-800"
                      }`}
                    >
                      {account.riskScore}%
                    </span>
                  </TableCell>
                  <TableCell>{account.transactions}</TableCell>
                  <TableCell>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleViewDetails(account.id)}>
                        View Details
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleFreezeAccount(account.id)}>
                        Freeze Account
                      </Button>
                      <Button variant="warning" size="sm" onClick={() => handleRequestVerification(account.id)}>
                        ⚠ Request Verification
                      </Button>
                      <Button variant="default" size="sm" onClick={() => handleMarkSafe(account.id)}>
                        ✅ Mark as Safe
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Risk Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Pie data={pieData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Transaction Velocity</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={lineData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Top Flagged Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={barData} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Interactive Map of Fraud Cases in India</CardTitle>
        </CardHeader>
        <CardContent className="p-0">{isMounted && <InteractiveIndiaMap />}</CardContent>
      </Card>
    </div>
  )
}

