import { Hero } from "./hero";
import { Benefits } from "./benefits";
import { Testimonials } from "./testimonials";
import { Questions } from "./questions";
import { Navigate } from "./navigate";
import { PageContainer } from "@/components/containers/page-container";

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Benefits />
      <Testimonials />
      <Questions />
      <Navigate />
    </PageContainer>
  );
};

export default Home;
