import  { useEffect, useState } from 'react';
import style from "../Views/Portafyle.module.css"

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX + window.scrollX,
                y: event.clientY + window.scrollY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleMouseMove);
        };
    }, []);

    return (
        <div
            className={style.circle}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default MouseFollower;
