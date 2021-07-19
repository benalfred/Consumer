<template>
  <section style="">
    <div class="chart">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-8" style="height:100%">
            <BarChart :data="barChartData" :options="barChartOptions" :height="350" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from "~/components/BarChart.vue";
export default {
  components: { BarChart },
  layout: "dashlayout",
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

</style>
