import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import "./Setblog.css";

function Setblog({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const [count, setCount] = useState(0);

 useEffect(() => {
  const getPosts = async () => {
    const data = await getDocs(collection(db, "posts"));
    // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  }
  getPosts();
 },[]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/setblog";
  }

  const handleClick = () => {
    setCount(count => count + 1)
  }

  return (
    
    <div className='homePage'>
      {postList.map((post) => {
        return (
          <div className='postContents' key={post.id}>
           <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>

         <div className='postTextContainer'>{post.postsText}</div>
         <div className='nameAndDeleteButton'>
          <h3>@{post.author.username}</h3>
          <h4 className='text-3xl'>{count}</h4>
          <button className='text-2xl' onClick={() => handleClick()}>カウントする</button>
          {isAuth &&(
            <button onClick={() => handleDelete(post.id)}>削除</button>
          )}
         </div>
        </div>
        );
      })}
    </div>
    
  )
}

export default Setblog