
import React, { useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="news-list">
       {selectedArticle && <NewsItem article={selectedArticle} />}
      {news.map((article) => (
        <div key={article.title} onClick={() => handleArticleClick(article)}>
          <img src={article.urlToImage} alt='' width={200} height={100} />
          <h2>{article.title}</h2>
        </div>
      ))}
      
    </div>
  );
};

export default NewsList;
