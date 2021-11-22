import { foodItems,women,men,child } from './fooddata';
import { useDispatch } from 'react-redux';
import { cartAction } from '../store/cart-slice';
import { React, useState, useEffect, useCallback } from 'react'
import { useParams } from "react-router";
import Ingredients from './Ingredients';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { BeatLoader} from 'react-spinners';

const DetailItem = () => {
    const [isIngredient, setIsIngredient] = useState(false)
    const [isComment, setIsComment] = useState(false)
    const [Comment, setComment] = useState([]);
    const [isLoding, setIsLoding] = useState(false);
    const dispatch = useDispatch();

    const params = useParams()
    const itemid = params.itemId;

    let item;
    console.log(itemid);
    if(itemid>30)
    {
        item =child[Number(itemid)-31];
    }
    else if(itemid>20)
    {
        item =men[Number(itemid)-21];
    }
    else if(itemid>10)
    {
        item =women[Number(itemid)-11];
    }
    else{

        item = foodItems[Number(itemid)];
    }
    console.log(item);
    
    const {src,name,discription,id,prise,ingredients} = item;
    
    

    const addToCartHandler = () => {
        dispatch(cartAction.addToCart({ src, name, discription, id, prise }));
    }

    const getComment = useCallback(async () => {
        const response = await fetch(`https://cloth-mart-comment-default-rtdb.firebaseio.com/comment/${id}.json`);
        if (!response.ok) {
            throw new Error('comment can not be lode from server');
        }
        const data = await response.json();
        let carray = [];
        if (data) {
            for (let key in data) {
                carray.unshift({ commentText: data[key].commentText })
            }
        }
        setComment(carray);

    }, [])

    useEffect(() => {
        getComment();
    }, [getComment])


    const commentHandler = async (comment) => {
        setIsLoding(true);
        // https://food-website-with-tailwind-css-default-rtdb.firebaseio.com
        const response = await fetch(`https://cloth-mart-comment-default-rtdb.firebaseio.com/comment/${id}.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ commentText: comment, id: id }),
        })
        if (!response.ok) {
            throw new Error('comment can not be fetch')
        }
        setIsLoding(false);
        getComment();

    }

    return (
        <>
            <div className='md:flex justify-center my-5 border-2'>
                
                <img src='https://www.w3schools.com/howto/img_avatar.png' className='md:w-4/12 md:h-96 px-10 py-5' alt={name}/>
                <div className='flex-col px-10 py-5 border md:w-1/2 bg-gray-200 align-middle justify-center '>
                    <div className='text-center font-body text-yellow-700 my-5 text-base sm:text-lg md:text-xl'>{name}</div>
                    <div className='text-center font-body text-base sm:text-lg md:text-xl'>{discription}</div>
                    <div className='text-center text-xl text-yellow-700 font-semibold my-5'>prise {prise}$</div>
                    <div className='mx-auto w-24 sm:w-36 md:w-44'>
                        <button className='px-5 my-2 text-base sm:text-xl md:text-2xl  bg-gradient-to-r from-yellow-400 to-red-400 rounded hover:text-white' onClick={addToCartHandler}>Add to cart</button>
                    </div>
                </div>

            </div>
            
            <div className='w-4/5 mx-auto text-center sm:w-2/3 md:w-2/5 my-2'>
                <h3 onClick={() => setIsComment((state) => !state)} className='text-2xl font-semibold text-green-700 py-3 cursor-pointer'>comment</h3>
                {isComment && <CommentForm onAddComment={commentHandler} />}
                {isLoding && <div className='h-20 my-5'><BeatLoader size={40} color='blue' loading/></div>}
                {isComment && !isLoding && Comment.length === 0 && <h1>NO comment yet</h1>}
                {isComment && !isLoding && Comment.length !== 0 && Comment.map((it => (<CommentItem CommentText={it.commentText} key={Math.random()} />)))}

            </div>
            <div className='border-gray-600  w-4/5 border-2 rounded-2xl overflow-hidden md:w-2/5 mx-auto my-10 '>
                <h2 className='text-center text-sm sm:text-xl px-3 py-3 font-body md:text-2xl cursor-pointer' onClick={() => setIsIngredient((state) => !state)}>----------Product Detail----------</h2>
                {ingredients.length !== 0 && isIngredient && <div>
                    {ingredients.map(ing => (<Ingredients text={ing} key={Math.random()} />))}
                </div>}
                {ingredients.length === 0 && isIngredient && <h2 className='text-sm md:text-xl font-mono text-center p-2 text-red-600 '>Product Detail ...we cant show</h2>}
            </div>
        </>
    )
}

export default DetailItem;
