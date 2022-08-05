import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
//Components
import TextCategoriesItem from "./TextCategoriesItem";

export default function TextCategories() {
  //List of all articles/texts
  const [articles, setArticles] = useState([]);
  //State for loader
  const [loading, setLoading] = useState(true);

  const URL = "http://localhost:5000/text";
  //Initial value for text list
  useLayoutEffect(() => {
    let mounted = true;
    axios.get(URL).then((response) => {
      const res = response.data.filter((text) => text.approved !== 0);
      setArticles(res);
      setLoading(false);
    });
    return () => (mounted = false);
  }, []);
  return (
    <div>
      {loading === true ? (
        <h1 className="text-loader">X</h1>
      ) : (
        <div className="text_categories-wrapper">
          <div className="text_categories">
            <h1 className="user-page_header">
              <Link to="/politika">Politika </Link>
            </h1>

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
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 2.7,
                  spaceBetween: 10,
                }, 
                1600: {
                  slidesPerView: 3.7,
                  spaceBetween: 10,
                },
                1900: {
                  slidesPerView: 3.7,
                  spaceBetween: 30,
                },
              }}
            >
              {articles &&
                articles
                  .filter((text) => text.theme === "Politika")
                  .reverse()
                  .slice(0, 6)
                  .map((article) => (
                    <SwiperSlide key={article._id}>
                      <Link to={`/${article._id}`}>
                        <TextCategoriesItem
                          key={article._id}
                          article={article}
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
          <div className="text_categories">
            <h1 className="user-page_header">
              <Link to="/sport">Sport</Link>
            </h1>

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
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 2.7,
                  spaceBetween: 10,
                }, 
                1600: {
                  slidesPerView: 3.7,
                  spaceBetween: 10,
                },
                1900: {
                  slidesPerView: 3.7,
                  spaceBetween: 30,
                },
              }}
            >
              {articles &&
                articles
                  .filter((text) => text.theme === "Sport")
                  .reverse()
                  .slice(0, 6)
                  .map((article) => (
                    <SwiperSlide key={article._id}>
                      <Link to={`/${article._id}`}>
                        <TextCategoriesItem
                          key={article._id}
                          article={article}
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
          <div className="text_categories">
            <h1 className="user-page_header">
              <Link to="/priče">Priče</Link>
            </h1>

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
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 2.7,
                  spaceBetween: 10,
                }, 
                1600: {
                  slidesPerView: 3.7,
                  spaceBetween: 10,
                },
                1900: {
                  slidesPerView: 3.7,
                  spaceBetween: 30,
                },
              }}
            >
              {articles &&
                articles
                  .filter((text) => text.theme === "Priče")
                  .reverse()
                  .slice(0, 6)
                  .map((article) => (
                    <SwiperSlide key={article._id}>
                      <Link to={`/${article._id}`}>
                        <TextCategoriesItem
                          key={article._id}
                          article={article}
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
          <div className="text_categories">
            <h1 className="user-page_header">
              <Link to="/svastara">Svaštara</Link>
            </h1>
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
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 2.7,
                  spaceBetween: 10,
                }, 
                1600: {
                  slidesPerView: 3.7,
                  spaceBetween: 10,
                },
                1900: {
                  slidesPerView: 3.7,
                  spaceBetween: 30,
                },
              }}
            >
              {articles &&
                articles
                  .filter((text) => text.theme === "Svaštara")
                  .reverse()
                  .slice(0, 6)
                  .map((article) => (
                    <SwiperSlide key={article._id}>
                      <Link to={`/${article._id}`}>
                        <TextCategoriesItem
                          key={article._id}
                          article={article}
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
          <div className="text_categories">
            <h1 className="user-page_header">
              <Link to="/kultura">Kultura</Link>
            </h1>

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
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 2.7,
                  spaceBetween: 10,
                }, 
                1600: {
                  slidesPerView: 3.7,
                  spaceBetween: 10,
                },
                1900: {
                  slidesPerView: 3.7,
                  spaceBetween: 30,
                },
              }}
            >
              {articles &&
                articles
                  .filter((text) => text.theme === "Kultura")
                  .reverse()
                  .slice(0, 6)
                  .map((article) => (
                    <SwiperSlide key={article._id}>
                      <Link to={`/${article._id}`}>
                        <TextCategoriesItem
                          key={article._id}
                          article={article}
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
          <div className="text_categories reader-writer">
            <h1 className="user-page_header">
              <Link to="/čitaoci_pisci">Čitaoci pisci</Link>
            </h1>

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
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 2.7,
                  spaceBetween: 10,
                }, 
                1600: {
                  slidesPerView: 3.7,
                  spaceBetween: 10,
                },
                1900: {
                  slidesPerView: 3.7,
                  spaceBetween: 30,
                },
              }}
            >
              {articles &&
                articles
                  .filter((text) => text.theme === "Čitaoci pisci")
                  .reverse()
                  .slice(0, 6)
                  .map((article) => (
                    <SwiperSlide key={article._id}>
                      <Link to={`/${article._id}`}>
                        <TextCategoriesItem
                          key={article._id}
                          article={article}
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
