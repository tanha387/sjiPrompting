import Butterfly from "@components/Animation";
import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      SJI PROMPTING
      <br className="max-md:hidden" />
      <span className="blue_gradient text-center">
        Save & Share Favorite Prompts
      </span>
    </h1>

    <p className="desc text-center">
      SJI Prompting is the ultimate hub for SJI developers, offering a platform
      to store, share, and solve prompts collaboratively
    </p>
    <div
      className="relative w-full flex justify-between items-center 
    space-x-10"
    >
      <Butterfly />
      <Butterfly />
    </div>

    <Feed />
  </section>
);

export default Home;
