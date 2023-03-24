import { reducerActionType } from "../types/reducerActionType";

export type UserType = {
    name: string;
    age: number;
}

export const userInitialState: UserType = {
    name: 'Bonieky',
    age: 90
}

export const userReducer = (state: UserType, action: reducerActionType) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name};
        break;
        case 'CHANGE_AGE':
            return {...state, age: action.payload.age};
        break;
        default:
            break;
    }

    return state;
}
