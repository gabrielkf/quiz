<template>
  <div class="self-container">
    <div class="quiz-topic">
      <div class="title">
        <p>{{ topic }}</p>
      </div>
      <div class="close" clickable @click="close">
        <p>Close</p>
        <img src="..\assets\close-24px.svg" alt="Close" />
      </div>
    </div>

    <div class="box">
      <Question :key="id" style="margin: auto 0" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Question from './Question';

export default {
  name: 'Questionnaire',

  components: {
    Question
  },

  computed: {
    ...mapGetters({
      topic: 'getTopic',
      level: 'getLevel',
      completed: 'getCompleted',
      id: 'questionID'
    }),
    setTitle() {
      return this.props.title;
    }
  },

  methods: {
    close() {
      this.$router.push('/');
    }
  }
};
</script>

<style>
.self-container {
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-items: space-between;
  height: 95%;
}

.quiz-topic {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

.close {
  height: 24px;
  padding: 0;
  margin: auto 0;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-content: center;
}
.close p {
  font-size: 15px;
  margin: 0 auto;
  position: relative;
  bottom: 3px;
}
.close img {
  margin: 0 auto;
  height: 30px;
}

.box {
  background: #ffffff;
  border: 1px solid #e4e4e6;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  padding: 0;
  margin: auto 0;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  width: 600px;
  height: 400px;
}
</style>