<template>
  <div id="VChart">
    <ve-line
      id="vline"
      :data="ReturnChartData()"
      :title="Divyansh"
      :chart-color="chartColors"
      :judge-width="true"
      :background-color="backgroundColor"
      :loading="true"
      :settings="chartSettings"
      :mark-point="markPoint"
      :data-zoom="dataZoom"
      :toolbox="toolbox"
      :colors="colors"
      :key="Data"
      :theme="theme"
    ></ve-line>
  </div>
</template>

<script>
import "echarts/lib/component/visualMap";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/title";
import VeLine from "v-charts/lib/line.common";

export default {
  components: { VeLine },
  props: ["Data"],
  data() {
    return {
      backgroundColor: {},
      chartColors: ["red", "blue"],
      // visualMap: [{ type: "continuous" }],
      chartSettings: {
        metrics: ["Confirmed", "Recovered", "Active", "Deaths"],
        dimension: ["Date"],
        scale: [true, true],
        yAxisType: "value",
        xAxisType: "time" // value
      },
      markPoint: {
        data: [
          {
            type: "max"
          }
          // {
          //   type: "average"
          // }
        ]
      },
      colors: [
        "rgb(254, 139, 30)",
        "rgb(11, 155, 20)",
        "rgb(255, 30, 30)",
        "rgb(10,177,239)"
      ],
      dataZoom: [
        {
          type: "slider",
          start: 10,
          end: 130,
          filterMode: "filter",
          xAxisIndex: [0]
        }
      ],
      toolbox: {
        feature: {
          magicType: { type: ["line", "bar"] },
          saveAsImage: { type: ["jpg"] }
        }
      },
      theme: "dark"
    };
  },
  computed: {
    ReturnChartData: function() {
      return this.ChartData;
    },
    ReturnData: function() {
      return this.Data;
    }
  },
  methods: {
    ChartData() {
      var D = {
        columns: ["Confirmed", "Recovered", "Active", "Deaths", "Date"],
        rows: []
      };
      console.log(this.ReturnData.Confirmed.length);
      for (var i = 0; i < this.ReturnData.Confirmed.length; i++) {
        D.rows.push({
          Confirmed: this.ReturnData.Confirmed[i],
          Recovered: this.ReturnData.Recovered[i],
          Active: this.ReturnData.Active[i],
          Deaths: this.ReturnData.Deaths[i],
          Date: this.ReturnData.Date[i]
        });
      }
      return D;
    }
  },
  created() {},
  updated() {}
};
</script>
<style media="screen" scoped>
#VChart {
  padding-bottom: 5em;
  height: 100%;
  overflow: hidden;
}
</style>
