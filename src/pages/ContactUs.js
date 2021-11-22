import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <h1 className="text-center text-2xl md:text-6xl md:my-10 mb-3 animate-bounce ">Contact Us</h1>
            <div className='flex-col justify-center items-center p-5 w-4/5 sm:w-2/3 md:w-1/3 mx-auto bg-gray-400 rounded-xl'>
                <div className='my-3 bg-white px-5 rounded-md bg-gradient-to-r from-yellow-400 via-purple-500 to-green-400 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className='pr-5 text-lg font-semibold font-body'>Email</span>
                    <span className='font-mono bg-gradient-to-r from-purple-400  to-green-400  px-5 rounded-md'>omkarmusaleich@gmail.com</span>
                </div>
                <div className='my-3 bg-white px-5 rounded-md bg-gradient-to-r from-yellow-400 via-purple-500 to-green-400 '>

                    <a href='https://www.facebook.com/' target='_blank' className='cursor-pointer hover:text-white text-lg font-body font-semibold '><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>FaceBook </a>
                </div>
                <div className='my-3 bg-white px-5 rounded-md bg-gradient-to-r from-yellow-400 via-purple-500 to-green-400 '>

                    <a href='https://www.instagram.com/omkar_9101/' target='_blank' className='cursor-pointer hover:text-white text-lg font-body font-semibold'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg> Instagram </a>
                </div>
            </div>
            {/* <div className='my-5 w-4/5 sm:w-1/2 md:w-1/3 mx-auto'>
                <h2 className='text-center text-2xl'>Quary Section</h2>
                <textarea placeholder='write some quary' className='border mx-auto'></textarea>
            </div> */}
        </div>
    )
}

export default ContactUs;
