import { IBoardData, ITicket } from '../models/board';
import { BoardWrapper } from '../styled-components/styled-components';
import { withDataFetching } from '../components/withDataFetching';
import { Ticket } from '../components/Ticket';

const Tickets: React.FC<IBoardData> = ({ data, loading, error }: IBoardData) => {
    return (
        <BoardWrapper>
            {data && data.map((ticket: ITicket)=> {
                return <Ticket loading={loading} error={error} key={ticket.id} ticket={ticket} />
            })}
        </BoardWrapper>
    )
}

export default withDataFetching(Tickets);