// hooks/useSorting.js

import { useState } from "react";

function useSorting() {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return {
    sortConfig,
    handleSort,
  };
}

export default useSorting;
