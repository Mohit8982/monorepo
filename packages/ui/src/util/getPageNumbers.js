const getPageNumbers = (page, totalPages) => {
  const pages = [];

  // First page
  pages.push(1);

  // Left dots
  if (page > 4) {
    pages.push("...");
  }

  // Pages around current page
  for (
    let i = Math.max(2, page - 2);
    i <= Math.min(totalPages - 1, page + 2);
    i++
  ) {
    pages.push(i);
  }

  // Right dots
  if (page < totalPages - 3) {
    pages.push("...");
  }

  // Last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};

export default getPageNumbers;
