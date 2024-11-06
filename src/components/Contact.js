import { useNavigate, Outlet } from "react-router-dom"

export const Contact = () =>{
    const navigate = useNavigate();

    function handleNavigate(){
        return navigate("/");
    }

    return(
        <div className="component">
            <p>Contact</p>
            <Outlet />
            <button onClick={handleNavigate}>Back to Home</button>
        </div>
    )
}