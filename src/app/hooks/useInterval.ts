import { useEffect, useRef } from "react";

type Callback = () => void;

const useInterval = (callback: Callback, delay: number) => {
    const savedCallback = useRef<Callback>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export { useInterval };
