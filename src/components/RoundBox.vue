<template>
  <div class="container">
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "RoundBox"
};
</script>

<style>
.box {
  background: #ffffff;
  border: 1px solid #e4e4e6;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: baseline;

  width: 500px;
  height: 300px;
}
</style>