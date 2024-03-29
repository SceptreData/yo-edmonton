import Link from 'next/link';

import Layout from '../components/Layout';
import Featured from '../components/Featured';
import Events from '../components/Events';

const Home = props => {
  return (
    <Layout title="Yo'Edmonton - The home of Live Edmonton Hip Hop.">
      <Featured />
      <Events />

      <div className='flex-row'>
        <section>
          <h3>Get your Event Listed</h3>
          <p>
            Are you hosting an event?
            <a href='mailto:yoedmonton@gmail.com'> Let us know!</a> We want to
            bring fans and content-creators together, with the goal of helping
            you grow your brand as painlessly as possible. Yo'Edmonton is the
            best way to let the people Edmonton know what’s up. Best of all,
            listing yourself on Yo Edmonton is completely free!
          </p>
          <p>
            Do you have pictures of an event? We would love to see them. Your
            photos could be featured here on the site. Every week we feature a
            different artist or crew, and we would love your photographs to do
            it.
          </p>
        </section>
        <section>
          <h3>About Yo'Edmonton</h3>
          <p>
            Yo’Edmonton is the best up and coming Hip Hop and Rap event listing
            site in Edmonton. Founded in 2019, the owner was fed up trying to
            figure out where events were happening in Edmonton. At Yo’Edmonton,
            we are bringing you the latest up-to-date information about shows
            happening around the city.
          </p>
          <p>
            Yo'Edmonton is a promotional platform where artists and fans can
            promote their favorite artists, merchandise and venues. Yo'Edmonton
            is built for you to engage with the Edmonton hip hop community.
          </p>
        </section>
      </div>
      <style jsx>{`
        @media only screen and (min-width: 720px) {
          .flex-row {
            display: flex;
          }
        }

        h2 {
          margin-top: 0;
        }
        section {
          position: relative;
          padding: 20px;
          border: 1px solid lightgrey;
          backdrop-filter: blur(4px);
          background: rgba(0, 0, 0, 0.5);
          margin-bottom: 2rem;
          margin-right: 1rem;
        }
        a {
          font-family: 'Roboto';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
        p a,
        p a:visited {
          color: gold;
        }
        p a:hover {
          color: goldenrod;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
