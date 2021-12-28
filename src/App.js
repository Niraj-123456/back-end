import React, { useState, useEffect } from "react";
import http from "./services/HttpServices";
import config from "./services/config";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import Pagination from "./common/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { paginate } from "./utils/paginate";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: results } = await http.get(config.apiURL);
        setPosts(results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  const pagination = () => {
    const pagedData = paginate(posts, currentPage, pageSize);
    return pagedData;
  };

  const handleAdd = async () => {
    const obj = { title: "abc", body: "This is body." };
    const { data: post } = await http.post(config.apiURL, obj);
    const results = [post, ...posts];
    setPosts(results);
    toast.success("Post created successfully");
  };

  const handleUpdate = async (post) => {
    const originalPost = posts;
    post.title = "Updated";
    const updatedResult = [...posts];
    const index = updatedResult.indexOf(post);
    updatedResult[index] = { ...post };
    setPosts(updatedResult);

    try {
      await http.put(config.apiURL + "/" + post.id, post);
    } catch (err) {
      alert("Something went wrong");
      setPosts(originalPost);
    }
  };

  const handleDelete = async (post) => {
    const deletedPost = posts.filter((p) => p.id != post.id);
    setPosts(deletedPost);
    toast.success(`Post with id ${post.id} deleted successfully`);

    try {
      await http.delete(config.apiURL + "/" + post.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.info("Post has already been deleted");
      setPosts(posts);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const data = pagination();

  return (
    <div className="App">
      <ToastContainer />
      <AddPost doAdd={handleAdd} />
      <Posts data={data} doUpdate={handleUpdate} doDelete={handleDelete} />
      <Pagination
        count={posts.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
