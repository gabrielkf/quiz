<template>
  <div class="result-container">
    <div class="mid-box">
      <p>Check your score</p>
    </div>
    <div class="result-box">
      <div class="result-head">
        <img src="../assets/teacher.png" alt="teacher image" />
        <div v-if="completed" class="head-text">
          <p class="congrats">Congratulations!</p>
          <p>You finished the {{topic}} Quiz</p>
        </div>
        <div v-else class="head-text">
          <p class="congrats">No results found!</p>
          <p>You must complete the quiz first</p>
        </div>
      </div>
      <div class="result-content">
        <div class="summary">
          <div class="totals">
            <p>{{ rightsTotal }}</p>
            <p class="sub">correct</p>
          </div>

          <div class="totals">
            <p>{{ wrongsTotal }}</p>
            <p class="sub">wrong</p>
          </div>
        </div>
        <div class="details">
          <div
            v-for="(level, key) in score"
            :key="key"
            class="topics"
            :class="{'middle': key=='medium'}"
          >
            <p class="level">{{ key.charAt(0).toUpperCase() + key.slice(1) }}</p>
            <p class="result">Correct: {{ level.right }}</p>
            <p class="result">Wrong: {{ level.wrong }}</p>
          </div>
        </div>
        <button class="return" @click="backHome">Go to main page</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Result',

  methods: {
    backHome() {
      this.$router.push('/');
    }
  },

  computed: {
    ...mapGetters({
      topic: 'getTopic',
      score: 'getScore',
      completed: 'getCompleted'
    }),
    rightsTotal() {
      return (
        this.score.easy.right +
        this.score.medium.right +
        this.score.hard.right
      );
    },
    wrongsTotal() {
      return (
        this.score.easy.wrong +
        this.score.medium.wrong +
        this.score.hard.wrong
      );
    }
  }
};
</script>

<style lang="scss">
$primary: #343c58;

.result-container {
  width: 534px;
  height: 100%;
  display: flex;
  margin: auto;

  flex-direction: column;
  justify-content: center;
}

.result-box {
  padding: 0;
  margin: auto 0;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border: 0.88px solid #e4e4e6;
  border-radius: 7.04px;
}

.result-head {
  height: 180px;
  left: 416px;
  top: 119px;
  background: #438de4;

  display: flex;
  flex-direction: row;
  justify-items: center;
}
.result-head img {
  height: 80%;
  margin: auto;
  margin-right: 0;
  padding: 0;
  display: flex;
  text-align: right;
}

.head-text {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: auto;
  margin-left: 0;
  padding: 0;

  text-align: left;
  color: white;
}
.congrats {
  margin: 0;
  font-size: 32px;
  line-height: 48px;
}

.mid-box {
  position: relative;
  width: 252px;
  height: 35px;
  left: 141px;
  top: 198px;
  padding: 0;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mid-box p {
  padding: 0;
  margin: auto;

  font-size: 18px;
  line-height: 19px;
  letter-spacing: 2px;
  color: $primary;
}

.result-content {
  padding: 20px 0;
  height: 300px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.summary {
  box-sizing: border-box;
  width: 199px;
  height: 57px;
  margin: auto;
  padding: 0;

  background: rgba(52, 60, 88, 0.1);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.totals {
  margin: auto;
  height: 100%;
  color: $primary;
  font-size: 28px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.totals p {
  margin-block-start: 0;
  margin-block-end: 0;
}
.sub {
  font-size: 13px;
}

.details {
  display: flex;
  flex-direction: row;
}
.topics {
  width: 100%;
  padding-left: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
}
.level {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
}
.result {
  font-size: 14px;
  letter-spacing: 0.44px;
}
.level,
.result {
  margin: auto 0;
  padding: 5px 0;
}
.middle {
  border-left: 1px solid #b8bed5;
  border-right: 1px solid #b8bed5;
}

.return {
  margin: auto;
  width: 180px;
  height: 45px;
  background: #0467db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: white;
}
</style>