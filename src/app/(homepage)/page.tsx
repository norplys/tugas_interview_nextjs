import ListMoviesCard from "@/components/homepage/list-movies-card";
import MovieCarousel from "@/components/homepage/movie-carousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 bg-black/80 backdrop-blur-sm items-center">
      <MovieCarousel />
      <h1 className="w-full pb-2 text-3xl font-bold my-4">Discover Movies</h1>
      <ListMoviesCard />
    </main>
  );
}
