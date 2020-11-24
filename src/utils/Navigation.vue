<template>
  <div class="navigation-master">
    <nav
      style="background-color: black !important; color: white !important; position: static !important;"
      class="navbar navbar-light navbar-expand-md navigation-clean-button"
    >
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/img/signature.png" width="200" />
        </router-link>

        <button
          @click.stop="toggleNavbar()"
          class="navbar-toggler"
          data-target="#navbarSupportedContent"
          data-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          v-bind:class="{ show: show }"
        >
          <ul class="nav navbar-nav mr-auto">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" href="#"></a>
            </li>
          </ul>
          <span class="navbar-text actions">
            <router-link class="login" to="/design">Designs</router-link>

            <a class="login" href="https://medium.com/@solomonmarvel97">Blog</a>

            <router-link class="login" to="/projects">Projects</router-link>

            <a class="login" href="https://github.com/solomonmarvel97">Github</a>
          </span>

          <a class="site-btn" href="mailto:marvelous@boltcliq.com">Get in touch</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationMaster",
  components: {},
  props: {
    name: String
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }
};
</script>
