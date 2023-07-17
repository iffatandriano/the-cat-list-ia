import { Params } from "@/src/types";
import { create } from "zustand";

interface CatsProps {
    isLoading: boolean;
    records: any;
    record: any;
    error: boolean;
    params: Params;
    setRecords: (datas: any) => void;
    setSearchRecords: (datas: any) => void;
    setRecord: (record: any) => void;
    setIsLoading: (values: boolean) => void;
    setParams: (params: Params) => void;
    setError: (value: boolean) => void;
    resetName: () => void;
}

const useCats = create<CatsProps>((set) => ({
    isLoading: true,
    records: [],
    record: {},
    error: false,
    params: {
        limit: 10,
        page: 1,
        name: null,
    },
    setRecords: (datas) => set((prev) => ({
        records: [...prev.records, ...datas]
    })),
    setSearchRecords: (datas) => set({
        records: datas
    }),
    setRecord: (record) => set({
        record: record
    }),
    setIsLoading: (value) => set({
        isLoading: value
    }),
    setParams: (params) => set({
        params: params
    }),
    setError: (value) => set({
        error: value
    }),
    resetName: () => set({
        records: [],
        params: {
            limit: 10,
            page: 1,
            name: null,
        }
    })
}))

export default useCats;