<template>
  <div id="app">
    <graph-line
      :paddingTop="10"
      :paddingRight="0"
      :width="1080"
      :height="768"
      :shape="'normal'"
      :axis-min="0"
      :axis-max="Math.max(...this.Data.Confirmed)"
      :colors="['#ECE100', '#9EDE00', '#EC9800', '#EC2500']"
      :axis-full-mode="true"
      :textRotateX="90"
      :labels="[...this.Data.Date]"
      :names="names"
      :values="values"
      :showAnchor="true"
    >
      <note :text="'Line Chart'"></note>
      <tooltip :names="names" :position="'top'"></tooltip>
      <legends :names="names"></legends>
      <guideline :tooltip-y="true" :tooltip-x="true"></guideline>
    </graph-line>
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
  position: relative;
  top: 1200px;
  margin: auto;
}
</style>
