import {  TicketProps } from '../models/board';
import { TicketWrapper, Body, Title, Alert } from '../styled-components/styled-components';

export const Ticket:React.FC<TicketProps> = ({ ticket, loading, error }: TicketProps) => {
  const { title, body } = ticket;
  return (
      <TicketWrapper>
          {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
          <Title>{title}</Title>
          <Body>{body}</Body>
      </TicketWrapper>
  )
}