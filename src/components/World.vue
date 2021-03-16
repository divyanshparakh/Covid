<template>
  <div id="World">
    <img
      src="https://ak.picdn.net/shutterstock/videos/1013086880/thumb/1.jpg"
      draggable="false"
      id="bi"
    />
    <div id="WorldData">
      <ul>
        <li>Total Confirmed > {{ World.TotalConfirmed }}</li>
        <li>Total Deaths > {{ World.TotalDeaths }}</li>
        <li>Total Recovered > {{ World.TotalRecovered }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      World: { TotalConfirmed: 0, TotalDeaths: 0, TotalRecovered: 0 }
    };
  },
  methods: {
    WorldData() {
      this.axios("https://api.covid19api.com/world/total")
        .then(res => {
          this.World["TotalConfirmed"] = res.data.TotalConfirmed;
          this.World["TotalDeaths"] = res.data.TotalDeaths;
          this.World["TotalRecovered"] = res.data.TotalRecovered;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.WorldData();
  }
};
</script>

<style lang="scss" scoped>
#World {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  font-family: "Orbitron";
  color: #61c7fb;
  text-shadow: 3px 3px 2.5px #035efa;
  font-size: 1.7em;
  #bi {
    max-width: 90vw;
    max-height: 50em;
  }
  #WorldData {
    ul {
      list-style-type: none;
    }
  }
}
$breakpoint-tablet: 768px;
@media (min-width: $breakpoint-tablet) {
  #World {
    margin-top: 10vh;
    font-size: 3em;
    #bi {
      max-width: 250em;
    }
    #WorldData {
      ul {
        li {
        }
      }
    }
  }
}
</style>
