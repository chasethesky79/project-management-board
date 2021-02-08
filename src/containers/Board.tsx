import { IBoardData, lanes } from '../models/board';
import { useState, useEffect } from 'react';

export const Board: React.FC<IBoardData> = () => {
    const initialBoardData: IBoardData = {
        data: [],
        loading: true,
        error: ''
    }
    const [boardData, setBoardData] = useState(initialBoardData);
    useEffect(() => {
        async function fetchData() {
        try {
            const tickets = await fetch('../../assets/data.json');
            const data = await tickets.json();
            if (data) {
                setBoardData({...initialBoardData, data, loading: false })
            }
        } catch(error) {
            const { message } = error;
            setBoardData({...initialBoardData, error: message})
        }
     } fetchData();     
     }, []);
    return ()
}