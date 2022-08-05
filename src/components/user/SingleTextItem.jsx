import React, { useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
   ViberShareButton,
   ViberIcon,
   WhatsappShareButton,
   WhatsappIcon,
} from "react-share";

import nazad from "../../images/nazad.png";

export default function SingleTextItem({ article }) {
  //Image Ref
  const ref = useRef();
  // URL History for back button
  const history = useHistory();
  // Get ID from URL
  const params = useParams();
  //Share URL
  const shareUrl = "https://textersrb.netlify.app/" + params.id;
  return ( 
    <div>
      <div className="single-text-heading" >
        <img

          className="single-text-heading_image"
          src={article.authorImage}
          alt={article.author}
        />
        <div className="single-text-heading_text">
          <h2>{article.author}</h2>
          <h1>{article.title}</h1>
        </div>
        <div
          className="single-text-body"
          style={{ borderLeft: `1.5em solid ${article.color}` }}
        >
          <div className="single-text-info">
            <div className="single-text-info-wrapper">
              <div className="single-text-info_image">
                <img src={article.image} alt={article.title + "book"} />
              </div>
              <div className="single-text-info_text">
                <div className="single-text-info_text-info">
                  <div className="single-text-info_text-info-wrapper">
                    <div className="single-text-info_text-info-author">
                      <h2>Autor:</h2>
                      <p>{article.author}</p>
                    </div>
                    <div className="single-text-info_text-info-signature">
                      <p>{article.authorSignature}</p>
                    </div>
                  </div>
                  <div className="single-text-info_text-info-wrapper">
                    <div className="single-text-info_text-info-category">
                      <h2>Kategorija:</h2>
                      <p>{article.theme}</p>
                    </div>
                    <div className="single-text-info_text-info-time">
                      <h2>Vreme:</h2>
                      <p>{article.readTime}</p>
                    </div>
                  </div>
                </div>
                <div className="single-text-info_text-icons">
                  <p>Šibenik</p>
                  <br />
                  <FacebookShareButton url={shareUrl} quote={article.title} className="facebook-icon">
                    <FacebookIcon bgStyle={{ fill: article.color }} />
                  </FacebookShareButton>
                  <TwitterShareButton className="twitterIcon" url={shareUrl}>
                    <TwitterIcon bgStyle={{ fill: article.color }} />
                  </TwitterShareButton>
                  <WhatsappShareButton className="twitterIcon" url={shareUrl}>
                    <WhatsappIcon bgStyle={{ fill: article.color }} />
                  </WhatsappShareButton>
                  <ViberShareButton className="twitterIcon" url={shareUrl}>
                    <ViberIcon bgStyle={{ fill: article.color }} />
                  </ViberShareButton>
                  <TelegramShareButton className="twitterIcon" url={shareUrl}>
                    <TelegramIcon bgStyle={{ fill: article.color }} />
                  </TelegramShareButton>
                </div>
              </div>
            </div>
            <div
              className="single-text-info_article"
            >
              {article && ReactHtmlParser(article.text)}
              </div>

          </div>
        </div>
        {history.action !== "POP" ? (
          <button
            className="button-form-submit_client single-text-btn"
            onClick={() => history.goBack()}
          >
            <span>Nazad</span> <img src={nazad} alt="Arrow Left" />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
