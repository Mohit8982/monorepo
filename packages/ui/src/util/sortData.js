// utils.js

export default function sortData(data, sortConfig) {
  if (!sortConfig.key) return data;

  const sorted = [...data];

  sorted.sort((a, b) => {
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (valueA < valueB) return sortConfig.direction === "asc" ? -1 : 1;

    if (valueA > valueB) return sortConfig.direction === "asc" ? 1 : -1;

    return 0;
  });

  return sorted;
}
