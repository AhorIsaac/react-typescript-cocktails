import React from "react";

export interface IAbout {}

const About: React.FC<IAbout> = (): React.ReactElement => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum
        quam voluptatem, repellat nesciunt voluptatum dicta, illum blanditiis
        quasi harum illo aliquid aperiam delectus veritatis sit eveniet
        similique quod iusto nulla laborum? Laborum reiciendis in voluptatibus
        totam! Iusto, totam animi.
      </p>
    </section>
  );
};

export default About;
