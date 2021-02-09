import React from 'react';
import { ITicket, LaneProps } from '../models/board';
import { Ticket } from '../components/Ticket';
import { LaneWrapper } from '../styled-components/styled-components';

export const Lane: React.FC<LaneProps> = ({ tickets , title }: LaneProps) => {
    return (
        <LaneWrapper>
          <h3>{title}</h3>  
          {tickets.map((item : ITicket) => <Ticket key={item.id} ticket={item}/>)}
        </LaneWrapper>
    )
}