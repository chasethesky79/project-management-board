import { IBoardData, lanes, ILane } from '../models/board';
import { useState, useEffect } from 'react';
import { Lane } from '../components/Lane';

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
    return (
        <div>
            {lanes.map((lane: ILane)=> {
                const ticketsForLane = boardData.data.filter(item => item.id === lane.id);
                return <Lane key={lane.id} tickets={ticketsForLane}/>
            })}
        </div>
    )
}