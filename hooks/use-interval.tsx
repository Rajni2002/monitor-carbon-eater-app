import { useEffect, useRef } from "react";

export default function useInterval(callback: () => void = () => { }, delay: number = 0) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        // @ts-ignore
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            // @ts-ignore
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}