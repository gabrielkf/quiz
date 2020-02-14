<template>
  <div class="container">
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

  computed: {
    finished() {
      return this.$store.getters.completion;
    }
  },
};
</script>

<style>
</style>