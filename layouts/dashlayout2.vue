<template>
  <div>
    <div>
      <div id="wrapper">
        <ul
          :class="{ 'slide-out': state }"
          class="navbar-nav sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <!-- Sidebar - Brand -->
          <a
            class="sidebar-brand d-flex pb-5 pt-5 align-items-center justify-content-center"
            href="index.html"
          >
            <div class="sidebar-brand-icon rotate-n-15"></div>
          </a>
          <!-- sidebar-brand -->
          <div
            class="d-flex text-white pb-4 pt-5 align-items-center justify-content-center"
            href="index.html"
            style="background-color: #626d73"
          >
            <b-media>
              <template #aside>
                <img
                  src="~/assets/img/vector4.png"
                  class="img-fluid p-2 mt-2 img1"
                  alt="Media Aside"
                />
              </template>

              <div class="sidebar-brand-text">
                <h6>Admin</h6>
                <p>admin@email.com</p>
              </div>

              <!-- b-[Optional: add media children here for nesting] -->
            </b-media>
          </div>

          <!-- Divider -->
          <hr class="sidebar-divider my-0" />

          <!-- Nav Item - Dashboard -->
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/admin/dashboard">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span></nuxt-link
            >
          </li>

          <!-- Divider -->

          <!-- Nav Item - Pages Collapse Menu -->
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Industries</span>
            </a>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">sectors</h6>
                <nuxt-link
                  v-for="sector in sectors"
                  :key="sector.Id"
                  class="collapse-item"
                  :to="`/admin/industry/detail/${sector.Id}/${sector.Name}`"
                  >{{ sector.Name }}</nuxt-link
                >
              </div>
            </div>
          </li>

          <!-- Nav Item - Utilities Collapse Menu -->
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i class="fas fa-fw fa-wrench"></i>
              <span>Settings</span>
            </a>
            <div
              id="collapseUtilities"
              class="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Utilities:</h6>
                <nuxt-link class="collapse-item" to="/admin/email-setting"
                  >email setting</nuxt-link
                >
                <nuxt-link class="collapse-item" to="/admin/review-setting"
                  >review-setting</nuxt-link
                >
                <nuxt-link class="collapse-item" to="/admin/chartjs">Chart</nuxt-link>
                <nuxt-link class="collapse-item" to="/admin/add-rating"
                  >Add rating</nuxt-link
                >
              </div>
            </div>
          </li>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->


            <!-- Divider -->


            <!-- Nav Item - Pages Collapse Menu -->


            <!-- Nav Item - Utilities Collapse Menu -->


            <!-- Divider -->
            <!-- <hr class="sidebar-divider">


            <div class="sidebar-heading">
                Addons
            </div> -->

          <!-- Nav Item - Pages Collapse Menu -->

          <!-- Nav Item - Charts -->
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Change Password</span></a
            >
          </li>

          <!-- Nav Item - Tables -->
          <li class="nav-item" @click="$auth.logout()">
            <nuxt-link to="#" class="nav-link" >
              <i class="fas fa-fw fa-table"></i>
              <span>Logout</span></nuxt-link
            >
          </li>

          <!-- Divider -->
          <hr class="sidebar-divider d-none d-md-block" />

          <!-- Sidebar Toggler (Sidebar) -->

          <!-- Sidebar Message -->
        </ul>

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <nav
              class="navbar navbar-expand d-block d-sm-none navbar-light bg-white topbar mb-4 static-top"
            >
              <!-- Sidebar Toggle (Topbar) -->
              <button
                @click="toggle"
                id="sidebarToggleTop"
                class="btn btn-link rounded-circle mr-3"
              >
                <i class="fa fa-bars "></i>
              </button>

              <!-- Topbar Search -->
              <!-- <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form> -->


            </nav>

            <div class="">
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    !this.sectors.length ? this.fetchSectors() : "";
  },
  data() {
    return {
      state: false,
      page: 1,
      pageSize: 1,
      bpg: 1,
    };
  },
  name: "dashlayout2",
  computed: {
    sectors() {
      return this.$store ? this.$store.state.notifications.sectorsFetched : [];
    },
  },
  head() {
    return {
      script: [],
    };
  },
  methods: {
      makeToast() {
      this.$bvToast.toast(`${this.$store.state.notifications.message}`, {
        title: this.$store.state.notifications.type,
        autoHideDelay: 5000,
        variant: this.$store.state.notifications.type === "error" ? "danger" : "info",
        solid: true,
      });
    },
    toggle() {
      this.state = !this.state;
    },
    async fetchSectors() {
     this.pageSize -= 1;
      try {
        const sector = await this.$axios.get(
          `Industries/GetLiteIndustries?page=${this.page}&pageSize=${this.pageSize}`
        );
        this.$store.commit("notifications/setSectors", sector.data.Results);
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
  },
};
</script>

<style>
.nuxt-exact-link-active {
  color: #e57718;
}
.img1 {
  background: #e57718;
  border-radius: 19.5px;
}

a {
  font-family: Poppins;
}

.sidebar {
  background-color: #f3ceae;
  color: black !important;
}

@media screen and (max-width: 640px) {
  .slide-out {
    margin-left: -100px;
    transition: margin 0.4s ease-in-out;
  }
}

@media screen and (min-width: 800px) {
  .slide-out {
    margin-left: -220px;
    transition: margin 0.4s ease-in-out;
  }
}
</style>
