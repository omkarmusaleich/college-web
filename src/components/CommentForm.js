
import {React,useRef} from 'react'

const CommentForm = (props) => {
    const commentRef=useRef();
    const{onAddComment}=props;

    const commentSubmitHandler=(event)=>{
        event.preventDefault();
        let comment=commentRef.current.value;
        if(comment.trim().length===0)
        {
            return;
        }
        onAddComment(comment);
        commentRef.current.value='';

    }

    return (
        <form className='my-5 border-b-2 border-gray-600 py-2' onSubmit={commentSubmitHandler}>
            <div>
                <textarea ref={commentRef}  className='border-gray-800 border w-full rounded h-40 bg-gradient-to-r from-gray-600  via-gray-700 to-gray-600 text-white  px-3 py-1 text-base sm:text-lg md:text-xl'></textarea>
            </div>
            <button className='px-2 py-1 bg-gradient-to-r from-green-500 to-purple-600 rounded text-sm sm:text-base hover:text-white'>Add comment </button>
        </form>
    )
}

export default CommentForm
