import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";


import axios from "axios";
import WriterCard from "../reusable/WriterCard";

export default function UserWriterCardHolder({setAuthorCallback}) {
  //State for loader
  const [loading, setLoading] = useState(true);
  //All writers list
  const [writers, setWriters] = useState([]);

  const URL = "http://localhost:5000/user";
  //Initial get all writes for list render
  useLayoutEffect(() => {
    let mounted = true;
    axios.get(URL).then((response) => {
      setWriters(response.data);
      setLoading(false);
    });
    return () => (mounted = false);
  }, []);
  return (
    <>
      {loading === true ? (
        <h1 className="text-loader">X</h1>
      ) : (
            <>
              <h1 className="user-page_header authors-heading">Autori</h1>
              <div className="writer-list">
                {writers &&
                  writers.map((writer) => (
                    <Link className="writer-card" to="/autor" onClick={()=>setAuthorCallback(writer.nameUser)} key={writer._id}> 
                      <WriterCard
                        writer={writer}
                      />
                      </Link>
                  ))}
              </div>
            </>
      )}
    </>
  );
}