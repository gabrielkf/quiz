<template>
  <div class="dialog">
    <div class="header">
      <p>Initial Level:</p>
      <img src="../assets/close-24px.svg" alt="close" />
    </div>
    <div>
      <button v-for="level in levels" :key="level" @click.stop="setLevel" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogLevel',
  data() {
    return {
      levels: ['easy', 'medium', 'hard']
    };
  },
  methods: {
    setLevel(level) {
      console.log(level);
    }
  }
};
</script>

<style>
.dialog {
  border: 3px solid #32cb82;
  box-shadow: 0px 3px 6px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  height: 200px;
  width: 300px;
}

.header {
  display: flex;
}
</style>