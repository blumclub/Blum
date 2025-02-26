import React from 'react'

const SkelletonCard = () => {
  return (
    <div className="relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white min-w-[280px] mx-2 animate-pulse">
        <div className="relative h-48 w-full bg-gray-300"></div>
        <div className="p-4">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
  )
}

export default SkelletonCard