export const state = () => ({
    type: null,
    message: null,
    notification: null,
    sector2: []
})

export const mutations = {
    success(state, message) {
        state.type = 'success'
        state.message = message
    },
    setSector(state, sectors) {
        state.sector2 = sectors
    },
    error(state, message) {
        state.type = 'error'
        state.message = message
    },
    clear(state) {
        state.type = null
        state.message = null
    },
    viewNotification(state, notification) {
        state.notification = notification
    }
}

export const actions = {
    takeNotificationData({ commit }, notification) {
        commit('viewNotification', notification)
    },
    success({ commit }, message) {
        commit('success', message)
    },
    error({ commit }, message) {
        commit('error', message)
    },
    clear({ commit }) {
        commit('clear')
    }
}