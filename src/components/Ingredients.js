
import React from 'react'

const Ingredients = (props) => {
    const { text } = props;
    return (
        <div className=' p-3 sm:px-10 bg-gradient-to-r from-gray-400 to-gray-100 text-gray-800 hover:text-white hover:bg-black r'>-  {text}</div>
    )
}

export default Ingredients
