import React, { useEffect, useState } from "react";

const UserList = (props) => {
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
  const userSearch = getSearch();

  const onChange = (event) => {
    setFilter(
      props.children.filter((user) => {
        return user.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  
  return (
    <>
      {props.search && (
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

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {props.children &&
            userSearch.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  {" "}
                  <i
                    className="material-icons"
                    onClick={() => props.removeUser(user.id)}
                  >
                    delete{" "}
                  </i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
