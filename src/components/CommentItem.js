import React from 'react'

const CommentItem = (props) => {

    return (
        <div className='m-1 border border-black text-white font-body rounded-xl pl-10 py-1 text-left bg-gradient-to-r from-gray-900 to-gray-500'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 text-white inline" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
      </svg>
            {props.CommentText}
        </div>
    )
}

export default CommentItem
