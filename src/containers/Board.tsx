import { ILane, IBoardAndLanes, ITicket, onDragStart } from '../models/board';
import { Lane } from '../components/Lane';
import { BoardWrapper } from '../styled-components/styled-components';
import { withDataFetching } from '../components/withDataFetching';
import { useState, useEffect } from 'react';

const Board: React.FC<IBoardAndLanes> = ({ data, loading, error, lanes }: IBoardAndLanes) => {
    const initialState: ITicket[] = [];
    const [ tickets, setTickets ] = useState(initialState);
    useEffect(() => {
       setTickets(data)
    }, [data])

    return (
        <BoardWrapper>
            {data && lanes.map((lane: ILane)=> {
                const ticketsForLane = tickets.filter(item => item.lane === lane.id);
                return <Lane loading={loading} error={error} key={lane.id} title={lane.title} tickets={ticketsForLane} onDragStart={onDragStart}/>
            })}
        </BoardWrapper>
    )
}

export default withDataFetching(Board);