import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
        setError(null);
      })
      .catch(() => {
        setError('Error fetching data');
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Post Title:</h3>
      <p>{data?.title}</p>
      <h4>Post Body:</h4>
      <p>{data?.body}</p>
    </div>
  );
}

export default DataFetcher;
