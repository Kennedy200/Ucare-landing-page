"use client"

import { useEffect } from "react"

export default function CustomAlert({ isOpen, message, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 5000)

      // Clean up timer
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm transition-opacity">
      <div
        className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 animate-in slide-in-from-top"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-sky-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
          <p className="text-gray-600 text-center mb-6">{message}</p>

          <button
            onClick={onClose}
            className="bg-sky-400 hover:bg-sky-500 text-gray-900 px-6 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-md hover:shadow-lg border-2 border-sky-500"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}