<template>
  <div class="container">
    <div class="home">
      <p class="topic-title">Topics</p>
      <div class="card-container">
        <div class="topic-card" v-for="(topic, key) in topics" :key="key" @click="setTopic(key)">
          <div class="topic">{{ key }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topics',

  computed: {
    topics() {
      return this.$store.state.topics;
    }
  },
  methods: {
    setTopic(topic) {
      this.$store.commit('setCurrent', topic);
      this.$router.push('/quiz');
    }
  }
};
</script>

<style>
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
  cursor: pointer;
}

.topic {
  margin: auto;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
}
</style>