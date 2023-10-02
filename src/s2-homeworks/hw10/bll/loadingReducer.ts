import {AppStoreType} from "./store";

const initState = {
    isLoading: false,
}

export const loadingReducer = (state: {isLoading: boolean} = initState, action: LoadingActionType): {isLoading: boolean} => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
