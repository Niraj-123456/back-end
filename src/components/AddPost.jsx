import React from "react";

function AddPost({ doAdd }) {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row justify-content-center">
        <div className="col">
          <a onClick={() => doAdd()} href="#" className="btn btn-primary">
            Create Post
          </a>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
