import { useEffect } from "react";
import { useUserdata } from "./context"
import { toast, ToastContainer } from 'react-toastify'
const Toast = () => {
    const { message, success } = useUserdata();

    useEffect(() => {
        if (success) {
            toast.success(message);
        }
        else {
            toast.error(message);
        }
    }, [success, message])

    return (
        <>
            <ToastContainer />
        </>
    )
}

export default Toast;