import React, { useState, useLayoutEffect } from "react";

import axios from "axios";
// Components
import MimModal from "./MimModal";

export default function MimGallery() {
  //State for loader
  const [loading, setLoading] = useState(true);
  //List of all mims
  const [mims, setMims] = useState([]);

  //One mim selected
  const [selectedImage, setSelectedImage] = useState(null);

  //Limit
  const [limit, setLimit] = useState(6);

  const loadMore = () => {
    if (limit <= mims.length) {
      setLimit(limit + 6);
    }
  };
  //Remove one mim selected and back to the gallery of mims
  const setBack = () => {
    setSelectedImage(null);
  };
  const URL = "http://localhost:5000/mim";
  //Get all mim's
  useLayoutEffect(() => {
    let mounted = true;
    axios.get(URL).then((response) => {
      setMims(response.data);
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
          <h1 className="user-page_header">Mimovi</h1>
          <div className="img-grid">
            {mims &&
              mims
                .reverse()
                .slice(0, limit)
                .map((mim) => (
                  <div className="img-wrap" key={mim._id}>
                    <img
                      src={mim.image}
                      alt="Mim"
                      onClick={() => setSelectedImage(mim.image)}
                    />
                  </div>
                ))}
          </div>
          {limit < mims.length ? (
            <div className="load-more-wrapper">
              <button className="load-more" onClick={() => loadMore()}>
                DAJ JOŠ
              </button>
            </div>
          ) : (
            <></>
          )}
          {selectedImage && (
            <MimModal selectedImage={selectedImage} setBack={setBack} />
          )}
        </div>
      )}
    </div>
  );
}
