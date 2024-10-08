// Filter
export interface FilterPropsType {
  isLoading?: boolean;
  allCategories: string[];
  // filters: filterType[];
  colors: string[];
  sizes: string[];
  setSortParams: (key: string, value: string) => void;
  deleteSortParams: (key: string) => void;
  searchParams: URLSearchParams;
  paegData?: string;
}

interface filterType {
  name: string;
}

// export interface FilterProps {
//     setSortParams: (key: string, value:string) => void;
//     delete
// }