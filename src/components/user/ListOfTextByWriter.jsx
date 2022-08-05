import React, { useLayoutEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
import nazad from "../../images/nazad.png";

import TextCategoriesItem from "./TextCategoriesItem";

export default function ListOfTextByWriter({ author, setAuthorCallback }) {
  // URL History for back button
  const history = useHistory();
  //Articles from one author
  const [articles, setArticles] = useState([]);
  //State for loader
  const [loading, setLoading] = useState(true);
  const URL = "http://localhost:5000/text/sorted_text_author";
  //Initial value for text list
  useLayoutEffect(() => {
    let mounted = true;
    axios.get(URL + "/" + author).then((response) => {
      setArticles(response.data);
      setLoading(false);
    });
    return () => (mounted = false);
  }, []);
  return (
    <div>
      {loading === true ? (
        <h1 className="text-loader">X</h1>
      ) : (
        <div>
          <div className="list-of-texts-by-author">
            {articles &&
              articles.map((article) => (
                <Link to={`/${article._id}`} key={article._id} >
                  <TextCategoriesItem key={article._id} article={article} />
                </Link>
              ))}
          </div>
          <button
            className="button-form-submit_client writer-btn"
            onClick={() => history.goBack()}
          >
            <span>Nazad</span> <img src={nazad} alt="Arrow Left" />
          </button>
        </div>
      )}
    </div>
  );
}
