"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

export default function Alerts() {
  const [alerts, setAlerts] = useState([
    { id: 1, account: "1234567890", name: "Rahul Sharma", type: "Suspicious activity", riskScore: 92, status: "New" },
    {
      id: 2,
      account: "2345678901",
      name: "Priya Patel",
      type: "High-risk behavior",
      riskScore: 78,
      status: "In Progress",
    },
    { id: 3, account: "3456789012", name: "Amit Singh", type: "Unusual login", riskScore: 65, status: "Resolved" },
  ])

  const [frozenAccounts, setFrozenAccounts] = useState([
    {
      id: 1,
      account: "4567890123",
      name: "Neha Gupta",
      reason: "Multiple failed login attempts",
      time: "2023-07-01 14:30:00",
      status: "Pending Review",
    },
    {
      id: 2,
      account: "5678901234",
      name: "Rajesh Kumar",
      reason: "Suspicious large transaction",
      time: "2023-07-02 09:15:00",
      status: "Pending Review",
    },
    {
      id: 3,
      account: "6789012345",
      name: "Priya Singh",
      reason: "Unusual login location",
      time: "2023-07-02 16:45:00",
      status: "Pending Review",
    },
    {
      id: 4,
      account: "7890123456",
      name: "Amit Patel",
      reason: "Multiple high-risk transactions",
      time: "2023-07-03 11:20:00",
      status: "Pending Review",
    },
    {
      id: 5,
      account: "8901234567",
      name: "Sneha Reddy",
      reason: "Potential account takeover",
      time: "2023-07-03 13:50:00",
      status: "Pending Review",
    },
  ])

  const handleAcknowledge = (id: number) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, status: "In Progress" } : alert)))
    toast({
      title: "Alert Acknowledged",
      description: `Alert for account ${id} has been acknowledged.`,
    })
  }

  const handleResolve = (id: number) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, status: "Resolved" } : alert)))
    toast({
      title: "Alert Resolved",
      description: `Alert for account ${id} has been resolved.`,
    })
  }

  const handleReviewFrozenAccount = (id: number) => {
    setFrozenAccounts(
      frozenAccounts.map((account) => (account.id === id ? { ...account, status: "Under Review" } : account)),
    )
    toast({
      title: "Account Review Initiated",
      description: `Review process started for frozen account ${id}.`,
    })
  }

  return (
    <div className="space-y-8 p-8 bg-background">
      <h1 className="text-3xl font-bold text-primary">Alerts & Notifications</h1>

      <Card>
        <CardHeader>
          <CardTitle>Real-Time Fraud Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Alert Type</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell>{alert.account}</TableCell>
                  <TableCell>{alert.name}</TableCell>
                  <TableCell>{alert.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant={alert.riskScore >= 80 ? "destructive" : alert.riskScore >= 50 ? "warning" : "success"}
                    >
                      {alert.riskScore}%
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        alert.status === "New" ? "default" : alert.status === "In Progress" ? "secondary" : "outline"
                      }
                    >
                      {alert.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {alert.status === "New" && (
                      <Button variant="outline" size="sm" onClick={() => handleAcknowledge(alert.id)}>
                        Acknowledge
                      </Button>
                    )}
                    {alert.status === "In Progress" && (
                      <Button variant="outline" size="sm" onClick={() => handleResolve(alert.id)}>
                        Resolve
                      </Button>
                    )}
                    {alert.status === "Resolved" && (
                      <Button variant="outline" size="sm" disabled>
                        Resolved
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Automated Account Freezing Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {frozenAccounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell>{account.account}</TableCell>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.reason}</TableCell>
                  <TableCell>{account.time}</TableCell>
                  <TableCell>{account.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReviewFrozenAccount(account.id)}
                      disabled={account.status === "Under Review"}
                    >
                      {account.status === "Under Review" ? "Reviewing" : "Review"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

