export interface Task {
    id: number;
    name: string;
    description: string;
    date: Date;
    state: State;
    uid: string;
}

export enum State {
    TODO = 1,
    WIP = 2,
    DONE = 3
}
