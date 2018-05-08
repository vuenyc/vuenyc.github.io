<template>
<div class="container" v-if="name">
  <h3>
    Next Meetup:
  </h3>
  <a :href="link">{{ name }}</a>
  <p>{{ date }}</p>
</div>
</template>

<script>
import fetchJsonp from "fetch-jsonp";

export default {
  data: () => ({
    name: "",
    date: "",
    link: ""
  }),
  mounted() {
    fetchJsonp(
      "https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=vueJsNYC&page=20"
    )
      .then(r => r.json())
      .then(({ results }) => results[0])
      .then(({ name, event_url, time }) => {
        this.name = name;
        this.link = event_url;
        this.date = new Date(time).toLocaleDateString();
      });
  }
};
</script>

<style scoped>
.container {
  margin-bottom: 10vh;
}
p,
h3 {
  color: #35495e;
  padding: 0 10px;
}
a {
  color: #41b883;
  white-space: nowrap;
}
</style>


