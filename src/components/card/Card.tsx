import React from 'react';
import CardItem from './CardItem';

interface CardProps {
    cats: any;
    lastCatsElementRef: any
}

const Card: React.FC<CardProps> = ({ cats, lastCatsElementRef }) => {

    return (
        <div
            className='
                grid
                grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-5
                xl:grid-cols-5
                gap-4
            '
        >
            {
                cats?.map((catItem: any, catIndex: number) => {
                    if(cats.length === catIndex + 1) {
                        return (
                            <CardItem 
                                key={catIndex} 
                                cat={catItem}  
                                lastCatsElementRef={lastCatsElementRef}
                            />
                            )
                        } else {
                            return (
                                <CardItem 
                                    key={catIndex} 
                                    cat={catItem}  
                                    lastCatsElementRef={lastCatsElementRef}
                                />
                        )
                    }
                }
                )
            }
        </div>
    );
};

export default Card;