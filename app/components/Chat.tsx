"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-xl pb-36 mt-6 mx-auto stretch p-4">
      <h1 className="text-md sm:text-2xl font-bold  mb-8">
        AI-Chat with{" "}
        <span className="bg-black px-2 text-md rounded-lg text-white">
          Replicate
        </span>{" "}
        by Ahmad Bilal
      </h1>
      <div className="min-w-80 h-1 bg-black -mt-5"></div>
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap mb-2 mt-8 text-lg">
          {m.role === "user" ? (
            <span className="font-bold text-md bg-black p-1 rounded text-white mr-3">
              User 👨:
            </span>
          ) : (
            <span className="font-bold text-md bg-green-700 p-1 rounded text-white mr-3">
              Replicate 🤖:
            </span>
          )}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 sm:w-full max-w-md ml-4 sm:ml-0 p-2 mb-12 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Enter your message"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
