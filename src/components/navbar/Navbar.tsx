'use client';
import React from 'react';

import Container from '../Container';
import UserMenu from './UserMenu';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center gap-3 md:gap-0'>
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;