
export type ThemeType = {
    themeId: number
}

const initState: ThemeType = {
    themeId: 1,
}

export const themeReducer = (state: ThemeType = initState, action: changeThemeIdType): ThemeType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}
export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
