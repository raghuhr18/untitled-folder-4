import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        }
        const handleOffine = () => {
            setIsOnline(false)
        }

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffine);

        return() => {
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline",handleOffine);
        }
    },[])

return isOnline
}
export default useOnline;