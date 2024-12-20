import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-background/50 px-3 py-2 flex justify-between items-center backdrop-blur-sm fixed top-0 z-10 w-full">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
        alt="IMDB Logo"
        width={30}
        height={30}
      />
    </nav>
  );
}
