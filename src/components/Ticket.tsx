import {  TicketProps } from '../models/board';
import { TicketWrapper, Body, Title } from '../styled-components/styled-components';

export const Ticket:React.FC<TicketProps> = ({ ticket, marginRight, onDragStart }: TicketProps) => {
  const { title, body, id } = ticket;
  return (
      <TicketWrapper marginRight={marginRight} draggable onDragStart={(e: any) => onDragStart(e, id)}>
          <Title>{title}</Title>
          <Body>{body}</Body>
      </TicketWrapper>
  )
}