import { useState } from "react"

const Section = ({Title, Description, isVisible, setIsVisible}) => {

    return(

        <div className="border border-neutral-900 p-2 m-2">
            
          <h1 className="font-bold text-xl ">{Title}</h1>
          {
          isVisible ? 
            <button className="underline cursor-pointer" onClick={() => setIsVisible(false)}> Hide</button> :
            <button className="underline cursor-pointer" onClick={() => setIsVisible(true)}>Show</button>
          }
          { isVisible && <h2>{Description}</h2>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState("about");
    return(
        <div>
            <h1 className="font-bold text-2xl p-2 m-2">Instamart</h1>
            <Section 
            Title={"About Instamart"}
            Description ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} 
            isVisible ={visibleSection === "about"}
            setIsVisible= {() => setIsVisibleSection("about")}
             />

            <Section 
            Title={"Team Instamart"}
            Description ={"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} 
            isVisible ={visibleSection === "team"}
            setIsVisible= {() => setIsVisibleSection("team")}
            />

            <Section 
            Title={"Carrier Instamart"}
            Description ={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} 
            isVisible ={visibleSection === "carrier"}
            setIsVisible= {() => setIsVisibleSection("carrier")}
            />
        </div>
    )
}
export default Instamart 