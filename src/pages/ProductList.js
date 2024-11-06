import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  return (
    <main>
      <div className="component">
        <p>Product List</p>
        <p>Search params: {searchParams.get("q")}</p>
        <p>Location search : {location.search}</p>
      </div>
    </main>
  );
};
