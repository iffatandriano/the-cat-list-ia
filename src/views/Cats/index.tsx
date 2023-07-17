'use client';
import Container from '@/src/components/Container';
import Card from '@/src/components/card/Card';
import { getAllCats, searchCatByName } from '@/src/services';
import useCats from '@/src/utils/hooks/useCats';
import React, { useCallback, useState } from 'react';

interface ListCatsViewsProps {
    cats: any;
    lastCatsElementRef: any
}

const ListCatsViews: React.FC<ListCatsViewsProps> = ({ cats, lastCatsElementRef }) => {
    const [searchCat, setSearchCat] = useState('');
    const { setParams, params } = useCats();

    const onChangeSearch = (e: any) => {
        const value = e.target.value;
        setSearchCat(value);

        if(value === '') {
            setParams({
                ...params,
                page: 1,
                name: null,
            })
        } else {
            setParams({
                ...params,
                page: 1,
                name: value
            })
        }
    }

    return (
        <Container>
            <div className='py-1 px-4 flex flex-col gap-3'>
                <div className='flex flex-fow items-center justify-between gap-4'>
                    <div className='font-semibold text-2xl'>
                        Cat List :
                    </div>
                    <input
                        placeholder='Search cat by name'
                        type='text'
                        value={searchCat}
                        onChange={(e) => onChangeSearch(e)}
                        className={`
                            w-[50vw]
                            h-12
                            p-4
                            pt-4
                            flex
                            items-center
                            font-light
                            bg-white
                            border-2
                            rounded-md
                            outline-none
                            transition
                            border-neutral-300
                            focus:border-black
                        `}
                    />
                </div>
                <Card cats={cats} lastCatsElementRef={lastCatsElementRef} />
            </div>
        </Container>
    );
};

export default ListCatsViews;