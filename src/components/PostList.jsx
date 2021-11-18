import React, { useEffect, useState } from "react";
import MyModal from "../components/MyModal/MyModal";
const PostList = (props) => {
  const [filter, setFilter] = useState(props.children);

  useEffect(() => {
    setFilter(props.children);
  }, [props.children]);

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

  const [post, setPost] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onShowPost = (id) => {
    setPost(props.children.filter((post) => post.id === id));
    setShowModal(true);
  };
  console.log(post[0]);
  return (
    <>
      <MyModal visible={showModal} setVisible={setShowModal}>
          {post &&
          <div className="postModal">
              <div className="custom_container">
              <h5>{post[0].title}</h5>
              <div className="content">{post[0].body}</div>
            </div>
         </div>
          }
         
        
      </MyModal>
      {
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <textarea
                  onChange={onChange}
                  id="icon_prefix2"
                  className="materialize-textarea">
                  </textarea>
              </div>
            </div>
          </form>
        </div>
      }
      <div className="content">
        {props.children &&
          postSearch.map((post) => (
            <div
              className="post"
              key={post.id}
              onClick={() => onShowPost(post.id)}
            >
              <h5>
                {post.title}{" "}
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
