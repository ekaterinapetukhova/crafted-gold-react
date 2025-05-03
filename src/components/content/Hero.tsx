import { LinkTo } from "../common/LinkTo";
import BgImage from "../../assets/images/bg.jpg";

export function Hero() {
  const title = "Real Craft Beer";
  const text =
    "Brewed with passion, crafted to perfection. From carefully selected hops to time-honored brewing techniques, our beers deliver a rich and unforgettable flavor experience. Discover the art of true craft beer.";
  const buttonLabel = "Explore Our Beers";

  return (
    <section className="h-[50rem] relative">
      <div className="w-full absolute h-full -z-10">
        <div className="h-full w-full bg-black/75 absolute t-0 l-0"> </div>
        <img className="w-full h-full object-cover absolute t-0 l-0 -z-10" src={BgImage} alt="Backgroud image" />
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center gap-y-5 h-full">
        <h1 className="text-white text-6xl font-bold">{title}</h1>
        <p className="text-white text-center max-w-2xl text-xl">{text}</p>
        <LinkTo
          url="/"
          className="bg-yellow text-xl font-semibold w-56 h-14 flex justify-center items-center"
          label={buttonLabel}
        />
      </div>
    </section>
  );
}
