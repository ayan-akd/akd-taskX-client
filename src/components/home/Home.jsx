import { Helmet } from "react-helmet";
import Banner from "../Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TaskX | Home</title>
      </Helmet>
      <Banner></Banner>
     
    </div>
  );
};

export default Home;
