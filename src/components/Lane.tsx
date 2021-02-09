import React from 'react';
import { ITicket, LaneProps } from '../models/board';
import { Ticket } from '../components/Ticket';

export const Lane: React.FC<LaneProps> = ({ tickets }: LaneProps) => {
    return (
        <div>
        {tickets.map((item : ITicket) => <Ticket key={item.id} ticket={item}/>)}
        </div>
    )
}