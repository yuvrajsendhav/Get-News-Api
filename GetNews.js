//import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const GetNews = () => {
    const [news, setNews] = useState([]);
    const fetchNews = () => {


        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=12e3c5ab270a44edb381ed4b424f15fa`)
            .then((response) => {
                console.log(response)
                setNews(response.data.articles)
            });
    }
    return (
        <>
            <div className='container my 3' >
                <div className='row'>
                    <div className='col-4'>
                        <br></br>
                        <button className='btn btn-primary' onClick={fetchNews}>GET NEWS</button>
                        <br></br><br></br>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row'>
                    {
                        news.map((value) => {
                            return (
                                <div className='col-4'>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={value.urlToImage} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <a href={value.url} className="btn btn-primary">Watch</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};
export default GetNews;