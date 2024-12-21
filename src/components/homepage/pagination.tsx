import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  page: number;
  totalPages: number;
};

export default function PaginationButton({
  page,
  totalPages,
}: PaginationProps): JSX.Element {
  const maxPagesToShow = 10;
  const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  function generatePagination() {
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            url={`?page=${i}`}
            isActive={i === page}
            className="rounded-full bg-foreground text-white"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pages;
  }

  return (
    <Pagination className="mt-10 gap-3">
      <PaginationPrevious
        url={`?page=${Math.max(1, page - 1)}`}
        className="rounded-full bg-foreground text-white"
      />
      <PaginationContent>{generatePagination()}</PaginationContent>
      <PaginationNext
        url={`?page=${Math.min(totalPages, page + 1)}`}
        className="rounded-full bg-foreground text-white"
      />
    </Pagination>
  );
}
