<template>
  <div class="main-header">
    <div class="main-header-bg"></div>
    <div class="main-header-top">
      <div class="main-header-top-line"></div>
      <div class="main-header-top-warp">
        <div class="logo-box">
          <img src="../assets/img/logo.png" alt="" />
          <p>让医疗简单起来</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main-header {
  position: relative;
  height: 32.7223rem;
  width: 100%;
  .main-header-bg {
    background: url("../assets/img/home.png") 50% 50% no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .main-header-bg::after {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: "";
    background: rgba(0, 0, 0, 0.67);
    pointer-events: none;
  }
  .main-header-top {
    position: relative;
    height: 4.445rem;
    z-index: 2;
    .main-header-top-line {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      z-index: 2;
    }
    .main-header-top-warp {
      width: 64rem;
      margin: 0 auto;
      img {
        width: 7.778rem;
        height: 2.222rem;
      }
      .logo-box {
        color: #fff;
      }
    }
  }
}
</style>