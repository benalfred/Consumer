<template>
  <div>
    <div class="row mb-3">
      <div class="col-12">
        <div class="list-single-main-wrapper fl-wrap" id="sec2">
          <article>
            <div class="list-single-main-item fl-wrap snippet-items">
              <div class="row">
                <div class="col-md-9">
                  <h3 class="snippet-title">
                    Take a Survey with
                    <span style="color: #e57718">top Industries</span>
                  </h3>
                </div>
              </div>
              <span class="fw-separator"></span>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div
      class="container-fluid bg-trasparent my-4 p-3"
      style="position: relative"
    >
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-2 g-3">
        <div class="col" v-for="sector in sectors" :key="sector.Id">
          <div class="card h-100 shadow-sm">
            <img
              src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="clearfix mb-3">
                <span class="float-start badge rounded-pill bg-primary">{{
                  sector.Name
                }}</span>
                <span class="float-end price-hp">12354.00€</span>
              </div>
              <h5 class="card-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quidem eaque ut eveniet aut quis rerum. Asperiores accusamus
                harum ducimus velit odit ut. Saepe, iste optio laudantium sed
                aliquam sequi.
              </h5>
              <div class="text-center my-4">
                <nuxt-link
                  :to="`/industry/${sector.Id}/${sector.Name}`"
                  class="btn btn-warning"
                  >Explore the {{ sector.Name }} industry</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-pagination
        v-model="pageForOpinions2"
        :total-rows="totalRow"
        :per-page="pageSize"
        align="center"
        size="sm"
        class="my-0 text-center"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "headerr",
  data() {
    return {
      sectors: [],
      page: 1,
      pageSize: 1,
      pageForOpinions2: 1,
      totalRow: 0,
      bpg: 1,
    };
  },
  async fetch() {
    await this.fetchSectors();
  },
  methods: {
    makeToast() {
      this.$bvToast.toast(`${this.$store.state.notifications.message}`, {
        title: this.$store.state.notifications.type,
        autoHideDelay: 5000,
        variant:
          this.$store.state.notifications.type === "error" ? "danger" : "info",
        solid: true,
      });
    },
    async fetchSectors() {
      this.pageSize -= 1;
      try {
        const sector = await this.$axios.get(
          `Industries/GetLiteIndustries?page=${this.page}&pageSize=${this.pageSize}`
        );
        this.totalRow = sector.data.TotalCount;
        this.sectors = sector.data.Results;
        this.$store.commit("notifications/setSectors", sector.data.Results);
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

:root {
  --font1: "Heebo", sans-serif;
  --font2: "Fira Sans Extra Condensed", sans-serif;
  --font3: "Roboto", sans-serif;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  font-family: var(--font3);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
article .list-single-main-item {
  margin-bottom: 0;
}
.snippet-items {
  padding: 15px 16px;
}
.list-single-main-item {
  padding: 30px;
  border-radius: 100%;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-bottom: 20px;
}

.fl-wrap {
  float: left;
  width: 100%;
  position: relative;
}

h2 {
  font-weight: 900;
}

.container-fluid {
  max-width: 1200px;
}

.card {
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  border: 0;
  border-radius: 1rem;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(1rem - 1px);
  border-top-right-radius: calc(1rem - 1px);
}

.card h5 {
  overflow: hidden;
  height: 56px;
  font-weight: 900;
  font-size: 1rem;
}

.card-img-top {
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  padding: 30px;
}

.card h2 {
  font-size: 1rem;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}

.label-top {
  position: absolute;
  background-color: #8bc34a;
  color: #fff;
  top: 8px;
  right: 8px;
  padding: 5px 10px 5px 10px;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 3px;
  text-transform: uppercase;
}

.top-right {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 900;
  background: #ff5722;
  line-height: 90px;
  text-align: center;
  color: white;
}

.top-right span {
  display: inline-block;
  vertical-align: middle;
}

@media (max-width: 768px) {
  .card-img-top {
    max-height: 250px;
  }
}

.over-bg {
  background: rgba(53, 53, 53, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
}

.btn {
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px 50px 5px 50px;
}

.box .btn {
  font-size: 1.5rem;
}

@media (max-width: 1025px) {
  .btn {
    padding: 5px 40px 5px 40px;
  }
}

@media (max-width: 250px) {
  .btn {
    padding: 5px 30px 5px 30px;
  }
}

.btn-warning {
  background: none #f7810a;
  color: #ffffff;
  fill: #ffffff;
  border: none;
  text-decoration: none;
  outline: 0;
  box-shadow: -1px 6px 19px rgba(247, 129, 10, 0.25);
  border-radius: 100px;
}

.btn-warning:hover {
  background: none #ff962b;
  color: #ffffff;
  box-shadow: -1px 6px 13px rgba(255, 150, 43, 0.35);
}

.bg-success {
  font-size: 1rem;
  background-color: #f7810a !important;
}

.bg-danger {
  font-size: 1rem;
}

.price-hp {
  font-size: 1rem;
  font-weight: 600;
  color: darkgray;
}

.amz-hp {
  font-size: 0.7rem;
  font-weight: 600;
  color: darkgray;
}

.fa-question-circle:before {
  color: darkgray;
}

.fa-plus:before {
  color: darkgray;
}

.box {
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
}

.box-img {
  max-width: 300px;
}

.thumb-sec {
  max-width: 300px;
}

@media (max-width: 576px) {
  .box-img {
    max-width: 200px;
  }

  .thumb-sec {
    max-width: 200px;
  }
}

.inner-gallery {
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 1px;
  display: inline-block;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
}

@media (max-width: 370px) {
  .box .btn {
    padding: 5px 40px 5px 40px;
    font-size: 1rem;
  }
}

.disclaimer {
  font-size: 0.9rem;
  color: darkgray;
}

.related h3 {
  font-weight: 900;
}

footer {
  background: #212529;
  height: 80px;
  color: #fff;
}
</style>
