'use client';

import { useState } from "react";

const quotesData = [
  { topic: "inspiration", quote: "Believe in yourself and all that you are." },
  { topic: "inspiration", quote: "You are capable of amazing things." },
  { topic: "inspiration", quote: "Push yourself, because no one else will." },
  { topic: "success", quote: "Success is not final, failure is not fatal." },
  { topic: "success", quote: "Don’t wait for opportunity. Create it." },
  { topic: "success", quote: "Dream big and dare to fail." },
];

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = quotesData
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map((q) => q.quote);
    setQuotes(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Quote Generator</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter a topic (e.g. inspiration or success)"
          className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Get Quotes
        </button>
      </form>

      <div className="grid gap-4 w-full max-w-md">
        {quotes.length > 0 ? (
          quotes.map((quote, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
              <p className="text-gray-700 italic">"{quote}"</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No quotes to show. Try entering a topic.</p>
        )}
      </div>
    </div>
  );
}
