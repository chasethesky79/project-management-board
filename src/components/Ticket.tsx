import {  TicketProps } from '../models/board';
import { TicketWrapper, Body, Title } from '../styled-components/styled-components';

export const Ticket:React.FC<TicketProps> = ({ ticket, marginRight }: TicketProps) => {
  const { title, body } = ticket;
  return (
      <TicketWrapper marginRight={marginRight}>
          <Title>{title}</Title>
          <Body>{body}</Body>
      </TicketWrapper>
  )
}