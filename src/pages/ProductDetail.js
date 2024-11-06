import { useParams, useSearchParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();

  return (
    <main>
      <div className="component">
        <p>Product id n.{params.id} Details</p>
      </div>
    </main>
  );
};
