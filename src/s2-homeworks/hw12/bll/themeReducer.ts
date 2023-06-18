const initState = {
    themeId: 1,
}

const SET_THEME_ID = 'SET_THEME_ID'

type changeThemeId = {
    type: typeof SET_THEME_ID
    id: number
}

type ThemeType = typeof initState

export const themeReducer = (state = initState, action: changeThemeId): ThemeType => { // fix any
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID': {
                return {
                    ...state,
                    themeId: action.id
                }
            }
        default:
            return state
    }
}

type changeThemeIdType = {
    type: string,
    id: number
}


export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
