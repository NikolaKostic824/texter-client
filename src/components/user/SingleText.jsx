import React, { useState, useLayoutEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

//Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//Components
import SingleTextItem from "./SingleTextItem";
import TextCategoriesItem from "./TextCategoriesItem";

export default function SingleText() {

  const ref = useRef();
  // Get ID from URL
  const params = useParams();

  // Single Text / Article
  const [article, setArticle] = useState(null);
  const [singleTextHeight,setSingleTextHeight] = useState(0);
  // Articles By Author
  const [articles, setArticles] = useState([]);
  
  const URL = "http://localhost:5000/text";

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  //Initial value for text list and Single Text Item
  useLayoutEffect(() => {
    let mounted = true;
    let meta = document.querySelector('meta[name="og:title"]')
    axios.get(URL + "/" + params.id).then((response) => {
      setArticle(response.data);
      document.querySelector('meta[name="og:title"]').setAttribute("content",response.data.title)
    })
    axios.get(URL + "/swipe").then((response) => {
      const res = response.data;
      setArticles(res)
    });
    return () => (mounted = false);
  }, []);
  //Watcher to changing Params ID (new text / article)
  useLayoutEffect(() => {
    setArticle(null)
    axios.get(URL + "/" + params.id).then((response) => {
      setArticle(response.data);
      console.log(response.data)
    });
  }, [params.id]);

  return (
    <div>
      {article === null ? (
        <h1 className="text-loader">X</h1>
      ) : (
        <>
          <div className="single-text-holder" ref={ref} >
            <SingleTextItem article={article} />
          </div>
          <div className="single-text-swiper">
            <div className="single-text-swiper-holder">


            <Swiper
              breakpoints={{
                // when window width is >= 640px
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                550: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1600: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
                1900: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                }
              }
            }
            >

            <button onClick={ () => console.log(a)}>das</button>

              {articles &&
                articles.map((article) => (
                  <SwiperSlide key={article._id} onClick={()=>topFunction()}>
                    <Link to={`/${article._id}` }>
                      <TextCategoriesItem key={article._id} article={article} />
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          </div>
        </>
      )}
    </div>
  );
}
