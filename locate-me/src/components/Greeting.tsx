import React from 'react'
import { Typewriter } from "react-simple-typewriter";

export const Greeting = () => {
  return (
    <div className="text-white text-center">
        <div className="text-4xl font-bold h-10">
          <Typewriter words = {["Hello", "नमस्ते", "こんにちは", "Hello"]} />
        </div>
    </div>
  )
}
