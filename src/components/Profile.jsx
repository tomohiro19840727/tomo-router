import React from 'react'

function Profile() {
  return (
    <div className="bg-green-100 py-6 sm:py-8 lg:py-12">
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      {/* <!-- text - start --> */}
      <div className="mb-10 md:mb-16">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">プロフィール</h2>
  
        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">僕の自己紹介だよ、これから有名になるからサインが欲しいなら今のうちだからね！！</p>
      </div>
      {/* <!-- text - end --> */}
  
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        {/* <!-- article - start --> */}
        <a href="#" className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
          <img src="./img/17306487455166.jpg" loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
  
          <div className="relative p-4 mt-auto">
            <span className="block text-gray-200 text-sm">July 19, 2021</span>
            <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">New trends in Tech</h2>
  
            <span className="text-indigo-300 font-semibold">Read more</span>
          </div>
        </a>
        {/* <!-- article - end --> */}
  
        {/* <!-- article - start --> */}
        <a href="#" className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
          <img src="./img/17300839069083.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
  
          <div className="relative p-4 mt-auto">
            <span className="block text-gray-200 text-sm">April 07, 2021</span>
            <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">Working with legacy stacks</h2>
  
            <span className="text-indigo-300 font-semibold">Read more</span>
          </div>
        </a>
        {/* <!-- article - end --> */}
  
        {/* <!-- article - start --> */}
        <a href="#" className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
          <img src="./img/IMG_6309.JPG" loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
  
          <div className="relative p-4 mt-auto">
            <span className="block text-gray-200 text-sm">March 15, 2021</span>
            <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">10 best smartphones for devs</h2>
  
            <span className="text-indigo-300 font-semibold">Read more</span>
          </div>
        </a>
        {/* <!-- article - end --> */}
  
        {/* <!-- article - start --> */}
        <a href="#" className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
          <img src="./img/IMG_6316 3.JPG" loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  
          <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
  
          <div className="relative p-4 mt-auto">
            <span className="block text-gray-200 text-sm">January 27, 2021</span>
            <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">8 High performance Notebooks</h2>
  
            <span className="text-indigo-300 font-semibold">Read more</span>
          </div>
        </a>
        {/* <!-- article - end --> */}
      </div>
    </div>
  </div>
  )
}

export default Profile
