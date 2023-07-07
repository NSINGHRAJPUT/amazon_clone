import Card from "../card/Card";
import Carousel from "./carousel/Carousel";
import img1 from "../../images/home_grid_1.jpg";
import img2 from "../../images/home_grid_2.jpg";
import img3 from "../../images/home_grid_3.jpg";
import img4 from "../../images/home_grid_4.jpg";
import img5 from "../../images/home_grid_5.jpg";
import img6 from "../../images/home_grid_6.jpg";
import img7 from "../../images/home_grid_7.jpg";
import img8 from "../../images/home_grid_8.jpg";
import Category from "../category/Category";
import Cproduct from "../category/Cproduct";

const Home = () => {
  return (
    <div className="bg-amazonClone-background">
      <section className="min-w-[200px] max-w-[1500px] m-auto bg-gray">
        testing
        <Carousel />
        <div className="flex flex-wrap justify-center xl:grid-cols-4 -mt-10">
          <Card
            title={"we have a surprise for you"}
            img={img1}
            link={"see terms and conditions"}
          />
          <Card
            title={"watch the rings of power"}
            img={img2}
            link={"Start streaming now"}
          />
          <Card
            title={"Unlimited Streaming"}
            img={img3}
            link={"Find out more"}
          />
          <Card
            title={"More titles to explore"}
            img={img4}
            link={"Browse Kindle unlimited"}
          />

          <Card title={"Shop pet supplies"} img={img5} link={"See more"} />
          <Card title={"Spring sales"} img={img6} link={"See the deals"} />
          <Card title={"Echo buds"} img={img7} link={"see more"} />
          <Card
            title={"Family plans: 3 months free"}
            img={img8}
            link={"Learn More"}
          />
        </div>
      </section>
      <Cproduct />
      <Category />
    </div>
  );
};

export default Home;
