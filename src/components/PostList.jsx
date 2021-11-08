import React, { useEffect, useState } from "react";
import MyModal from "../components/MyModal/MyModal";
const PostList = (props) => {
  const [filter, setFilter] = useState(props.children);

  useEffect(() => {
    setFilter(props.children);
  }, [props.children]);


const [showModal,setShowModal] = useState(false);


  const getSearch = () => {
    if (filter) {
      return filter;
    }
    return props.children;
  };
  const postSearch = getSearch();

  const onChange = (event) => {
    setFilter(
      props.children.filter((post) => {
        return post.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };


  

  
  return (
    <>
      {(
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <textarea
                  onChange={onChange}
                  id="icon_prefix2"
                  class="materialize-textarea"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      )}
      
      
    <div className = "custom_container">
    
    
   

        { props.children &&
            postSearch.map((post) => (
             
            <div className="post" key={post.id}
            
            onClick={() =>
              <MyModal visible={showModal} setVisible={setShowModal} >
                  <h5>
                    {post.title} 
                      {" "}
                          <i
                            className="material-icons"
                            onClick={() => props.removePost(post.id)}
                          >
                            delete{" "}
                          </i>
                  </h5>
      
                        <div className="content">{post.body}</div>
              
             </MyModal>
              }
            >
              
              <h5>{post.title} 
              {" "}
                  <i
                    className="material-icons"
                    onClick={() => props.removePost(post.id)}
                  >
                    delete{" "}
                  </i>
                  </h5>

                <div className="content">{post.body}</div>
     
            </div>
        
          ))}
        
      </div>
      
    </>
  );
};

export default PostList;
