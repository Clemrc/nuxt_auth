<template>
  <div class="login">
    <form @submit.prevent="userLogin">
      <div>
        <label>Login Name</label>
        <input type="text" v-model="login.identifier" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">LogIn</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  middleware: "guest",
  data() {
    return {
      login: {
        identifier: "",
        password: ""
      },
      refData: {}
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login
        });
        this.$axios.setHeader("Authorization", "Bearer " + response.data.jwt);
        this.$auth.setRefreshToken("local", response.data.jwt);
        this.$auth.setUser(response.data.user);
        this.$auth.setUserToken("Authorization", "Bearer " + response.data.jwt);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>