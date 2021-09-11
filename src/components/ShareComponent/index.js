import React from "react";
import "./Share.css";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
const ShareComponent = ({ maxscore }) => {
  const url = "https://project-5471315986518542170.firebaseapp.com/";
  const text = `Hey..try beating my best score of ${maxscore} in 2048`;

  return (
    <div className="Demo__container">
      <div className="Demo__some-network">
        <FacebookShareButton
          url={url}
          quote={text}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon round size={42} />
        </FacebookShareButton>
      </div>
      <div className="Demo__some-network">
        <WhatsappShareButton
          url={url}
          title={text}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon round size={42} />
        </WhatsappShareButton>
      </div>
      <div className="Demo__some-network">
        <TelegramShareButton
          url={url}
          title={text}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon round size={42} />
        </TelegramShareButton>
      </div>
      <div className="Demo__some-network">
        <TwitterShareButton
          url={url}
          title={text}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon round size={42} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default ShareComponent;
