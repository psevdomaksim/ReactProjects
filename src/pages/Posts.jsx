import React, { useEffect, useState } from "react";
import MyModal from "../components/MyModal/MyModal";
import Loader from"react-loader-spinner"
import axios from 'axios';

function Posts() {
    
    const fetchPosts = async () =>{
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(posts.data)
     }
      useEffect(()=>{
        fetchPosts();
    
      },[])
    
    const [posts, setPosts] = useState(null);
    const [post, setPost] = useState({
        title: "",
        body: ""
    });


    const onChange = (event) => {


          if (event.target.id == "title") {
            setPost({ ...post, title: event.target.value });
        
          }
           else {
            setPost({ ...post, body: event.target.value });
        }
      };


  return (
    <div className="App">
      <div className="container">
          
          
      <div class="row">
      { posts && posts.map((post) => (
            <div class="post" key={post.id}>
              <h5>{post.title}</h5>
              <body>{post.body}</body>
            </div>
          ))}


         </div>



      </div>
    </div>
  );
}

export default Posts;
