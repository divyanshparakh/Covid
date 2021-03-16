<template>
  <div id="Data">
    <p id="title">Countries Data</p>
    <div id="ribbion">
      <img
        draggable="false"
        id="flag"
        :src="
          `http://cdn.countryflags.com/thumbs/${SelectedCountry}/flag-square-250.png`
        "
      />
      <div id="select">
        <label>
          <select name="SelectedCountry" v-model="SelectedCountry">
            <option value="" disabled selected>Choose your option</option>
            <option
              v-for="(item, index) in Countries"
              :key="index"
              :value="CountryData[item]"
              >{{ item }}</option
            >
          </select>
        </label>
      </div>
    </div>
    <VChart :Data="SpecificData"></VChart>
  </div>
</template>

<script>
import VChart from "@/components/V-Chart.vue";

export default {
  components: {
    VChart
  },
  props: {},
  data() {
    return {
      date: null,
      CountryData: {},
      Countries: [],
      SelectedCountry: "",
      SpecificData: {
        Confirmed: [],
        Deaths: [],
        Recovered: [],
        Active: [],
        Date: []
      }
    };
  },
  computed: {
    SendSpecificData: function() {
      return this.SpecificData;
    }
  },
  watch: {
    SelectedCountry(value) {
      this.getSelectedCountryData(value);
    }
  },
  methods: {
    getSelectedCountryData(value) {
      this.axios("https://api.covid19api.com/dayone/country/" + value)
        .then(res => {
          this.SpecificData["Confirmed"] = [];
          this.SpecificData["Deaths"] = [];
          this.SpecificData["Recovered"] = [];
          this.SpecificData["Active"] = [];
          this.SpecificData["Date"] = [];
          for (var i = 0 /* 123 */; i < res.data.length; i++) {
            this.SpecificData["Confirmed"].push(res.data[i].Confirmed);
            this.SpecificData["Deaths"].push(res.data[i].Deaths);
            this.SpecificData["Recovered"].push(res.data[i].Recovered);
            this.SpecificData["Active"].push(res.data[i].Active);
            this.SpecificData["Date"].push(res.data[i].Date.substring(0, 10));
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCountriesList() {
      this.axios({
        method: "GET",
        url: "https://api.covid19api.com/countries",
        headers: {
          "content-type": "application/json",
          useQueryString: true
        }
      })
        .then(res => {
          let variable;
          for (variable of res.data) {
            this.CountryData[variable.Country] = variable.Slug;
          }
          this.date = res.headers.date;
          this.Countries = Object.keys(this.CountryData);
          this.Countries.sort();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getCountriesList();
  },
  beforeMount() {},
  mounted() {
    this.SelectedCountry = "india";
  },
  updated() {}
};
</script>

<style lang="scss" scoped>
#Data {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  #title {
    font-family: "Orbitron";
    font-size: 3em;
    color: white;
    padding: 2em;
    font-weight: 900;
    color: #61c7fb;
    text-shadow: 3px 3px 2.5px #035efa;
  }
  #ribbion {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    overflow: hidden;
    margin-bottom: 5em;
    #flag {
      width: 350px;
      height: 200px;
      padding: 1em;
    }
    #select {
      label {
        position: relative;
        select {
          color: #000;
          font-weight: 700;
          text-align: center;
          background-color: #0095ff;
          border-radius: 0.5em;
          align-self: center;
          box-shadow: none;
          border: none;
          width: 350px;
          height: 3em;
          padding: 4px;
          outline: none;
          cursor: pointer;
          display: inline-block;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          box-shadow: 3px 4px 2.5px #035efa;
        }
      }
      label:after {
        content: "<>";
        font: 25px "Consolas", monospace;
        color: #000;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        transform: rotate(90deg);
        right: 0px;
        top: -9px;
        padding: 0 0 2px;
        border-bottom: 1px solid #000;
        position: absolute;
        pointer-events: none;
      }
    }
  }
}
$breakpoint-tablet: 768px;
@media (min-width: $breakpoint-tablet) {
  #Data {
    #ribbion {
      flex-flow: row;
      justify-content: space-around;
      #flag {
        width: 30em;
        padding: 0;
        border: dashed 3px #0095ff;
      }
    }
  }
}
</style>
