export const state = () => ({
    type: null,
    message: null,
    bpg: 1,
    notification: null,
    sector2: [],
    genderOptions: [],
    stateOptions: [],
    lgaOptions: [],
    Sex: null,
    StateId: null,
    LGAId: null
})

export const mutations = {
    setSector(state, sectors) {
        state.sector2 = sectors
    },
    SetStateId(state, value) {
        state.StateId = value
    },
    setBpg(state, value) {
        state.bpg = value
    },
    setLGA(state, value) {
        state.lgaOptions = value
    },
    setLocations(state, value) {
        state.stateOptions = value
    },
    setGenders(state, value) {
        state.genderOptions = value
    },
    setLgaId(state, id) {
        state.LGAId = id
    },
    setGenderId(state, id) {
        state.Sex = id
    }
}

export const actions = {
    makeToast({ rootState }, ) {
        this._vm.$bvToast.toast(`${rootState.notifications.message}`, {
            title: rootState.notifications.type,
            autoHideDelay: 7000,
            variant: rootState.notifications.type === "error" ? "danger" : "info",
            solid: true,
        });
    },
    takeNotificationData({ commit }, notification) {
        commit('viewNotification', notification)
    },
    async getFeatures({ commit }, id) {
        commit('SetStateId', id)
        try {
            const response = await this.$axios.get(`/Locations/GetLGAs?stateId=${id}`);
            commit('setLGA', response.data)
        } catch (e) {
            commit("notifications/error", "something went wrong", { root: true }, );
            dispatch('makeToast')
        }
    },

    async getStates({ commit, state }) {
        try {
            const locations = await this.$axios.get("Locations/GetNigeriaStates");
            this.stateOptions = locations.data;
            commit('setLocations', locations.data)
        } catch {
            commit("notifications/error", "something went wrong", { root: true }, );
            dispatch('makeToast')
        }
    },
    async getGenders({ commit }, ) {
        console.log()
        try {
            const genders = await this.$axios.get("Account/GetGenders");
            this.genderOptions = genders.data;
            commit('setGenders', genders.data)
        } catch {
            commit("notifications/error", "something went wrong", { root: true }, );
            dispatch('makeToast')
        }
    },

    lgaAction({ commit }, id) {
        commit('setLgaId', id)
    },
    genderAction({ commit }, id) {
        commit('setGenderId', id)
    },

    async createUserAccount({ commit, state, rootState, dispatch }, password, confirm_password) {
        let form = {
            LGAId: state.LGAId,
            StateId: state.StateId,
            Sex: state.Sex,
            Password: password,
            ConfirmPassword: confirm_password,
            Firstname: rootState.auth.user.Firstname,
            Surname: rootState.auth.user.Surname
        }
        try {
            const response = await this.$axios.post(
                "/Account/UpdateProfileAndSetPassword",
                form
            );
            commit('setGenderId', null)
            commit('setLgaId', null)
            commit('SetStateId', null)
            return true
        } catch (e) {
            if (e.response) {
                commit(
                    "notifications/error", "Invalid Password!!!, password must have a character,number, capital letter and must be minimum 8 characters", { root: true },
                );
                dispatch('makeToast')
                return false
            } else {
                commit("notifications/error", "Something went wrong", { root: true }, );
                dispatch('makeToast')
                return false
            }
        }
    },

    async fetchSectors() {
        this.fetchSectorSpinner = true;
        this.page = this.bpg;
        this.page--;
        try {
            const sector = await this.$axios.get(
                `Industries/GetLiteIndustries?page=${this.page}&pageSize=${this.pageSize}`
            );
            this.sectors2 = []
            this.totalRows = sector.data.TotalCount;
            if (sector.data.Results.length) {
                sector.data.Results.filter((sec) => {
                    if (this.sectors2.length != 5) {
                        this.sectors2.push(sec);
                    }
                });
                this.$store.commit("notifications/setSector", this.sectors2)
                let ctx = this;
                ctx.sectors3 = []
                sector.data.Results.filter((sec, index) => {
                    if (index > 4) {
                        ctx.sectors3.push(sec);
                    }
                });
            }
        } catch (e) {
            console.log(e);
            this.$store.commit("notifications/error", "something went wrong");
            this.makeToast();
        }
    },
}