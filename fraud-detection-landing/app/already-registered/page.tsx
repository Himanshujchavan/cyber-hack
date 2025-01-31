"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function AlreadyRegistered() {
  const [userId, setUserId] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    setUserId(storedUserId)
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem("userId")
    router.push("/signin")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Already Registered</CardTitle>
          <CardDescription>You are already signed in</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            You are currently signed in as:
            <br />
            <strong>{userId}</strong>
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSignOut} className="w-full">
            Sign Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

