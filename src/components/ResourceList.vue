<template>
  <div class="resource-container">
    <div class="resource-header">
      <h1 class="resource-title">资源收藏</h1>
      <p class="resource-subtitle">发现并探索好的资源</p>
    </div>
    <!-- 添加搜索框 -->
    <div class="search-bar">
      <div class="search-wrapper">
        <input
            type="text"
            placeholder="搜索资源名称..."
            v-model="searchQuery"
            class="search-input"
        />
        <i
            class="fas fa-times-circle clear-icon"
            v-show="searchQuery"
            @click="searchQuery=''"
        ></i>
      </div>
    </div>


    <div v-if="filteredResources.length === 0" class="empty-placeholder">
      <div class="empty-illustration">
        <!-- 可使用SVG插画 -->
      </div>
      <h3>未找到匹配资源</h3>
      <p>尝试调整搜索关键词</p>
    </div>

    <div class="resource-grid">
      <!-- 根据搜索条件过滤资源 -->
      <div
          v-for="resource in filteredResources"
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
import { ref, computed } from 'vue'
import { resources } from '@/contanst/index'

const router = useRouter()

// 定义搜索框的绑定值
const searchQuery = ref('')

// 计算属性：根据搜索条件过滤资源
const filteredResources = computed(() => {
  if (!searchQuery.value) return resources
  return resources.filter(resource =>
      resource.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

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
.empty-placeholder {
  border-radius: 24px;
  padding: 60px 30px;
}
.resource-container {
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100vw;
  min-height: 100vh;
}

/* 搜索框样式 */
.search-bar {
  position: relative;
  margin-bottom: 50px;
  text-align: center;
}
.search-input {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 12px 50px 12px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.search-wrapper {
  position: relative;
  width: 100%;
  max-width: 600px; /* 保持与你原有搜索栏宽度一致 */
  margin: 0 auto;
}

.clear-icon {
  position: absolute;
  right: 10px; /* 输入框右侧10px位置 */
  top: 50%;
  transform: translateY(-50%);
  color: #cbd5e1;
  cursor: pointer;
  font-size: 1.3rem;
  transition: all 0.2s;
  z-index: 10; /* 确保在输入框上方 */
}

.search-input {
  width: 100%;
  padding-right: 40px; /* 右侧留出清除按钮空间 */
}

.search-input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
  outline: none;
}
.clear-icon:hover {
  color: #94a3b8;
  transform: translateY(-50%) scale(1.1);
}

/* 其他样式保持不变 */
.resource-header {
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
}
.resource-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f172a;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  margin-bottom: 0;
  -webkit-text-fill-color: transparent;
}
.resource-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 400;
  max-width: 600px;
}
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
}
.card-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
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
  transform: translateX(3px);
}
</style>
