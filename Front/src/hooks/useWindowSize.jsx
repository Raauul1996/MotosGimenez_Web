import { useEffect, useState } from "react";

const getBreakpoint = (width) => {
    if (width < 576) return "xs";
    if (width < 768) return "sm";
    if (width < 992) return "md";
    if (width < 1200) return "lg";
    if (width < 1400) return "xl";
    return "xxl";
};

const getRatio = () => {
    const ratio = window.innerHeight/window.innerWidth;
    return ratio
    // if(ratio > 1){
    //     return "vertical"
    // } else {
    //     return "horizontal"
    // }
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: getBreakpoint(window.innerWidth),
        ratio: getRatio()
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            breakpoint: getBreakpoint(window.innerWidth),
            ratio: getRatio(),
        });
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}