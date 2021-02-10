import { IBoardData, lanes, ILane } from '../models/board';
import { useState, useEffect } from 'react';
import { Lane } from '../components/Lane';
import { LanesContainer } from '../styled-components/styled-components'

export const Board: React.FC<{}> = () => {
    const initialBoardData: IBoardData = {
        data: [],
        loading: true,
        error: ''
    }
    const [boardData, setBoardData] = useState(initialBoardData);
    const { loading, error } = boardData;
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
        <LanesContainer>
            {boardData && boardData.data && lanes.map((lane: ILane)=> {
                const ticketsForLane = boardData.data.filter(item => item.lane === lane.id);
                return <Lane loading={loading} error={error} key={lane.id} title={lane.title} tickets={ticketsForLane}/>
            })}
        </LanesContainer>
    )
}