<template>
  <div id="app">
    <!-- <graph-line
      width="100%"
      :height="500"
      :shape="'normal'"
      :axis-min="0"
      :axis-max="Math.max(...Data.Confirmed) + 500000"
      :colors="['#ECE100', '#9EDE00', '#EC9800', '#EC2500']"
      :axis-full-mode="true"
      :textRotateX="90"
      :labels="Data.Date"
      :names="names"
      :values="values"
      :showAnchor="true"
    >
      <note :text="'Line Chart'"></note>
      <tooltip :names="names" :position="'right'"></tooltip>
      <legends :names="names"></legends>
      <guideline :tooltip-y="true"></guideline>
    </graph-line> -->
  </div>
</template>

<script>
export default {
  components: {},
  props: ["Data"],
  data() {
    return {
      names: ["Confirmed", "Deaths", "Recovered", "Active"],
      values: [
        this.Data.Confirmed,
        this.Data.Deaths,
        this.Data.Recovered,
        this.Data.Active
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
#app {
}
</style>
