import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import Image from 'next/image';


import { 
    AiOutlineArrowDown,
    AiOutlineArrowUp
} from 'react-icons/ai';

import RatingStar from '../../RatingStar';

interface CardDetailsProps {
    detail: any;
    imgUrl: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({
    detail,
    imgUrl
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { getCollapseProps, getToggleProps  } = useCollapse({ isExpanded });
    
    return (
        <div
            className='
                grid
                grid-cols-1
                sm:grid-cols-1
                md:grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-2
                gap-6
            '
        >
            <div className='flex flex-col gap-6'>
                <div className='flex flex-row justify-between gap-1'>
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-2xl'>
                            {detail && detail?.breeds[0]?.name}
                        </div>
                        <div className='bg-neutral-100 w-fit p-3 h-8 flex justify-center items-center rounded-lg text-sm'>
                            {detail && detail?.breeds[0]?.origin}
                        </div>
                    </div>
                    <a 
                        href={detail && detail?.breeds[0]?.wikipedia_url}
                        className='w-24 h-8 bg-orange-400 flex items-center justify-center text-sm rounded-md'
                    >
                        Wikipedia
                    </a>
                </div>
                <Image
                    src={imgUrl}
                    alt="img_cats_detail"
                    className='
                        hover:border 
                        hover:border-neutral-900
                        hover:rounded-md
                        object-cover
                    '
                    width={450}
                    height={112}
                />
                <div className='flex flex-col gap-2'>
                    <div className='font-semibold text-md'>
                        Weight :
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='bg-neutral-100 w-fit p-3 h-8 flex justify-center items-center rounded-lg text-sm'>
                            Imperial: {detail && detail?.breeds[0]?.weight?.imperial}
                        </div>
                        <div className='bg-neutral-100 w-fit p-3 h-8 flex justify-center items-center rounded-lg text-sm'>
                            Metric: {detail && detail?.breeds[0]?.weight?.metric}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='font-semibold text-md'>
                        Description :
                    </div>
                    <p className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                        {detail && detail?.breeds[0]?.description}
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <div 
                    className='flex flex-row justify-between items-center gap-3'
                    {...getToggleProps({
                        onClick: () => setIsExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    <div className='font-semibold text-lg'>
                        Cat Details
                    </div>
                    <div className='text-md font-semibold'>
                        {!isExpanded ? <AiOutlineArrowUp size={14} /> : <AiOutlineArrowDown size={14} />}
                    </div>
                </div>
                <hr />
                <div {...getCollapseProps({
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8
                    }
                })} className='gap-2'>
                    <div className='font-semibold text-sm'>
                        Temperament:
                    </div>
                    <div className='bg-neutral-100 w-fit p-3 h-8 flex justify-center items-center rounded-lg text-sm'>
                        {detail && detail?.breeds[0]?.temperament}
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                            <div className='flex flex-col gap-1'>
                                <div className='font-semibold text-sm'>
                                    Energy:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.energy_level} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                            <div className='font-semibold text-sm'>
                                Experimental:
                            </div>
                            <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                <RatingStar star={detail && detail?.breeds[0]?.experimental} />
                            </div>
                            </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                            <div className='flex flex-col gap-1'>
                                <div className='font-semibold text-sm'>
                                    Hairless:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.hairless} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='font-semibold text-sm'>
                                    Health issues:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.health_issues} />
                                </div>
                            </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                            <div className='flex flex-col gap-1'>
                                <div className='font-semibold text-sm'>
                                    Adaptability:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.adaptability} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='font-semibold text-sm'>
                                    Intelligence:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.intelligence} />
                                </div>
                            </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                            <div className='flex flex-col gap-1'>
                                <div className='font-semibold text-sm'>
                                    Affection:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.affection_level} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='font-semibold text-sm'>
                                    Bidability:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.bidability} />
                                </div>
                            </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                            <div className='flex flex-col gap-1'>
                                <div className='font-semibold text-sm'>
                                    Child friendly:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.child_friendly} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='font-semibold text-sm'>
                                    Stranger friendly:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.stranger_friendly} />
                                </div>
                            </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                            <div>
                                <div className='font-semibold text-sm'>
                                    Cat friendly:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.cat_friendly} />
                                </div>
                            </div>
                            <div>
                                <div className='font-semibold text-sm'>
                                    Dog friendly:
                                </div>
                                <div className='bg-neutral-100 w-fit p-3 h-fit flex justify-center items-center rounded-lg text-sm'>
                                    <RatingStar star={detail && detail?.breeds[0]?.dog_friendly} />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;