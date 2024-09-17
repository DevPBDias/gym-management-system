import Image from "next/image";
import LoginForm from "./components/LoginForm/LoginForm";
import hero from "@/app/assets/Hero.jpg";

export default function Home() {
  return (
    <main className="main">
      <picture className="heroContainer">
        <Image
          src={hero}
          alt="Hero image"
          quality={100}
          fill={true}
          priority={true}
          className="image"
        />
      </picture>
      <LoginForm />
    </main>
  );
}
