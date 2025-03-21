<template>
  <div class="main-header">
    <div class="main-header-bg"></div>
    <div class="main-header-top">
      <div class="main-header-top-line"></div>
      <div class="main-header-top-warp">
        <div class="logo-box">
          <img src="../assets/img/logo.png" alt="" />
          <p>{{ $t("home.welcom") }}</p>
        </div>
        <ul class="tab-list">
          <li>
            <span>{{ $t("home.home") }}</span>
          </li>
          <li>
            <span>{{ $t("home.mission") }}</span>
          </li>
          <li>
            <span>{{ $t("home.success") }}</span>
          </li>
          <li>
            <span>{{ $t("home.us") }}</span>
          </li>
        </ul>
        <div class="login-btn">
          <span>{{ $t("home.login") }}</span>
        </div>
        <div class="language-box">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              中文<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="main-header-search">
      <div class="main-header-search-wrap">
        <p class="search-message">{{ $t("home.search1") }}</p>
        <p class="search-message">{{ $t("home.search2") }}</p>
        <p>{{ $t("home.search3") }}</p>
        <div class="search-box">
          <el-input
            v-model="inputValue"
            placeholder="请输入内容"
            clearable
            @keyup.enter="handleButtonClick"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <template #append>
              <el-button type="primary" @click="handleButtonClick">
                搜索
              </el-button>
            </template>
          </el-input>
        </div>
        <p class="search-topics">
          {{ $t("home.search4") }}：<span>长期失眠怎么办？</span>，<span>满脸痘痘怎么办？</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-header {
  position: relative;
  height: 32.7223rem;
  width: 100%;
  .main-header-bg {
    background: url("../assets/img/home-bg1.jpg") 50% 50% no-repeat;
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
      width: 70rem;
      margin: 0 auto;
      display: flex;
      height: 100%;
      color: #fff;
      line-height: 4.445rem;
      .logo-box {
        width: 21rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        img {
          width: 7.778rem;
          height: 2.222rem;
        }
        p {
          line-height: 1.5rem;
        }
      }
      .tab-list {
        display: flex;
        height: 100%;
        margin-left: 1rem;
        li {
          width: 8rem;
          text-align: center;
          font-weight: 700;
          span {
            cursor: pointer;
            &:hover {
              color: rgba(255, 255, 255, 0.9);
              text-decoration: underline;
            }
          }
        }
      }
      .login-btn {
        width: 8rem;
        text-align: center;
        font-weight: 700;
        span {
          cursor: pointer;
          &:hover {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: underline;
          }
        }
      }
      .language-box {
        width: 5rem;
        text-align: right;
        .el-dropdown {
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
        }
      }
    }
  }
  .main-header-search {
    position: relative;
    height: 28.2773rem;
    z-index: 2;
    .main-header-search-wrap {
      width: 70rem;
      margin: 0 auto;
      height: 100%;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .search-message {
        font-size: 3rem;
      }
      .search-box {
        height: 3.5rem;
        width: 30rem;
        margin: 1rem 0rem;
        ::v-deep .el-input__inner {
          height: 3.5rem;
          font-size: 1rem;
        }
      }
      .search-topics span {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>