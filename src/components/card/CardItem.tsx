import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getImageById } from '@/src/services';

const URL_IMAGE = "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=740&t=st=1689528860~exp=1689529460~hmac=1c31024aab09fa917efb83c2efd52702123b9872498e5f19bc981747c5e357fc";

interface CardItemProps {
    cat: any;
    lastCatsElementRef: any;
}

const CardItem: React.FC<CardItemProps> = ({ 
    cat,
    lastCatsElementRef
}) => {
    const [imgCat, setImgCat] = useState('');

    useEffect(() => {
        const fetchImageById = async (id: string) => {
            const response = await getImageById(id);

            setImgCat(response.url);
        } 

        fetchImageById(cat?.reference_image_id);
    }, [cat])

    return (
        <a
            href={`/list-cats/details/${cat?.reference_image_id}`} 
            ref={lastCatsElementRef}
            className='
                w-full 
                h-64 
                border 
                border-neutral-100 
                shadow-sm
                transition
                hover:scale-105
                hover:cursor-pointer
                rounded-md
                py-2
                px-4
            '
        >
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='font-semibold text-md'>
                    {cat.name}
                </div>
                <Image
                    src={imgCat === '' ? URL_IMAGE : imgCat}
                    className='w-full h-36 object-cover'
                    width={125}
                    height={60}
                    alt='img_cat'
                    loading='lazy'
                />
                <div className='bg-neutral-100 w-fit p-3 h-8 flex justify-center items-center rounded-lg text-sm'>
                    {cat.origin}
                </div>
            </div>
        </a>
    );
};

export default CardItem;