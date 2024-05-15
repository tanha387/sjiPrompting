import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      SJI PROMPTING
      <br className="max-md:hidden" />
      <span className="blue_gradient text-center"> AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">
      SJI Prompting is the ultimate hub for SJI developers, offering a platform
      to store, share, and solve prompts collaboratively
    </p>

    <Feed />
  </section>
);

export default Home;
