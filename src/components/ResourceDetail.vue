<template>
  <div class="detail-container">
    <div class="detail-card" v-if="resource">
      <div class="card-header">
        <!-- <button class="back-button" @click="goBack">
          <i class="fas fa-arrow-left"></i> 返回列表
        </button> -->
        <h2 class="detail-title">{{ resource.name }}</h2>
      </div>

      <div class="card-body">
        <div class="image-container" v-if="resource.image">
          <img :src="resource.image" :alt="resource.name" class="detail-image"/>
        </div>

        <div class="description-section">
          <p class="detail-description">{{ resource.description || '暂无描述' }}</p>
        </div>

        <div class="link-section" v-if="resource.link">
          <div class="link-card" @click="openLink(resource.link)">
            <div class="link-content">
              <i class="fas fa-link"></i>
              <span>{{ resource.link }}</span>
            </div>
            <button class="copy-button" @click.stop="copyLink(resource.link)">
              <i class="fas fa-copy"></i> 复制链接
            </button>
          </div>
          <p class="copy-feedback" v-if="copied">链接已复制！</p>
        </div>
      </div>
    </div>

    <div v-else-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>加载资源详情中...</p>
    </div>

    <div v-else class="not-found">
      <i class="fas fa-exclamation-circle"></i>
      <p>未找到该资源</p>
      <button class="back-button" @click="goBack">
        <i class="fas fa-arrow-left"></i> 返回列表
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {  resources } from "@/contanst";

const route = useRoute()
const router = useRouter()
const loading = ref(true)
const copied = ref(false)


const resource = computed(() => {
  const id = Number(route.params.id)
  return resources.find(r => r.id === id)
})


function goBack() {
  router.push('/')
}

function copyLink(link: string) {
  navigator.clipboard.writeText(link).then(() => {
    copied.value = true
    setTimeout(() => copied.value = false, 2000)
  })
}

function openLink(link: string) {
  window.open(link, '_blank')
}

onMounted(() => {
  // 模拟数据加载
  setTimeout(() => {
    loading.value = false
  }, 600)
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.detail-container {
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #f0f9ff 0%, #eef2ff 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100vw;
  padding-top: 10vh;
  margin: auto;
}

.detail-card {
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}


.card-header {
  padding: 30px 30px 20px;
  background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  position: relative;
  display: flex;
  align-items: center;
}

.detail-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
  text-align: left;
}

.back-button {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 130px;
  text-align: center;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateX(-3px);
}

.back-button i {
  font-size: 0.9rem;
}

.card-body {
  padding: 30px;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.detail-image {
  max-width: 300px;
  max-height: 300px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border: 3px solid white;
  outline: 1px solid #eee;
}

.description-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 12px;
  border-left: 4px solid #818cf8;
}

.detail-description {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #4b5563;
  margin: 0;
}

.link-section {
  margin-top: 25px;
}

.link-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f3ff;
  border-radius: 12px;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #e0e7ff;
}

.link-card:hover {
  background: #ede9fe;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.1);
  transform: translateY(-2px);
}

.link-content {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  color: #4f46e5;
  font-weight: 500;
  overflow: hidden;
}

.link-content i {
  font-size: 1.3rem;
}

.link-content span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.copy-button {
  background: linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.copy-button:hover {
  background: linear-gradient(90deg, #7c3aed 0%, #4f46e5 100%);
}

.copy-feedback {
  margin: 10px 0 0;
  color: #10b981;
  font-weight: 600;
  text-align: center;
  animation: fadeInOut 2s ease forwards;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* 加载状态 */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 20px;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 5px solid #e0e7ff;
  border-top: 5px solid #4f46e5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-state p {
  font-size: 1.2rem;
  color: #4b5563;
  font-weight: 500;
}

/* 未找到状态 */
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 60vh;
  text-align: center;
  max-width: 500px;
}

.not-found i {
  font-size: 4rem;
  color: #ef4444;
}

.not-found p {
  font-size: 1.5rem;
  color: #1e293b;
  font-weight: 600;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .card-header {
    padding: 25px 20px 15px;
  }

  .detail-title {
    font-size: 1.8rem;
  }

  .link-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .copy-button {
    align-self: flex-end;
  }
}
</style>
