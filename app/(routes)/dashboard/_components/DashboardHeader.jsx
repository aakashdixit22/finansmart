import Image from 'next/image'
import React from 'react'

function DashboardHeader() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
         <div className="absolute inset-0 bg-blue-400 opacity-30 blur-sm rounded-full"></div>
         <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25} className="relative" />
      </div>
      <span className="text-blue-800 font-bold text-xl">
        Finan<span className="text-blue-600">Smart</span>
      </span>
    </div>
  )
}

export default DashboardHeader