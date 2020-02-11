<template>
  <div class="container">
    <div class="home">
      <p class="topic-title">Topics</p>
      <div class="card-container">
        <router-link
          class="topic-card"
          v-for="(topic, key) in topics"
          :key="topic.qNumber"
          @click="chooseTopic(key)"
          to="/question"
        >
          <div class="topic">{{ key }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  current,
  allTopics
} from '@/state/store';

export default {
  name: 'Home',
  data() {
    return {
      topics: allTopics.topics,
      currentTopic: current.current,
      level: false
    };
  },

  methods: {
    async chooseTopic(topic) {
      await current.setTopic(topic);
      console.log(topic);
      this.level = true;
    },
    async chooseLevel(level) {
      await current.setLevel(level);
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  align-items: baseline;

  max-width: 900px;
  margin: auto;
}

.topic-title {
  margin: 30px 0 15px 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 56px;
  text-align: left;
}

.card-container {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  flex-shrink: 1;
  flex-wrap: wrap;

  max-width: 1000px;
}
.card-container :hover {
  background-color: #c2c2c2;
}

.topic-card {
  background: #ffffff;
  height: 104px;
  width: 239px;
  margin: 24px;

  display: flex;
  border: 1px solid #e4e4e6;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
}

.topic {
  margin: auto;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
}

/* .popup {
  position: fixed;
  z-index: 999;
  background-color: #ffffff;
} */
</style>