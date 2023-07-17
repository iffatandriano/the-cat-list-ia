import React, { useCallback, useEffect } from 'react'
import { getAllCats, searchCatByName } from '@/src/services';
import useCats from '@/src/utils/hooks/useCats'
import _ from 'lodash';
import { Params } from '@/src/types';

export default function useGetAllCat(params: Params) {
  const {
    isLoading,
    setIsLoading,
    records,
    setRecords,
    setSearchRecords,
    setError,
    error
  } = useCats();

  const sendQuery = useCallback(async (params: Params) => {
    try {
      await setIsLoading(true);
      if(error) {
        return;
      }
      await setError(false);
      if(params.name) {
        const resp = await searchCatByName(params);
        
        if(_.isEmpty(resp)) {
          return;
        } else {
          await setSearchRecords(resp);
        }
      } else {
        const resp = await getAllCats(params);
        
        if(_.isEmpty(resp)) {
          return;
        } else {
          await setRecords(resp);
        }
      }
      setIsLoading(false);
    } catch(error: any) {
      setError(error);
    }
  }, [setIsLoading, setError, setRecords, setSearchRecords, error]);

  useEffect(() => {
    sendQuery(params);
  }, [params, sendQuery])

  return { isLoading, records, error }
}
