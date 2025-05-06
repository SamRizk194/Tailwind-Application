import { Fragment } from "react";
import Landing from "../components/Landing";
import Features from "../components/Features";
import StayProductive from "../components/StayProductive";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials />
    </>
  );
}

export default Home;
