import React from 'react';
import { ITicket, LaneProps } from '../models/board';
import { Ticket } from '../components/Ticket';
import { LaneWrapper, Alert } from '../styled-components/styled-components';

export const Lane: React.FC<LaneProps> = ({ tickets , title, loading, error, onDragStart }: LaneProps) => {
    return (
        <LaneWrapper>
          <h3>{title}</h3>
          {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
          {tickets.map((item : ITicket) => <Ticket key={item.id} ticket={item} marginRight onDragStart={onDragStart}/>)}
        </LaneWrapper>
    )
}