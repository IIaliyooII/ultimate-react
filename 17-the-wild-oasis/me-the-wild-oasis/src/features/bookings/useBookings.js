import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  // Filtered Value
  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

  // Sort By
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings, error };
};
