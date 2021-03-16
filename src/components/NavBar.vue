<template>
  <div id="NaNa">
    <a><Wrapper class="Wrapper" @click="Show()"></Wrapper></a>
    <nav class="nav-links-small">
      <menu class="sidebar">
        <Cross class="Cross" @click="Cross()"></Cross>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/countries">Countries</a></li>
          <li><a href="/user-setup">User Setup</a></li>
          <li><a href="/custom-user-setup">Custom User Setup</a></li>
        </ul>
      </menu>
    </nav>
    <nav class="nav-links-big">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/countries">Countries</a></li>
        <li><a href="/user-setup">User Setup</a></li>
        <li><a href="/custom-user-setup">Custom User Setup</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Wrapper from "@/components/NavigationBar/Wrapper.vue";
import Cross from "@/components/NavigationBar/Cross.vue";

export default {
  components: {
    Wrapper,
    Cross
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    Show() {
      document.querySelector(".sidebar").style.display = "flex";
    },
    Cross() {
      document.querySelector(".sidebar").style.display = "none";
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
#NaNa {
  position: sticky;
  // box-shadow: 1px 3px 4px #00a5c3;
  top: 10px;
  z-index: 1000;
}
.nav-links-big {
  display: none;
}
.nav-links-small {
  background-color: #00c9a6;
  box-shadow: 0 0 5px rgba(3, 47, 65, 1);
  height: 60px;
  .sidebar {
    display: none;
    justify-content: center;
    flex-flow: column nowrap;
    background-color: #2c3e56;
    background-color: #00a5c3;
    position: absolute;
    right: 0;
    width: 65vw;
    height: 100vh;
    box-shadow: 0 0 5px rgba(3, 47, 65, 1);
    overflow: hidden;
    ul {
      font-size: 2em;
      display: block;
      list-style-type: none;
      li {
        position: relative;
        top: -3em;
        margin: 1em;
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
}
$breakpoint-tablet: 768px;
@media (min-width: $breakpoint-tablet) {
  .Wrapper,
  .nav-links-small {
    display: none;
  }
  .nav-links-big {
    width: 95%;
    margin: auto;
    border-radius: 1em;
    background-color: #00c9a6;
    display: block;
    padding: 1%;
    overflow: hidden;
    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
      li {
        a {
          font-size: 2em;
          font-weight: 800;
          margin: 2em;
          padding: 1em;
          color: white;
          text-decoration: none;
          &:hover {
            color: #120822;
          }
        }
      }
    }
  }
}
</style>
