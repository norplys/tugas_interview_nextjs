import ListMoviesCard from "@/components/homepage/list-movies-card";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen p-24 bg-black/80 backdrop-blur-sm">
      <h1 className="pb-2 text-2xl font-bold">Discover Movies</h1>
      <ListMoviesCard />
    </main>
  );
}
