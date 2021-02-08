export interface IBoardItem {
    id: number;
    title: string;
    body: string;
    lane: number
}

export interface IBoardData {
    data: IBoardItem[];
    loading: boolean;
    error: string
}

type Lane = {
    id: number,
    title: string
}

export const lanes: Lane[] = [
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