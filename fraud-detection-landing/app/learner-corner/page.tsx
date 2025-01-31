"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function LearnerCorner() {
  const [quizScore, setQuizScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const fraudTypes = [
    {
      title: "Identity Theft",
      content:
        "Identity theft occurs when someone uses another person's personal information without their permission to commit fraud or other crimes.",
    },
    {
      title: "Phishing",
      content:
        "Phishing is the fraudulent attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising as a trustworthy entity in an electronic communication.",
    },
    {
      title: "Card Skimming",
      content:
        "Card skimming is a type of credit card theft where crooks use a small device to steal credit card information in an otherwise legitimate credit or debit card transaction.",
    },
    {
      title: "Money Mules",
      content:
        "A money mule is a person who transfers illegally acquired money on behalf of others, usually through their bank account.",
    },
  ]

  const preventionTips = [
    "Keep your personal information private and secure.",
    "Use strong, unique passwords for all your accounts.",
    "Be cautious of unsolicited emails, phone calls, or text messages asking for personal information.",
    "Regularly monitor your bank statements and credit reports.",
    "Use secure, updated software and anti-virus protection on your devices.",
  ]

  const quizQuestions = [
    {
      question: "What is phishing?",
      options: [
        "A type of fish",
        "A fraudulent attempt to obtain sensitive information",
        "A secure way to send emails",
        "A new social media platform",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which of the following is NOT a good way to protect yourself from fraud?",
      options: [
        "Using the same password for all accounts",
        "Regularly monitoring your bank statements",
        "Using anti-virus software",
        "Being cautious of unsolicited messages",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is a money mule?",
      options: [
        "A type of currency",
        "A person who transfers illegally acquired money",
        "A secure banking method",
        "A financial advisor",
      ],
      correctAnswer: 1,
    },
  ]

  const handleQuizSubmit = (selectedAnswer: number) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setQuizScore(quizScore + 1)
    }
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      alert(`Quiz completed! Your score: ${quizScore + 1}/${quizQuestions.length}`)
      setCurrentQuestion(0)
      setQuizScore(0)
    }
  }

  return (
    <div className="space-y-8 p-8 bg-background">
      <h1 className="text-3xl font-bold text-primary">Learner Corner</h1>

      <Tabs defaultValue="types" className="w-full">
        <TabsList>
          <TabsTrigger value="types">Fraud Types</TabsTrigger>
          <TabsTrigger value="prevention">Prevention Tips</TabsTrigger>
          <TabsTrigger value="ai">Our AI System</TabsTrigger>
          <TabsTrigger value="quiz">Knowledge Quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="types">
          <Card>
            <CardHeader>
              <CardTitle>Types of Financial Fraud</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {fraudTypes.map((type, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{type.title}</AccordionTrigger>
                    <AccordionContent>{type.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="prevention">
          <Card>
            <CardHeader>
              <CardTitle>Fraud Prevention Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {preventionTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ai">
          <Card>
            <CardHeader>
              <CardTitle>How Our AI Detects Fraud</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our AI-powered fraud detection system uses advanced machine learning algorithms to analyze patterns in
                transaction data, user behavior, and other relevant factors. Here's a simplified overview of how it
                works:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mt-4">
                <li>
                  Data Collection: We gather data from various sources, including transaction history, login patterns,
                  and device information.
                </li>
                <li>Feature Extraction: Our AI identifies key features that are indicative of fraudulent activity.</li>
                <li>
                  Pattern Recognition: The system learns to recognize patterns associated with both legitimate and
                  fraudulent transactions.
                </li>
                <li>
                  Real-time Analysis: As new transactions occur, the AI analyzes them in real-time against known
                  patterns.
                </li>
                <li>Risk Scoring: Each transaction is assigned a risk score based on its characteristics.</li>
                <li>Alert Generation: High-risk transactions trigger alerts for further investigation.</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="quiz">
          <Card>
            <CardHeader>
              <CardTitle>Test Your Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Question {currentQuestion + 1}</h3>
                <p>{quizQuestions[currentQuestion].question}</p>
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuizSubmit(index)}
                    variant="outline"
                    className="w-full text-left justify-start"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

