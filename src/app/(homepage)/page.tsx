import { Hero } from "./hero";
import { Benefits } from "./benefits";
import { Testimonials } from "./testimonials";
import { Questions } from "./questions";
import { Navigate } from "./navigate";

const Home = () => {
  return (
    <div className="flex flex-col md:gap-52 gap-20 xl:w-[82%] md:w-[90%] mx-auto">
      <Hero />
      <Benefits />
      <Testimonials />
      <Questions />
      <Navigate />
    </div>
  );
};

export default Home;
