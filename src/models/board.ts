export interface ITicket {
    id: string;
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
    marginRight: boolean;
    onDragStart: (e: DragEvent, id: string) => void
}

export interface LaneProps extends IErrorDetails {
    tickets: ITicket[],
    title: string;
    onDragStart: (e: DragEvent, id: string) => void
}

export interface IBoardData extends IErrorDetails {
    data: ITicket[];
    onDragStart?: (e: DragEvent, id: string) => void
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

export const onDragStart = (e: DragEvent, id: string) => e.dataTransfer?.setData('id', id);