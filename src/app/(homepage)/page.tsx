import { Hero } from "./hero";
import { Benefits } from "./benefits";
import { Testimonials } from "./testimonials";
import { Questions } from "./questions";
import { Navigate } from "./navigate";
import { Container } from "@/components/container";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Benefits />
      <Testimonials />
      <Questions />
      <Navigate />
    </Container>
  );
};

export default Home;
