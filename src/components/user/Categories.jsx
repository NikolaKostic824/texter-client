import React, { useLayoutEffect, useState } from "react";
import { Link} from "react-router-dom";

import axios from "axios";
import nazad from "../../images/nazad.png";

import TextCategoriesItem from "./TextCategoriesItem";

export default function Categories({locationParam, title}) {
  //Articles from one author
  const [articles, setArticles] = useState([]);
  //State for loader
  const [loading, setLoading] = useState(true);
  const URL = "http://localhost:5000/text/category";
  
  //Initial value for text list
  useLayoutEffect(() => {
    let mounted = true;
    axios.get(URL + "/" + locationParam).then((response) => {
      setArticles(response.data);
      setLoading(false);
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="categories">
      {loading === true ? (
        <h1 className="text-loader">X</h1>
      ) : (
        <div>
          <h1 className="user-page_header">{title}</h1>
          <div className="list-of-texts-by-author">
            {articles &&
              articles.map((article) => (
                <Link to={`/${article._id}`}>
                  <TextCategoriesItem key={article._id} article={article} />
                </Link>
              ))}
          </div>
          <Link to="/">
            <button className="button-form-submit_client">
              <span>Nazad</span> <img src={nazad} alt="Arrow Left" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
