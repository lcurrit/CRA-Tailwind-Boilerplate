import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header/Header';

function About() {
  return (
    <>
      <Helmet>
        <title>The Best Movies Ever | About</title>
      </Helmet>
      <Header>
        <h1>About</h1>
        <h2>
          This <em>could</em> be the best page.
        </h2>
      </Header>
      <div className="overflow-auto my-4 px-4">
        <img
          src="https://placedog.net/200/200"
          alt="Placeholder"
          className="float-left clear-left mb-4 mr-4"
          width={200}
          height={200}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt hic
          nesciunt veritatis laboriosam molestiae quibusdam eos error commodi
          aperiam sequi. Veniam impedit sed ab labore, dolores nulla. Neque
          ducimus cumque, fuga ea error autem culpa quis dignissimos eaque
          laboriosam ipsam placeat animi? Dignissimos, distinctio! Odit sed quos
          ratione quasi. Enim?
        </p>
        <p>
          Voluptate illum, consectetur suscipit soluta mollitia maxime dicta
          esse vero deserunt corporis modi beatae omnis officiis vitae.
          Exercitationem, architecto tenetur. Harum odio libero similique
          voluptate quas id est ducimus aperiam labore, nostrum tenetur iure
          maxime asperiores architecto, iusto veniam incidunt eligendi minus.
          Itaque ad aut non adipisci magnam iure accusamus!
        </p>
        <p>
          Vero delectus iusto officiis beatae commodi dolore excepturi.
          Voluptates sint perferendis ipsa id harum quibusdam accusantium,
          maiores sed amet quam sequi eius quaerat, blanditiis error dolor
          obcaecati. Recusandae debitis, excepturi modi reprehenderit
          praesentium quo, esse nulla laudantium odit nostrum odio sed facere
          animi placeat possimus, provident laboriosam fuga id. Necessitatibus.
        </p>
      </div>
    </>
  );
}

export default About;
