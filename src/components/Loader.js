import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-full fixed top-0 left-0 backdrop-filter backdrop-blur-sm'>
      <div class="flex justify-center items-center my-3 z-20">
        <div class="animate-spin rounded-full md:h-32 md:w-32 h-24 w-24 md:border-b-8 md:border-t-8 md:border-l-4 md:border-r-4 border-dotted border-t-2 border-b-2 border-gray-700"></div>
      </div>
    </div>
  )
}

export default Loader
