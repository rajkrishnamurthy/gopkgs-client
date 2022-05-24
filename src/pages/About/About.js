import React from "react";
import data from "../../content/faq.json";
import { Container, Typography } from "@mui/material";
import "./About.scss";

const About = () => {
  const aboutInfo = data.map((ele, idx) => {
    const qa = ele.questions.map((el, ix) => {
      return (
        <div key={ix}>
          <Typography variant="h3">{el.question}</Typography>
          <p dangerouslySetInnerHTML={{ __html: el.answer }}></p>{" "}
          {/* fyi - this is fine, it's static content */}
        </div>
      );
    });

    return (
      <div key={idx}>
        <Typography variant="h2" className="about-heading">
          {ele.heading}
        </Typography>
        <hr />
        {qa}
      </div>
    );
  });

  return (
    <Container sx={{ padding: "10px" }}>
      <Typography variant="h1">
        About Custom Domain Imports (aka. Vanity Imports) in Google Go
      </Typography>
      <p>
        Go Packages (<code>gopkgs.org</code>) is created to be a FREE service to
        allow Go developers to setup their own custom import paths without
        having to go through the hassle of setting up a custom static site with
        meta tags, hosting, content, etc.
      </p>

      <div>{aboutInfo}</div>
    </Container>
  );
};

export default About;
