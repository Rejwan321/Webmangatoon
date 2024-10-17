import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/articles/${id}`);
        if (!response.ok) {
          throw new Error("Article not found");
        }
        const data = await response.json();
        setArticle(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="article">
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default Article;
