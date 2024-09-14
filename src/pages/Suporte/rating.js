import { useState } from 'react';
import { tw } from 'twind';

const Rating = ({ value, onChange }) => {
    const [hoverValue, setHoverValue] = useState(0);

    const handleMouseEnter = (value) => setHoverValue(value);
    const handleMouseLeave = () => setHoverValue(0);
    const handleClick = (value) => onChange(value);

    return (
        <div
            className={tw`flex cursor-pointer text-4xl`} // Tamanho das estrelas
            onMouseLeave={handleMouseLeave}
        >
            {Array.from({ length: 5 }, (_, index) => (
                <span
                    key={index}
                    className={tw`mx-1 ${index < (hoverValue || value) ? 'text-yellow-500' : 'text-gray-300'}`}
                    onMouseEnter={() => handleMouseEnter(index + 1)}
                    onClick={() => handleClick(index + 1)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;
