import { useParams, useSearchParams } from "react-router-dom"

export const ProductDetail = () =>{
    const params = useParams();

    return(
        <div className="component">
            <p>Product id n.{params.id} Details</p>
        </div>
    )
}