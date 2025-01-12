const app = Vue.createApp({
  data() {
    return {
      message: "Hello World!",
      vueClass: "pinkBG",
      randomNumber: Math.ceil(Math.random() * 6)
    };
  }
});

app.mount("#app");