import React from 'react';
import { Header } from 'components';

function Home() {
  return (
    <>
      <Header
        backgroundUrl="https://placedog.net/600/200"
        headerMinHeight={150}
      >
        <h1>Home</h1>
      </Header>

      <div className="my-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          beatae quo placeat. Iste ab repellendus cupiditate, autem consectetur
          vitae non, rerum dolorum nobis odio fuga exercitationem. Odit nam sunt
          ipsum iure. Accusantium temporibus consectetur eius? Delectus
          blanditiis rerum aspernatur laudantium quibusdam! Obcaecati iste ipsum
          nemo ea officiis eum magni dolore?
        </p>
        <p>
          Quo, unde maiores quasi et optio iste vitae nemo tempora repellendus
          officia sapiente velit voluptates quibusdam sed quam quos, doloribus
          cum nobis. Dolor voluptatem et corrupti atque itaque necessitatibus
          suscipit perferendis fugiat tempora, numquam dolorem consequuntur
          tenetur, dolores quaerat fugit sit, nihil perspiciatis. Optio ipsum at
          iusto voluptas, non aliquam.
        </p>
        <p>
          Aspernatur neque, dolorem eaque consectetur ad voluptatum molestiae,
          itaque amet fugiat assumenda dolor delectus libero sunt illo culpa
          harum nihil? Dignissimos libero nulla animi autem similique, ut modi
          tempore impedit blanditiis nihil aliquam officiis soluta reprehenderit
          quis facere distinctio facilis mollitia, quidem dolore nisi
          laboriosam. Est explicabo nobis earum excepturi!
        </p>
      </div>
    </>
  );
}

export default Home;
