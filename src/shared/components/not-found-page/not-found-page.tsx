import { useEffect } from "react";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate])

    return (<></>)
};
