'use client';

import React, { useCallback, useRef } from 'react';
import ListCatsViews from '@/src/views/Cats';
import useCats from '@/src/utils/hooks/useCats';
import useGetAllCat from './actions/useGetAllCat';

const ListCatsPage = () => {
    const { params, setParams } = useCats();
    const { isLoading, records } = useGetAllCat(params);

    const observer: any = useRef();

    const lastCatsElementRef = useCallback(
        (node: any) => {
          if (isLoading) {
            return;
          };
          if (observer.current) observer.current.disconnect();
          observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && records.length > 0 && !params.name) {
                setParams({
                    ...params,
                    page: params.page + 1,
                });
            }
          });
          if (node) observer.current.observe(node);
        },
        [isLoading, records, setParams, params]
      );

    return (
        <ListCatsViews cats={records} lastCatsElementRef={lastCatsElementRef} />
    );
};

export default ListCatsPage;