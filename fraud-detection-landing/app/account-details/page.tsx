import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function AccountDetails() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Account Details</h1>

      <Card>
        <CardHeader>
          <CardTitle>User Identity Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Account Number:</strong> 1234567890
            </p>
            <p>
              <strong>KYC Verified:</strong> ✅
            </p>
            <p>
              <strong>Fraud Risk Score:</strong>
              <span className="ml-2 px-2 py-1 rounded bg-yellow-200 text-yellow-800">75%</span>
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
              <TableRow>
                <TableCell>192.168.1.1</TableCell>
                <TableCell>New York, USA</TableCell>
                <TableCell>iPhone 12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10.0.0.1</TableCell>
                <TableCell>London, UK</TableCell>
                <TableCell>MacBook Pro</TableCell>
              </TableRow>
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
                <TableHead>Amount</TableHead>
                <TableHead>Fraud Likelihood</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-07-01</TableCell>
                <TableCell>Online Purchase</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded bg-green-200 text-green-800">5%</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-30</TableCell>
                <TableCell>ATM Withdrawal</TableCell>
                <TableCell>$500.00</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded bg-red-200 text-red-800">85%</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button variant="destructive">🔴 Freeze Account</Button>
        <Button variant="warning">⚠ Request Additional Verification</Button>
        <Button variant="default">✅ Mark as Safe</Button>
      </div>
    </div>
  )
}

