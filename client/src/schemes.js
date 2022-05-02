import React, { useEffect } from "react";

const Schemes = () => {
  useEffect(() => {
    const feedDisplay = document.querySelector("#feed");
    fetch("http://localhost:5000/results")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((article) => {
          const articleItem =
            `<div><h3>` +
            article.title +
            `</h3><p>` +
            `https://www.india.gov.in`+ article.url +
            `</p></div>`;
          feedDisplay.insertAdjacentHTML("beforeend", articleItem);
        });
      })
      .catch((err) => console.log(err));
  });

  return <div id="feed"></div>;
};

export default Schemes;