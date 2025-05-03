import { TitleEnum } from "../../types/types.ts";
import { Title } from "../common/Title.tsx";
import HistoryImg from "../../assets/images/history.png";

export function History() {
  const text =
    "It all began in 2000 with a small group of friends and a single brew kettle. Driven by a love for great beer and a passion for craftsmanship, we founded Crafted Gold with one goal: to create unforgettable flavors that bring people together. Over the years, we’ve grown from a humble operation into a thriving brewery, embracing time-honored techniques and experimenting with unique ingredients to craft beers that stand out. Today, we’re proud to be part of the craft beer community, sharing our passion and legacy with every pint we pour.";

  return (
    <section className="my-[3.12rem]">
      <div className="container mx-auto">
        <Title label={TitleEnum.History} className="mb-[3.12rem]" />
        <div className="flex justify-between">
          <p className="text-white max-w-xl text-center">{text}</p>
          <img src={HistoryImg} alt="History" />
        </div>
      </div>
    </section>
  );
}
