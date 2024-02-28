import { createContext } from "react";

const userContext = createContext({
    user: {
    name: "Dummy Name",
    email: "Dummy Email",
}
})

export default userContext;