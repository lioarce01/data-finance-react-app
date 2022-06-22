import React from "react"
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            libero sint? Voluptatum odit velit eum maiores maxime reprehenderit.
            Assumenda doloremque itaque necessitatibus quisquam impedit dolorum
            explicabo vel aperiam quibusdam aliquid.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:text-[#00ffae] duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
