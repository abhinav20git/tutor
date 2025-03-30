"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can you help me with my homework in less than 24 hours?",
      answer: "Our name 24HourAnswers means you can submit work 24 hours a day – it doesn’t mean we can help you master what you need to know in 24 hours. If you make arrangements in advance, and if you are a very fast learner, then yes, we may be able to help you achieve your goals in 24 hours. Remember, high-quality, customized help tailored around individual student needs takes time.",
    },
    {
      question: "Can you help me with my exam/quiz/test?",
      answer: "Yes, we offer assistance with exams, quizzes, and tests. Please reach out with details.",
    },
    {
      question: "How much will it cost?",
      answer: "The pricing depends on the complexity and deadline of your task. Contact us for a quote.",
    },
    {
      question: "What kind of payments do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-2">
          <span className="text-purple-500">Frequently asked Question's</span>
        </h2>
        
        

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-300 shadow-sm">
              <CardHeader
                onClick={() => toggleAccordion(index)}
                className="cursor-pointer flex justify-between items-center hover:bg-gray-100 transition"
              >
                <CardTitle className="text-lg font-semibold">
                  {faq.question}
                </CardTitle>
                {openIndex === index ? (
                  <Minus className="text-gray-600" />
                ) : (
                  <Plus className="text-gray-600" />
                )}
              </CardHeader>
              {openIndex === index && (
                <CardContent className="p-4 text-gray-700 bg-white">
                  {faq.answer}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
