export interface ITicket {
    id: number;
    title: string;
    body: string;
    lane: number
}

export interface TicketProps {
    ticket: ITicket
}

export interface LaneProps {
    tickets: ITicket[],
    title: string;
    loading: boolean;
    error: string
}

export interface IBoardData {
    data: ITicket[];
    loading: boolean;
    error: string
}

export type ILane = {
    id: number,
    title: string
}

export const lanes: ILane[] = [
 {
     id: 1,
     title: 'To Do'
 },
 {
     id: 2,
     title: 'In Progress'
 },
 {
     id: 3,
     title: 'Review'
 },
 {
     id: 4,
     title: 'Done'
 }
]