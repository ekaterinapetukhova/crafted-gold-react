import InstagramImg from "../../assets/icons/instagram.svg";
import FacebookImg from "../../assets/icons/facebook.svg";
import TwitterImg from "../../assets/icons/twitter.svg";

export function Footer() {
  const MediaItem = (props: { image: string; name: string; link: string }) => {
    return (
      <li key={props.name}>
        <a href={props.link} className="transition hover:opacity-50" target="_blank">
          <img src={props.image} alt={props.name} />
        </a>
      </li>
    );
  };

  return (
    <footer className="py-5 bg-yellow">
      <div className="container mx-auto flex flex-col items-center gap-y-5">
        <ul className="flex items-center gap-x-8">
          <MediaItem image={InstagramImg} name="instagram" link="https://www.instagram.com" />
          <MediaItem image={FacebookImg} name="facebook" link="https://www.facebook.com/" />
          <MediaItem image={TwitterImg} name="twiiter" link="https://x.com/" />
        </ul>
        <p>2025 © All Rights Reserved</p>
      </div>
    </footer>
  );
}
