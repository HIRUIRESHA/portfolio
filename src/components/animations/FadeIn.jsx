import React, { useEffect } from 'react'

const FadeIn = ({children, delay=0, duration=500, threshold=0.1}) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const elementRef = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                //Trigger animation when element enter viewpoint 
            if (entry.isIntersecting && !isVisible) {
                setIsVisible(true);
            }
        }, { threshold: threshold,
            rootMargin: '0px 0px -50px 0px' //Trigger slightly before element is fully visible
         });

         if (elementRef.current) {
            observer.observe(elementRef.current);
         }

            return () => {
                observer.disconnect();
            };
    }, [isVisible, threshold]);

    return <div
    ref={elementRef}
    className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
    style = {{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
        animationFillMode: 'both'
    }}
    >
        {children}
    </div>
};



 

export default FadeIn
