import React from 'react';
import Header from '../components/header/Header';

function About() {
  return (
    <>
      <Header subtitle="The Best About Page Ever">About</Header>
      <div className="overflow-auto my-4">
        <img
          src="https://placedog.net/200"
          alt="Placeholder"
          className="float-left clear-left mb-4 mr-4"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          suscipit hic! Porro culpa alias magni nostrum magnam dolorum incidunt
          nobis eius nesciunt soluta sunt rerum est ad ut necessitatibus sequi,
          iusto a quaerat asperiores eveniet sed quam. Laborum aspernatur
          voluptatem ea ad distinctio debitis doloremque maiores unde. Nulla
          laudantium, possimus voluptates veniam ut fuga nam illo atque debitis
          ipsum nobis unde voluptatibus molestiae laborum optio iste pariatur!
          Veniam doloremque debitis nostrum similique eum et, voluptatibus
          distinctio earum, inventore vero architecto vel? Rem dicta eligendi
          sed fugit, at accusamus repellendus nemo minus, nesciunt modi quo ad,
          voluptatum nihil vel accusantium nam!
        </p>
      </div>
    </>
  );
}

export default About;
