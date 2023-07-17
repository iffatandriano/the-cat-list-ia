import { getImageById } from '@/src/services';
import useCats from '@/src/utils/hooks/useCats';
import React, { useCallback, useEffect } from 'react'

export default function useGetDetailsAllCat(id: string) {
    const { 
        isLoading,
        record, 
        setIsLoading,
        setRecord,
        setError,
        error,
        resetName,
    } = useCats();

    const sendQuery = useCallback(async (id: string) => {
        try {
            await setError(false);
            
            if(!id) {
                return;
            }
            
            const resp = await getImageById(id);
            await setRecord(resp);

            setIsLoading(false);
            await resetName();
        } catch(error: any) {
            setError(error);
        }
    }, [setIsLoading, setError, setRecord, resetName]);
    
    useEffect(() => {
        sendQuery(id);
    }, [id, sendQuery]);

    return {
        isLoading,
        record,
        error
    }
}