"use client";
import { useMovies } from "@/lib/hooks/query/use-movies-list";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MovieCarousel(): JSX.Element {
  const { data, error, isPending } = useMovies(
    "?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Carousel className="w-[70%]">
      <CarouselContent>
        {data && (
          <>
            {data.results.map((movie) => (
              <CarouselItem
                key={movie.id}
                style={
                  {
                    "--bg-image": `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
                  } as React.CSSProperties
                }
                className={`h-[500px] bg-[image:var(--bg-image)] bg-cover bg-center flex items-end rounded-xl`}
              >
                <div className="bg-black/50 backdrop-blur-sm pl-8 py-4 text-white w-full">
                  <h2 className="text-2xl font-bold">{movie.original_title}</h2>
                  <p className="text-lg">{movie.overview}</p>
                </div>
              </CarouselItem>
            ))}
          </>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
