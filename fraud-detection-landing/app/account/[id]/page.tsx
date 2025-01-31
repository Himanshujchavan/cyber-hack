"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function AccountDetails() {
  const params = useParams()
  const [account, setAccount] = useState<any>(null)

  useEffect(() => {
    // In a real application, you would fetch the account details from an API
    // For this example, we'll use mock data
    const mockAccount = {
      id: params.id,
      name: "Rahul Sharma",
      accountNumber: "1234567890",
      kycVerified: true,
      riskScore: 75,
      loginHistory: [
        { ip: "192.168.1.1", location: "Mumbai, India", device: "iPhone 12" },
        { ip: "10.0.0.1", location: "Delhi, India", device: "MacBook Pro" },
      ],
      recentTransactions: [
        { date: "2023-07-01", description: "Online Purchase", amount: 25000, fraudLikelihood: 5 },
        { date: "2023-06-30", description: "ATM Withdrawal", amount: 50000, fraudLikelihood: 85 },
      ],
    }
    setAccount(mockAccount)
  }, [params.id])

  const [accountStatus, setAccountStatus] = useState("active")

  const handleFreezeAccount = () => {
    setAccountStatus("frozen")
    toast({ title: "Account Frozen", description: `Account ${account.id} has been frozen.` })
  }

  const handleRequestVerification = () => {
    setAccountStatus("verification_requested")
    toast({
      title: "Verification Requested",
      description: `Additional verification requested for Account ${account.id}.`,
    })
  }

  const handleMarkSafe = () => {
    setAccountStatus("safe")
    toast({ title: "Account Marked Safe", description: `Account ${account.id} has been marked as safe.` })
  }

  if (!account) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8 p-8 bg-background">
      <h1 className="text-3xl font-bold text-primary">Account Details: {account.id}</h1>

      <Card>
        <CardHeader>
          <CardTitle>User Identity Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {account.name}
            </p>
            <p>
              <strong>Account Number:</strong> {account.accountNumber}
            </p>
            <p>
              <strong>KYC Verified:</strong> {account.kycVerified ? "✅" : "❌"}
            </p>
            <p>
              <strong>Fraud Risk Score:</strong>
              <span
                className={`ml-2 px-2 py-1 rounded ${
                  account.riskScore < 50
                    ? "bg-green-200 text-green-800"
                    : account.riskScore < 80
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                }`}
              >
                {account.riskScore}%
              </span>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Login & Device History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>IP</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Device</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {account.loginHistory.map((login: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>{login.ip}</TableCell>
                  <TableCell>{login.location}</TableCell>
                  <TableCell>{login.device}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount (₹)</TableHead>
                <TableHead>Fraud Likelihood</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {account.recentTransactions.map((transaction: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>₹{transaction.amount.toLocaleString("en-IN")}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded ${
                        transaction.fraudLikelihood < 50
                          ? "bg-green-200 text-green-800"
                          : transaction.fraudLikelihood < 80
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-red-200 text-red-800"
                      }`}
                    >
                      {transaction.fraudLikelihood}%
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button variant="destructive" onClick={handleFreezeAccount} disabled={accountStatus === "frozen"}>
          🔴 Freeze Account
        </Button>
        <Button
          variant="default"
          onClick={handleRequestVerification}
          disabled={accountStatus === "verification_requested"}
        >
          ⚠ Request Additional Verification
        </Button>
        <Button variant="outline" onClick={handleMarkSafe} disabled={accountStatus === "safe"}>
          ✅ Mark as Safe
        </Button>
      </div>
    </div>
  )
}

