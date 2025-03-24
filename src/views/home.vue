<template>
  <div class="main-home">
    <div class="main-home-warp">
      <div class="main-header-title">
        <p>运作方式</p>
      </div>
      <div class="operation-mode-warp">
        <div class="operation-mode-list">
          <div class="operation-mode-item">
            <p class="operation-mode-title">1.发布你的诉求，连接全球智慧</p>
            <p class="operation-mode-content">
              无论你面临怎样的健康难题，都可以在这里发布任务。
              来自世界各地的专业人士、非遗传承人、民间医者、特殊技能人士将
              为你提供多元化的解决方案。
            </p>
          </div>
          <div class="operation-mode-item">
            <p class="operation-mode-title">2. 专业评审，量身定制方案</p>
            <p class="operation-mode-content">
              每个任务都会经过专业评审团队的严格评估，确保方案的可行性和科学性。
              承接人将根据你的具体情况，结合自身经验和技能，为你量身定制专属解决方案。
            </p>
          </div>
          <div class="operation-mode-item">
            <p class="operation-mode-title">3.全程跟踪，确保任务完成</p>
            <p class="operation-mode-content">
              从任务发布到方案执行，我们提供全程跟踪服务，确保每个环节都得到妥善处理。
              你的健康，我们始终关注。
            </p>
          </div>
        </div>
        <div class="operation-mode-img"></div>
      </div>
      <div class="main-header-title">
        <p>评审团队</p>
      </div>
      <div class="review-team-warp">
        <div class="review-team-info-warp">
          <p class="review-team-info">
            猎医网汇聚了来自全球的顶尖专家和特殊技能者，
            他们各怀绝技，致力于为您的健康问题提供多元化、
            个性化方案的审核。每一位专家都经过严格筛选和
            认证，确保他们的专业性和实力。这些专家包括但 不限于以下几类：
          </p>
          <div class="review-team-type-list">
            <div class="review-team-type-item">
              <i class="el-icon-success"></i>
              <span>非遗传承人</span>
            </div>
            <div class="review-team-type-item">
              <i class="el-icon-success"></i>
              <span>道家医者</span>
            </div>
            <div class="review-team-type-item">
              <i class="el-icon-success"></i>
              <span>道家通灵人</span>
            </div>
            <div class="review-team-type-item">
              <i class="el-icon-success"></i>
              <span>苗医</span>
            </div>
            <div class="review-team-type-item">
              <i class="el-icon-success"></i>
              <span>佛门医者</span>
            </div>
            <div class="review-team-type-item">
              <i class="el-icon-success"></i>
              <span>民间祖传医者</span>
            </div>
            <div class="review-team-type-item">
              <i class="el-icon-success"></i>
              <span>民间藏医</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-home {
  background: #f8f9fa;
  .main-header-title {
    background: #fff;
    p {
      width: 70rem;
      margin: 0 auto;
      font-size: 1.5rem;
      height: 7rem;
      line-height: 6rem;
      font-weight: 700;
    }
  }
  .operation-mode-warp {
    display: flex;
    width: 70rem;
    margin: 0 auto;
    justify-content: space-between;
    padding: 2rem 0;
    .operation-mode-list {
      width: 40rem;
      .operation-mode-item {
        background: #fff;
        border-radius: 0.5rem;
        padding: 1rem;
        &:not(:nth-child(1)) {
          margin-top: 2rem;
        }
      }
      .operation-mode-title {
        font-size: 1.2rem;
        font-weight: 700;
      }
      .operation-mode-content {
        color: #55585d;
        margin-top: 0.5rem;
      }
    }
    .operation-mode-img {
      width: 25rem;
      height: 27rem;
      overflow: hidden;
      border-radius: 0.5rem;
      background: url("../assets/img/office.png") 50% 50% no-repeat;
      background-size: cover;
    }
  }
  .review-team-warp {
    width: 70rem;
    margin: 0 auto;
    padding: 2rem 0;
    .review-team-info-warp {
      display: flex;
      justify-content: space-between;
      .review-team-info {
        width: 45rem;
        line-height: 2rem;
        text-align: justify;
      }
    }
    .review-team-type-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 20rem;
      
      .review-team-type-item {
        width: 9rem;
        display: flex;
        align-items: center;
        margin-top: 1rem;
        &:nth-child(1),&:nth-child(2){
          margin-top: 0;
        }
        i {
          margin-right: 1rem;
          color: #db3a1b;
          font-size: 1.5rem;
        }
        span {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>