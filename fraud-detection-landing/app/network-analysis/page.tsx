import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import dynamic from "next/dynamic"

const NetworkGraph = dynamic(() => import("@/components/NetworkGraph"), { ssr: false })

export default function NetworkAnalysis() {
  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">Graph Network Analysis</h1>

      <Card>
        <CardHeader>
          <CardTitle>Visual Network Graph</CardTitle>
        </CardHeader>
        <CardContent>
          <NetworkGraph />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>List of Suspicious Account Networks</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Network ID</TableHead>
                <TableHead>Linked Accounts</TableHead>
                <TableHead>Transaction Pattern</TableHead>
                <TableHead>Risk Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>NET001</TableCell>
                <TableCell>A123, B456, C789</TableCell>
                <TableCell>Circular transfers</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded bg-red-200 text-red-800">92%</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>NET002</TableCell>
                <TableCell>D234, E567, F890</TableCell>
                <TableCell>Rapid withdrawals</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded bg-yellow-200 text-yellow-800">78%</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

