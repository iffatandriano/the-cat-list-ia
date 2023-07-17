import React from 'react';
import MenuItem from './MenuItem';
import { usePathname } from 'next/navigation';
import { listNavbar } from '@/src/utils/constants';
import { ItemNavbar } from '@/src/types';

const UserMenu = () => {
    const pathname = usePathname();

    return (
        <div className='flex flex-row items-center gap-3'>
            {
                listNavbar?.map((navbarItem: ItemNavbar, navbarIndex: number) => (
                    <MenuItem 
                        key={navbarIndex}
                        url={navbarItem.url}
                        label={navbarItem.label}
                        pathname={pathname}
                    />
                ))
            }
        </div>
    );
};

export default UserMenu;