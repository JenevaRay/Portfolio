import React from 'react';

export default function AboutMe(): JSX.Element {
  const imgstyle = {
    top: "-50px",
    bottom: "-50px",
    zIndex: "999",
    cursor: "pointer",
    transitionProperty: "all",
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease",
    width: "100%",
    display: "block",
    // maxHeight: "200px",
    ObjectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }
  return (
    <>
      <h1>Jeneva Ray</h1>
      <img src="/selfie.png" style={imgstyle}></img>
      <ul>
                <li>Needing precision work?  I&apos;ll take it on.  I come from a background in pharmacy, where every little thing matters.</li>
                <li>I have a hunger to learn more, so that I can better help people.  Are you the right company for me?</li>
                <li>I have experience with analysis from data analysis to formal analysis (a higher tier from static analysis)</li>
                <li>I have experience with Cassandra NoSQL and administration, data parsers for very different information for information sources, use and storage</li>
                <li>I have experience with multiple languages, including JavaScript and Python, and I actively administer Linux systems.</li>
      </ul>
    </>
  );
}