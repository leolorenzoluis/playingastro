import { createRef, RefObject } from 'preact';
import { useEffect } from 'preact/hooks';

export const useInterval = (callback, delay) => {
    const savedCallback = createRef();

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
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}