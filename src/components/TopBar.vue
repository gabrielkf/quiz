<template>
  <div class="bar">
    <p class="title">FrontEnd Dev Test</p>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
};
</script>

<style scoped>
.bar {
  position: absolute;
  height: 65px;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  padding: 0;

  display: flex;
  align-content: center;
  background: #343c58;
}

.title {
  margin: auto 0 auto 24px;
  padding: 0;
  color: white;
  font-size: 30px;
  line-height: 38px;
}
</style>