import React, { useEffect, useRef, useState } from "react";
import MyModal from "../components/MyModal/MyModal";
import PostList from "../components/PostList";
import Loader from"react-loader-spinner"
import axios from 'axios';
import ReactPaginate from "react-paginate";
function Posts() {
const trigger = useRef(null);    
const observer = useRef(null);
const [loadData, setLoadData] = useState(true);            
const[page,setPage] = useState(1);
const limit = 10;
const pageCount = 100/limit;

const pageChange = (page)=>{
  setPage(page.selected+1)
}
    const fetchPosts = async () =>{ 
      setLoadData(true);
        const postFecthed = await axios.get("https://jsonplaceholder.typicode.com/posts",{
          params:{
            _limit:limit,
            _page: page,
          }
        });
        setPosts([...posts,...postFecthed.data])
        setLoadData(false);
     }
    

     useEffect(()=>{
      fetchPosts();
    },[page])
      useEffect(()=>{
        if(loadData) return;
        if(observer.current) observer.current.disconnect();
        if(page>10) return;
          const callback = function(entries, observer){
            if (entries[0].isIntersecting){
              setPage(page+1)
            }
          }
          observer.current = new IntersectionObserver(callback);
          observer.current.observe(trigger.current)
      },[loadData])
    const [posts, setPosts] = useState([]);
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


    const addPost = () => {
      setPosts([...posts, post]);
      clear();
    };
  
    const clear = () => {
      setPost({ title: "", body: "" });
    };

    const [showModal,setShowModal] = useState(false);

    const deletePost = (id) => {
      const confirm = window.confirm("Ты действительно хочешь удалить?");
      if (confirm) setPosts(posts.filter((post) => post.id !== id));
    };


  return (
    <div className="App">
      <div className="container">
      <MyModal visible={showModal} setVisible={setShowModal}>
        {
          <>
      
          <div className="input-field col s6">
            <i className="material-icons prefix">drag_handle</i>
            <input
              id="title"
              type="text"
              class="validate"
              value={post.title}
              placeholder="Enter Title"
              onChange={onChange}
            />
           
          </div>
     
          <div className="input-field col s6">
            
          

            <i className="material-icons prefix">format_align_left</i>
            <input
              id="phone"
              type="tel"
              value={post.body}
              class="validate"
              placeholder="Enter Body"
              onChange={onChange}
            />

             <a
              className="waves-effect waves-light btn m-1"
              onClick={() => addPost()}
            >
              Add
            </a>
            <a
              className="waves-effect waves-light right btn m-1"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </a>
          </div>
        </>
        }
        </MyModal>


        <div className="row m-1">
          <div className="col s4">
            <a
              class="waves-effect waves-light btn"
              onClick={() => setShowModal(true)}
            >
              Add post
            </a>
          </div>

          <div className="col s8">
           

          </div>
        </div>
          
      <div class="row">
      <PostList search removePost={deletePost}>
          {posts}
        </PostList>
             
         </div>
         <div ref={trigger} className="trigger"></div>
       {/*  < ReactPaginate
              className="pagination unselectable"
              nextClassName="material-icons"
              previousClassname="material-icons"
              activeClassName="active"
              breakLabel="..."
              nextLabel=">"
              onPageChange={pageChange}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
      /> */}


      </div>
    </div>
  );
}

export default Posts;
