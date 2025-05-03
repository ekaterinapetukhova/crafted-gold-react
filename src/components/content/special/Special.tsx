import { Title } from "../../common/Title.tsx";
import { SpecialTitlesEnum, TitleEnum } from "../../../types/types.ts";
import LeafIcon from "../../../assets/icons/leaf.svg";
import BeerIcon from "../../../assets/icons/beer.svg";
import HandsIcon from "../../../assets/icons/hands.svg";
import { SpecialItem } from "./Specialtem.tsx";

export function Special() {
  return (
    <section className="my-[3.12rem]">
      <div className="container mx-auto">
        <Title label={TitleEnum.Special} className="mb-[3.12rem]" />
        <div className="flex justify-center">
          <ul className="flex gap-x-[8.8rem]">
            <SpecialItem
              icon={LeafIcon}
              label={SpecialTitlesEnum.Fresh}
              content="Only the finest hops, malts, and local ingredients go into every brew."
            />
            <SpecialItem
              icon={BeerIcon}
              label={SpecialTitlesEnum.Quality}
              content="Time-honored techniques meet innovative brewing methods for exceptional flavor."
            />
            <SpecialItem
              icon={HandsIcon}
              label={SpecialTitlesEnum.Community}
              content="We believe great beer brings people together. Our brewery is a hub for connection."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
