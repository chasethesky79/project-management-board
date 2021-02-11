import { ILane, IBoardAndLanes } from '../models/board';
import { Lane } from '../components/Lane';
import { BoardWrapper } from '../styled-components/styled-components';
import { withDataFetching } from '../components/withDataFetching';

const Board: React.FC<IBoardAndLanes> = ({ data, loading, error, lanes }: IBoardAndLanes) => {
    return (
        <BoardWrapper>
            {data && lanes.map((lane: ILane)=> {
                const ticketsForLane = data.filter(item => item.lane === lane.id);
                return <Lane loading={loading} error={error} key={lane.id} title={lane.title} tickets={ticketsForLane}/>
            })}
        </BoardWrapper>
    )
}

export default withDataFetching(Board);