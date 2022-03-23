import React, { useEffect } from "react";

export default () => {
  const text =
    "I am 18 years old from Gothenburg, Sweden. All my life i have been interested in different aspects of technology. I am know interested in both web development and programing. ";
  const text2 = "I know have ";
  const [horibleText, setHoribleText] = React.useState(" ");
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setHoribleText(text);
      i = i + 1;
    }, i * text[i].length);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main">
      <section>
        <h3>&#60;about&#62;</h3>
        <ul>
          <p>{text}</p>
        </ul>
        <h3>&#60;/about&#62;</h3>
      </section>
      <section>
        <h3>&#60;tech&#62;</h3>
        <ul>
          <li>React</li>
          <li>Linux</li>
          <li>SSH</li>
          <li>Flutter</li>
          <li>Git</li>
          <li>Vim</li>
        </ul>
        <h3>&#60;/tech&#62;</h3>
        <h3>&#60;languages&#62;</h3>
        <ul>
          <li>Javascript/Typescript</li>
          <li>Python</li>
          <li>Dart</li>
          <li>HTML + CSS/SCSS</li>
        </ul>
        <h3>&#60;/languages&#62;</h3>
      </section>
    </div>
  );
};
