<template>
  <section style="">
   <div class="chart">
      <div class="">
        <div class="row">
           <div class="col-md-4 mt-lg-5 container-fluid" style="height:100%">
            <div class="row">
            <div class="col-md-12 pl-4">
              <ChartSideBar />
            </div>
            </div>
          </div>


          <div class="col-md-8 chart-wrap pl-5" style="">
          <div class=" mt-5 d-lg-flex">
               <button type="button" class="btn2">GRAPHICAL REPORT</button>
               <button type="button" class="btn3 ml-3">GRAPHICAL REPORT</button>

               <div class="ml-auto mr-5 pr-4">
                  <img src="~/assets/img/downloadicon.png" style="cursor: pointer" alt="">
                  <img src="~/assets/img/printicon.png" class="ml-4" style="cursor: pointer" alt="">
               </div>
          </div>
            <div class="row chart-wrap pb-5">
            <div class="col-md-10 ml-lg-5 pt-5 ">
              <BarChart class="bg-white p-2" :data="barChartData" :options="barChartOptions" :height="350" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from "~/components/BarChart.vue";
import ChartSideBar from "~/components/ChartSideBar.vue"
export default {
  components: { BarChart, ChartSideBar },
  layout: "dashlayout2",
  middleware: "admin",
  data() {
    return {
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
            data: [65, 65, 65,],
            backgroundColor: "#f50915",
          },
          {
            label: "Negative",
            data: [80, 80, 80,],
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
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #0dbfcc;
}

.subtitle {
  font-weight: 300;
  font-size: 1em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}


.chart-wrap {
background: #F4F4F4;
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
  background: #626D73;
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
