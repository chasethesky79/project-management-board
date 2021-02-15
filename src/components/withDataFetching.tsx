import { useState, useEffect } from "react";
import { IBoardData, IDataSourceProps, IBoardAndLanes } from "../models/board"
import { LANES } from '../models/board';

export const withDataFetching = (WrappedComponent: React.FC<IBoardAndLanes>) => {
    return ({ dataSource }: IDataSourceProps) => {
        const initialBoardData: IBoardData = {
            data: [],
            loading: true,
            error: ''
        }
        const [boardData, setBoardData] = useState(initialBoardData);
        const wrappedComponentProps: IBoardAndLanes = {...boardData, ...{ lanes: LANES }}
        useEffect(() => {
            async function fetchData() {
            try {
                const tickets = await fetch(dataSource);
                const result = await tickets.json();
                if (result) {
                    setBoardData({...initialBoardData, data: result, loading: false })
                }
            } catch(error) {
                const { message } = error;
                setBoardData({...initialBoardData, error: message})
            }
         } fetchData();     
         }, []);
         return (
             <WrappedComponent {...wrappedComponentProps}/>
         )
    }
}