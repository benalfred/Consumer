<template>
  <section style="">
    <div class="chart">
<<<<<<< Updated upstream
      <div class="">
        <div class="row">
          <div class="col-md-4 mt-lg-5 container-fluid" style="height: 100%">
            <div class="row">
              <div class="col-md-12 pl-4">
                <div class="mt-5 ChartSideBar">
                  <div class="d-flex">
                    <div>
                      <b-form-checkbox
                        size="lg"
                        style="border-radius: 0px !important"
                      ></b-form-checkbox>
                    </div>
                    <div class="ml-2" style="width: 150px">
                      <b-form-group>
                        <div class="form-group small-select2">
                          <label for="" class="text-dark_" style="">Gender</label>
                          <v-select
                            v-model="selected_gender"
                            :options="genderOptions"
                            placeholder="All"
                            :reduce="(type) => type.Id"
                            label="Name"
                          ></v-select>
                        </div>
                      </b-form-group>
                    </div>
                  </div>

                  <div class="d-flex">
                    <div>
                      <b-form-checkbox
                        size="lg"
                        style="border-radius: 0px !important"
                      ></b-form-checkbox>
                    </div>

                    <div class="ml-2" style="width: 210px">
                      <b-form-group>
                        <div class="form-group small-select2">
                          <label for="" class="text-dark_" style="">Age</label>
                          <v-select
                            v-model="selected_age"
                            :options="ageOptions"
                            placeholder="All"
                            :reduce="(type) => type.Id"
                            label="Name"
                          ></v-select>
                        </div>
                      </b-form-group>
                    </div>
                  </div>

                  <div class="d-flex">
                    <div>
                      <b-form-checkbox
                        size="lg"
                        style="border-radius: 0px !important"
                      ></b-form-checkbox>
                    </div>
                    <div class="ml-2" style="width: 210px">
                      <b-form-group>
                        <div class="form-group small-select2">
                          <label for="" class="text-dark_" style=""
                            >Scd desktoptates</label
                          >
                          <v-select
                            v-model="selected_state"
                            :options="stateOptions"
                            placeholder="All"
                            :reduce="(type) => type.Id"
                            @input="getFeatures"
                            label="Name"
                          ></v-select>
                        </div>
                      </b-form-group>
                    </div>
                  </div>

                  <div class="d-flex">
                    <div>
                      <b-form-checkbox
                        size="lg"
                        style="border-radius: 0px !important"
                      ></b-form-checkbox>
                    </div>
                    <div class="ml-2" style="width: 210px">
                      <b-form-group>
                        <div class="form-group small-select2">
                          <label for="" class="text-dark_" style=""
                            >Local Gov’t Area</label
                          >
                          <v-select
                            v-model="selected_lga"
                            :options="lgaOptions"
                            placeholder="All"
                            :reduce="(type) => type.Id"
                            label="Name"
                          ></v-select>
                        </div>
                      </b-form-group>
                    </div>
                  </div>
                  <!--periods -->
                  <div>
                    <div class="mt-2">
                      <h4 class="font-weight-bold mb-4">Period</h4>

                      <div>
                        <div class="d-flex">
                          <b-form-checkbox
                            size="lg"
                            style="border-radius: 0px !important"
                          ></b-form-checkbox>
                          <h6 class="pt-1 pl-3">Monthly</h6>
                        </div>
                        <div class="number mb-4 ml-4 pl-3">
                          <span>1st</span>
                          <span>2st</span>
                          <span class="span">3st</span>
                          <span class="span">4st</span>
                          <span class="span">5st</span>
                          <span class="span">6st</span>
                        </div>
                      </div>

                      <div>
                        <div class="d-flex">
                          <b-form-checkbox
                            size="lg"
                            style="border-radius: 0px !important"
                          ></b-form-checkbox>
                          <h6 class="pt-1 pl-3">Quartely</h6>
                        </div>
                        <div class="number mb-4 ml-4 pl-3">
                          <span>1st</span>
                          <span class="span">2st</span>
                          <span class="span">3st</span>
                          <span class="span">4st</span>
                        </div>
                      </div>

                      <div>
                        <div class="d-flex">
                          <b-form-checkbox
                            size="lg"
                            style="border-radius: 0px !important"
                          ></b-form-checkbox>
                          <h6 class="pt-1 pl-3">Bi-Annual</h6>
                        </div>
                        <div class="number mb-4 ml-4 pl-3">
                          <span>1st</span>
                          <span class="span">2st</span>
                        </div>
                      </div>

                      <div>
                        <div class="d-flex">
                          <b-form-checkbox
                            size="lg"
                            style="border-radius: 0px !important"
                          ></b-form-checkbox>
                          <h6 class="pt-1 mb-4 pl-3">Annual</h6>
                        </div>
                      </div>

                      <div>
                        <div class="d-flex">
                          <b-form-checkbox
                            size="lg"
                            style="border-radius: 0px !important"
                          ></b-form-checkbox>
                          <h6 class="pt-1 mb-4 pl-3">Date Range</h6>
                        </div>
                        <div class="row d-flex">
                          <div
                            class=" "
                            style="width: 130px; position: relative; left: 50px"
                          >
                            <b-form-group>
                              <div class="form-group small-select2">
                                <v-select
                                  v-model="templateType"
                                  :options="emailTemplatesTypes"
                                  placeholder="Start Date"
                                  :reduce="(type) => type.Id"
                                  @input="fetchEmailTemplate"
                                  label="Name"
                                ></v-select>
                              </div>
                            </b-form-group>
                          </div>
                          <div
                            class=" "
                            style="width: 140px; position: relative; left: 55px"
                          >
                            <b-form-group>
                              <div class="form-group small-select2">
                                <v-select
                                  v-model="templateType"
                                  :options="emailTemplatesTypes"
                                  placeholder="End Date"
                                  :reduce="(type) => type.Id"
                                  @input="fetchEmailTemplate"
                                  label="Name"
                                ></v-select>
                              </div>
                            </b-form-group>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-8 chart-wrap pl-5" style="">
            <div class="mt-5 d-lg-flex">
              <button type="button" class="btn2">GRAPHICAL REPORT</button>
              <button type="button" class="btn3 ml-3">GRAPHICAL REPORT</button>

              <div class="ml-auto mr-5 pr-4">
                <img src="~/assets/img/downloadicon.png" style="cursor: pointer" alt="" />
                <img
                  src="~/assets/img/printicon.png"
                  class="ml-4"
                  style="cursor: pointer"
                  alt=""
                />
              </div>
            </div>
            <div class="row chart-wrap pb-5">
              <div class="col-md-10 ml-lg-5 pt-5">
                <BarChart
                  class="bg-white p-2"
                  :data="barChartData"
                  :options="barChartOptions"
                  :height="350"
                />
              </div>
            </div>
=======
      <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-8">
            <bar-chart />
          </div>

          <div class="col-md-4">
           <canvas id="myChart" width="400" height="400"></canvas>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import BarChart from "~/components/BarChart.vue";
import ChartSideBar from "~/components/ChartSideBar.vue";
export default {
<<<<<<< Updated upstream
  components: { BarChart, ChartSideBar },
  layout: "dashlayout2",
  middleware: "admin",
  data() {
    return {
      genderOptions: [],
      stateOptions: [],
      lgaOptions: [],
      ageOptions: [],
      selected_state:null,
      selected_lga:null,
      selected_age:null,
      selected_gender:null,
      startDate:null,
      endDate:null,
      spinner: false,
      barChartData: {
        labels: ["Millenial", "Generation X", "Baby Boomers"],
        datasets: [
          {
            label: "Visits",
            data: [10, 15, 20, 30, 40, 50, 60, 70, 34, 45, 11, 78, 45],
            backgroundColor: "#003f5c",
          },
          {
            label: "Positive",
            data: [65, 65, 65],
            backgroundColor: "#f50915",
          },
          {
            label: "Negative",
            data: [80, 80, 80],
            backgroundColor: "#ec6e0e",
          },
          {
            label: "Pages Views",
            data: [100, 110, 90],
            backgroundColor: "#0dbfcc",
          },
          {
            label: "Users",
            data: [150, 200, 160],
            backgroundColor: "#665191",
          },
        ],
      },
=======
  components: {  "bar-chart": BarChart, },
  layout: "dashlayout",
  middleware: "admin",
  data() {
    return {
    		datacollection: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#f87979',
						pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
					}
]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true,
					mode: 'single',
					callbacks: {
						label: function(tooltipItems, data) {
							return '$' + tooltipItems.yLabel;
						}
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				height: 200
},
>>>>>>> Stashed changes
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "",
          fontSize: 40,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  },
<<<<<<< Updated upstream
  methods: {

    async getPeriods(){
       try {
       const response = await this.$axios.$get(`/Opinions/GetOpinionReports?stateId=${this.selected_state}&cityId=${this.selected_lga}&gender=${this.selected_gender}&ageRange=${this.selected_age}&period=${this.period}&startDate=${this.startDate}&endDate=${this.endDate}`)
       console.log(response.data)
       } catch (e) {
       this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
       }
    },
    async getStatesAndLgaAndGenders() {
      try {
        const locations = await this.$axios.get("Locations/GetNigeriaStates");
        this.stateOptions = locations.data;
        const genders = await this.$axios.get("Account/GetGenders");
        this.genderOptions = genders.data;
      } catch {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },

    async getFeatures(id) {
      this.spinner = true;
      try {
        const response = await this.$axios.get(`/Locations/GetLGAs?stateId=${id}`);
        this.lgaOptions = response.data;
        this.spinner = false;
      } catch (e) {
        this.spinner = true;
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async getAges() {
      try {
        const response = await this.$axios.get(`/Settings/GetAgeRanges`);
        this.ageOptions = response.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
  },
=======

  // mounted() {
  //   this.chart()
  // },

  // methods: {
  //   Chart() {
  //     var ctx = document.getElementById("myChart").getContext("2d");
  //     var myChart = new Chart(ctx, {
  //       type: "bar",
  //       data: {
  //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //         datasets: [
  //           {
  //             label: "# of Votes",
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(75, 192, 192, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(255, 159, 64, 0.2)",
  //             ],
  //             borderColor: [
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(54, 162, 235, 1)",
  //               "rgba(255, 206, 86, 1)",
  //               "rgba(75, 192, 192, 1)",
  //               "rgba(153, 102, 255, 1)",
  //               "rgba(255, 159, 64, 1)",
  //             ],
  //             borderWidth: 1,
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //           },
  //         },
  //       },
  //     });
  //   },
  // },
>>>>>>> Stashed changes
};
</script>

<style scoped>
.ChartSideBar {
  overflow: hidden;
  overflow-y: scroll;
  max-height: 650px;
}

.ChartSideBar::-webkit-scrollbar {
  width: 3px;
  border-radius: 50px;
}

.number span {
  font-size: 6px;
  padding: 0px 5px 0px;
  cursor: pointer;
}

.number .span {
  opacity: 0.5;
}

h6 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 27px;
  color: #626d73;
}

/* Track */
.ChartSideBar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

/* Handle */
.ChartSideBar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.ChartSideBar::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2e495e;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
<<<<<<< Updated upstream
  color: #0dbfcc;
=======
  color: #00c48d;
>>>>>>> Stashed changes
}

.subtitle {
  font-weight: 300;
  font-size: 1em;
  color: #2e495e;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.chart-wrap {
  background: #f4f4f4;
}
.btn2 {
  background: #00b5d3;
  border: none;
  padding: 9px 20px 9px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
}
.btn3 {
  background: #626d73;
  border: none;
  padding: 9px 20px 9px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
}
</style>
