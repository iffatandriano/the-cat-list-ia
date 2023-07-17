import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
    url: string;
    label: string;
    pathname: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ 
    url = '#', 
    label,
    pathname,
}) => {
    return (
        <Link 
            href={url}
            className={`
                w-24
                h-8
                flex
                justify-center
                items-center
                text-sm
                font-semibold
                rounded-full
                hover:bg-neutral-600
                hover:text-white
                transition
                cursor-pointer
                ${pathname === url ? 'text-white' : 'text-black'}
                ${pathname === url ? 'bg-neutral-600': 'bg-white'}
            `}
        >
            {label}
        </Link>
    );
};

export default MenuItem;