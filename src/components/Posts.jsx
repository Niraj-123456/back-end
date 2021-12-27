import React from "react";

function Posts({ posts, doUpdate, doDelete }) {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Body</th>
                <th className="px-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <a
                      onClick={() => doUpdate(post)}
                      href="#"
                      className="btn btn-warning btn-sm mx-1"
                    >
                      Update
                    </a>
                    <a
                      onClick={() => doDelete(post)}
                      href="#"
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Posts;
