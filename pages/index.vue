<template>
  <section class="container">
    <logo/>
    <h1 class="title">
      NYC
    </h1>
    <div class="links">
      <!-- <a href="https://www.meetup.com/vueJsNYC/" target="_blank" rel="noopener" class="button--green">Join us on Meetup</a> -->
      <MeetupIcon/>
      <YoutubeIcon/>
      <SlackIcon/>
    </div>
    <Contact class="byline"/>
  </section>
</template>

<script>
import Logo from '~/components/Logo';
import { GithubIcon, MeetupIcon, SlackIcon, YoutubeIcon } from '~/components/Icon';
import Contact from '~/components/Contact'

export default {
  components: {
    Logo,
    MeetupIcon,
    GithubIcon,
    YoutubeIcon,
    SlackIcon,
    Contact
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 4px;
  display: flex;
  justify-content: center;
}

.links > * + * {
  margin-left: 30px;
}

.byline {
  margin-top: 15px;
}
</style>
