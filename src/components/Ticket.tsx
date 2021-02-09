import {  ITicket, TicketProps } from '../models/board';
import { TicketWrapper, Body, Title } from '../styled-components/styled-components';

export const Ticket:React.FC<TicketProps> = ({ ticket }: TicketProps) => {
  const { title, body } = ticket;
  return (
      <TicketWrapper>
          <Title>{title}</Title>
          <Body>{body}</Body>
      </TicketWrapper>
  )
}