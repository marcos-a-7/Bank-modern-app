import React, { useEffect, useState } from 'react'

const GoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`hidden sm:block fixed bottom-4 right-4 p-4 rounded-full transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100 border-white hover:border-secondary' : 'opacity-0 border-transparent'} z-10`}
            style={{ backgroundColor: 'transparent', boxShadow: 'none', borderWidth: '2px' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FFF">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 10L7.5 3L14 10" transform="translate(4, 5)" />
            </svg>
        </button>
    );
}


export default GoTop
