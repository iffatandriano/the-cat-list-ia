import Container from '@/src/components/Container';
import CardDetails from '@/src/components/card/details/CardDetails';
import React from 'react';

interface DetailsCatProps {
    details: any;
}

const DetailsCat: React.FC<DetailsCatProps> = ({ details }) => {
    return (
        <Container>
            <div className='py-2 px-4 flex flex-col gap-3'>
                <CardDetails 
                    detail={details} 
                    imgUrl={details?.url}
                />
            </div>
        </Container>
    );
};

export default DetailsCat;