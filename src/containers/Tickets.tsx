import { IBoardData, ITicket } from '../models/board';
import { BoardWrapper, Alert } from '../styled-components/styled-components';
import { withDataFetching } from '../components/withDataFetching';
import { Ticket } from '../components/Ticket';

const Tickets: React.FC<IBoardData> = ({ data, loading, error }: IBoardData) => {
    return (
        <BoardWrapper>
            {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
            {data && data.map((ticket: ITicket)=> <Ticket key={ticket.id} ticket={ticket} />)}
        </BoardWrapper>
    )
}

export default withDataFetching(Tickets);