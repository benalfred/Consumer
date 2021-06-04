export const state = () => ({
    type: null,
    message: null,
    bpg: 1,
    notification: null,
    sector2: []
})

export const mutations = {
    setSector(state, sectors) {
        state.sector2 = sectors
    },
    setBpg(state, value) {
        state.bpg = value
    }
}

export const actions = {
    takeNotificationData({ commit }, notification) {
        commit('viewNotification', notification)
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