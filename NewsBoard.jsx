import React, { useEffect, useState } from "react";
import NewsIteams from "./NewsIteams";

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    const fetchData = async () => {
        try {
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=519a591893eb400eb824fe393740d9af`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            let data = await response.json();
            setArticles(data.articles);
            console.log(data.articles);
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news, index) => {
                return (
                    <NewsIteams
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                );
            })}
        </div>
    );
};

export default NewsBoard;
