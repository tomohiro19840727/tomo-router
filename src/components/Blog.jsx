import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import "./Blog.css";

function Blog({ isAuth }) {
   const [title, setTitle] = useState("");
   const [postText, setPostText] = useState("")

   const navigate = useNavigate();

   const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })

    navigate("/setblog")
   };

  //  useEffect(() => {
  //   if(!isAuth) {
  //     navigate("/login");
  //   }
  //  },[]);

  return (
    <div className='createPostPage text-3xl bg-blue-100'>
      <div className='postContainer'>
       <h1>ブログを投稿する</h1>
       <div className='inputPost'>
        <div>タイトル</div>
        <input type="text" placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)} />
       </div>
       <div className='inputPost'>
        <div>投稿</div>
        <textarea placeholder='ブログ内容を記入' onChange={(e) => setPostText(e.target.value)}></textarea>
       </div>
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}

export default Blog
