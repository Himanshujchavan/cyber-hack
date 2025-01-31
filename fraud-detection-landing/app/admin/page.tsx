import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function AdminPanel() {
  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">Admin Control Panel</h1>

      <Card>
        <CardHeader>
          <CardTitle>Manage Flagged Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>123456</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded bg-red-200 text-red-800">92%</span>
                </TableCell>
                <TableCell>Flagged</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button variant="destructive" size="sm">
                      Suspend
                    </Button>
                    <Button variant="outline" size="sm">
                      Investigate
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>789101</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded bg-yellow-200 text-yellow-800">78%</span>
                </TableCell>
                <TableCell>Suspended</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button variant="default" size="sm">
                      Unfreeze
                    </Button>
                    <Button variant="outline" size="sm">
                      Investigate
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Override AI Decisions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account</TableHead>
                <TableHead>AI Decision</TableHead>
                <TableHead>Override</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>234567</TableCell>
                <TableCell>Flagged as Fraudulent</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Mark as Safe
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>345678</TableCell>
                <TableCell>Marked as Safe</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Flag as Fraudulent
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Audit Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-07-01 15:30:00</TableCell>
                <TableCell>Account Suspended</TableCell>
                <TableCell>Admin1</TableCell>
                <TableCell>Account 123456 suspended due to high-risk activity</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-07-01 14:45:00</TableCell>
                <TableCell>AI Decision Overridden</TableCell>
                <TableCell>Admin2</TableCell>
                <TableCell>Account 234567 manually marked as safe</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

