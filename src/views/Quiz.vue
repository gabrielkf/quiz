<template>
  <div class="container quiz">
    <Questionnaire />
  </div>
</template>

<script>
import Questionnaire from '../components/Questionnaire';

export default {
  name: 'Quiz',

  components: {
    Questionnaire
  },

  data() {
    return {
      quizTopic: this.$store.state.current.topic
    };
  }
};
</script>

<style>
</style>