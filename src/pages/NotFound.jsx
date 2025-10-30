import React from 'react'

const NotFound = () => {
    return (
        <div class="flex flex-col justify-center items-center h-screen w-full bg-gray-50 relative overflow-hidden">
            {/* Large faded 404 in background */}
            <p class="text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[23rem] text-gray-200 select-none">
                404
            </p>

            {/* Foreground content */}
            <div class="z-10 flex flex-col justify-center items-center text-center gap-3 sm:gap-4 absolute px-4">
                <p class="text-blue-400 text-lg sm:text-xl font-semibold">404</p>
                <p class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 font-semibold">Page Not Found</p>
                <p class="text-gray-700 text-base sm:text-lg md:text-2xl max-w-md sm:max-w-xl">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <button class="text-white bg-blue-600 py-2 px-4 mt-4 rounded-md font-semibold hover:bg-blue-700 transition">
                    Go back to home
                </button>
            </div>
        </div>
    )
}

export default NotFound
