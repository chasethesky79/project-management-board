import { IBoardData, ITicket } from '../models/board';
import { TicketsWrapper, Alert } from '../styled-components/styled-components';
import { withDataFetching } from '../components/withDataFetching';
import { Ticket } from '../components/Ticket';

const Tickets: React.FC<IBoardData> = ({ data, loading, error }: IBoardData) => {
    return (
        <TicketsWrapper>
            {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
            {data && data.map((ticket: ITicket)=> <Ticket key={ticket.id} ticket={ticket} marginRight/>)}
        </TicketsWrapper>
    )
}

export default withDataFetching(Tickets);