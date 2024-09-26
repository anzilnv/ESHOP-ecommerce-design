import React, { useEffect, useState } from 'react'
import light from '../assets/light-button.jpg'
import dark from '../assets/240_F_967417069_3zmcLqX3crSkA40BubPQz1lkzWyRVuwF.jpg'

const Darktheme = () => {
    const [theme, settheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

        const element = document.documentElement;
        console.log(element);

    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    //     if (theme === "dark") {
    //         element.classlist.add("dark");
    //         element.classlist.add("dark");
    //     } else {
    //         element.classlist.remove("light");
    //         element.classlist.remove("dark");
    //     }
    // }, [])

    return (
        <div className='relative'>
            <img src={light} alt=""
                onClick={() => settheme(theme === "dark" ? "light" : "dark")}
                className={`w-12 rounded-full absolute ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-1000`} />
            <img src={dark} alt=""
                onClick={() => settheme(theme === "dark" ? "light" : "dark")}
                className={`w-12 rounded-full `} />
        </div>
    )
}

export default Darktheme