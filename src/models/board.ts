export interface ITicket {
    id: number;
    title: string;
    body: string;
    lane: number
}

export interface IErrorDetails {
    loading?: boolean;
    error?: string
}

export interface TicketProps {
    ticket: ITicket;
    marginRight: boolean
}

export interface LaneProps extends IErrorDetails {
    tickets: ITicket[],
    title: string;
}

export interface IBoardData extends IErrorDetails {
    data: ITicket[];

}

export interface IDataSourceProps {
    dataSource: string;
}

type ILaneList = {
    lanes: ILane[]
}

export interface IBoardAndLanes extends IBoardData, ILaneList {}

export type ILane = {
    id: number,
    title: string
}

export const LANES: ILane[] = [
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