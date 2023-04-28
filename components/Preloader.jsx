import { useEffect } from 'react';

const Preloader = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const preloaderElement = document.getElementById('preloader');
            if (preloaderElement) {
                preloaderElement.style.opacity = '0';
                preloaderElement.style.visibility = 'hidden';
            }
        }, 350);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            id="preloader"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#1a1a1a', // Ajusta el color según tus necesidades
                zIndex: 999,
                opacity: 1,
                visibility: 'visible',
                transition: 'opacity 0.8s ease, visibility 0.5s ease'
            }}
        ></div>
    );
};

export default Preloader;
