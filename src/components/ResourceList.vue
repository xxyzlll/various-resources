<template>
  <div class="resource-container">
    <div class="resource-header">
      <h1 class="resource-title">资源收藏</h1>
      <p class="resource-subtitle">发现并探索优质开发资源</p>
    </div>

    <div class="resource-grid">
      <div 
        v-for="resource in resources"
        :key="resource.id"
        class="resource-card"
        @click="goDetail(resource.id)"
      >
        <div class="card-image">
          <img v-if="resource.image" :src="resource.image" :alt="resource.name" />
          <div v-else class="image-placeholder">
            <i class="fas fa-image"></i>
          </div>
        </div>

        <div class="card-content">
          <h3>{{ resource.name }}</h3>
          <p class="description">{{ resource.description || '暂无描述' }}</p>
          <div class="card-footer">
            <span class="more-link">查看详情 <i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
import { resources } from '@/contanst/index'

function goDetail(id: number) {
  router.push({ path: `/detail/${id}` })
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.resource-container {
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100vw;
  min-height: 100vh;
}

.resource-header {
  text-align: center;
  margin-bottom: 50px;
}

.resource-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 10px;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.resource-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* 调整为更小的最小宽度 */
  gap: 30px;
}

.resource-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.resource-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.2);
}

.card-image {
  height: 180px;
  background-color: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.card-image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.image-placeholder {
  font-size: 3rem;
  color: #c7d2fe;
}

.card-content {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
}

.description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 20px;
}

.card-footer {
  border-top: 1px solid #f1f5f9;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.more-link {
  color: #6366f1;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.2s;
}

.more-link i {
  margin-left: 6px;
  font-size: 0.8rem;
  transition: transform 0.2s;
}

.resource-card:hover .more-link {
  color: #8b5cf6;
}

.resource-card:hover .more-link i {
  transform: translateX(3px); /* 添加悬停时的图标移动效果 */
}
</style>