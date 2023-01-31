import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../firebase';
import "./Blog.css";

function Blog({ isAuth }) {
   const [title, setTitle] = useState("");
   const [postText, setPostText] = useState("");
   const [singleImage, setSingleImage ] = useState("");

   const navigate = useNavigate();

   const handleImage = (e) => { 
    e.preventDefault();
    let pickedFile;
    
    if(e.target.files && e.target.files.length > 0 ) {
      pickedFile = e.target.files[0];
    setSingleImage(pickedFile);
   }  
 }

   const createPost = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${singleImage.name}` );
    uploadBytes(imageRef, singleImage).then((res) => {
      alert("seikousimasita");
      getDownloadURL(imageRef).then((imageUrl) => {
      addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      imgUrl: imageUrl,
    });
   });
  });

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
       <input type="file" name="" accept="png, .jpeg, .jpg, .HEIC" onChange={handleImage} />
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}

export default Blog
