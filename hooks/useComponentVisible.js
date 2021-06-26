import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleHideDropdown = (e) => {
        if (e.key === 'Escape') {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [isComponentVisible]);

    return { ref, isComponentVisible, setIsComponentVisible };
}