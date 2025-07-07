'use client';

import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Card } from './card';

const quotesData = [
  { topic: 'success', text: "Success is not final; failure is not fatal: It is the courage to continue that counts." },
  { topic: 'success', text: "Success usually comes to those who are too busy to be looking for it." },
  { topic: 'success', text: "Don't be afraid to give up the good to go for the great." },
  { topic: 'motivation', text: "Your limitation—it's only your imagination." },
  { topic: 'motivation', text: "Push yourself, because no one else is going to do it for you." },
  { topic: 'motivation', text: "Great things never come from comfort zones." },
  { topic: 'life', text: "In the end, we only regret the chances we didn't take." },
  { topic: 'life', text: "Life is 10% what happens to you and 90% how you react to it." },
  { topic: 'life', text: "The purpose of our lives is to be happy." },
];

export default function QuoteForm() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = () => {
    const filtered = quotesData
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.text);

    setResults(filtered.length ? filtered : ["No quotes found for this topic."]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-400 dark:text-white">
          Motivational Quote Generator
        </h1>
        <div className="flex w-full max-w-md gap-2">
          <Input
  placeholder="Enter a topic (e.g., success, motivation, life)"
  value={topic}
  onChange={(e) => setTopic(e.target.value)}
  className="flex-1 bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-blue-400"
/>
          <Button 
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Get Quotes
          </Button>
        </div>
      </div>

      {results.length > 0 && (
        <div className="space-y-6 text-center">
          {results.map((quote, index) => (
            <Card 
              key={index} 
              className="p-6 bg-blue-100 dark:bg-blue-900 shadow-lg"
            >
              <p className="text-xl text-gray-800 dark:text-gray-100 font-medium leading-relaxed">
                {quote}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}