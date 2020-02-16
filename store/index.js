export const state = () => ({
    _currentUser: null,
    _token: null,
    toast: null //if we have an alert to show    
})

export const mutations = {
    
}

export const getters = {
    isLoggedIn(state) {
        return state.auth.loggedIn
    },
    memberProfile(state) {
        return state.auth.user
    }
}