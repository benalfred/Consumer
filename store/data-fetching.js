export const state = () => ({
    type: null,
    message: null,
    bpg: 1,
    notification: null,
    sector2: [],
    genderOptions: [],
    stateOptions: [],
    lgaOptions: [],
    form: {
        Sex: null,
        StateId: null,
        LGAId: null
    }
})

export const mutations = {
    setSector(state, sectors) {
        state.sector2 = sectors
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
    }
}

export const actions = {
    makeToast() {
        this.$bvToast.toast(`${this.$store.state.notifications.message}`, {
            title: this.$store.state.notifications.type,
            autoHideDelay: 7000,
            variant: this.$store.state.notifications.type === "error" ? "danger" : "info",
            solid: true,
        });
    },
    takeNotificationData({ commit }, notification) {
        commit('viewNotification', notification)
    },
    async getFeatures({ commit }, id) {
        try {
            const response = await this.$axios.get(`/Locations/GetLGAs?stateId=${id}`);
            this.lgaOptions = response.data;
            commit('setLGA', response.data)
        } catch (e) {
            commit("notifications/error", "something went wrong");
            this.makeToast();
        }
    },

    async getStates({ commit }) {
        try {
            const locations = await this.$axios.get("Locations/GetNigeriaStates");
            this.stateOptions = locations.data;
            commit('setLocations', locations.data)
        } catch {
            commit("notifications/error", { root: true },
                "something went wrong");
            this.makeToast();
        }
    },
    async getGenders({ commit }) {
        try {
            const genders = await this.$axios.get("Account/GetGenders");
            this.genderOptions = genders.data;
            commit('setGenders', genders.data)
        } catch {
            commit("notifications/error", { root: true }, "something went wrong");
            this.makeToast();
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