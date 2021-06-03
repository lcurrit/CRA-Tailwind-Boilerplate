/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';
import './posts.css';

const fetchURL = 'http://jsonplaceholder.typicode.com/posts/?_limit=10';

interface postProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const defaultPosts: postProps[] = [];

const Posts = () => {
  const [posts, setPosts] = useState<postProps[]>(defaultPosts);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const cancelToken = axios.CancelToken;
  const [cancelTokenSource] = useState<CancelTokenSource>(cancelToken.source());

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('User cancelled operation');
    }
  };

  useEffect(() => {
    axios
      .get<postProps[]>(fetchURL, {
        headers: {
          cancelToken: cancelTokenSource.token,
          'Content-Type': 'application/json',
        },
        timeout: 60000,
      })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const axioserror = axios.isCancel(ex)
          ? 'Request Cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource not found'
          : 'An unexpected error has occured';
        setError(axioserror);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div className="loading">
          <div className="my-4 text-2xl text-gray-500">Loading...</div>
          <button className="btn" type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      )}
      {posts.map((post) => (
        <div key={post.id} className="card mb-4 py-4 bg-gray-300">
          <h3 className="px-4 font-bold capitalize">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Posts;
