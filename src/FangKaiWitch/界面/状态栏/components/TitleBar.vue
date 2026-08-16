<template>
  <div class="tb">
    <div class="tb-top">
      <span class="tb-name">领地</span>
      <span class="tb-stage">{{ stageText }}</span>
    </div>
    <div class="tb-meta">
      <span>{{ store.data?.世界.当前时间 }}</span>
      <span>{{ store.data?.世界.当前区域 }}</span>
      <span v-if="store.data?.世界.邪魔之月状态" class="tb-moon">邪魔之月</span>
    </div>
    <div class="tb-watch">
      <span class="tb-watch-label">教会警戒</span>
      <div class="tb-watch-bar">
        <div class="tb-watch-fill" :style="{ width: watchPct + '%', background: watchColor }"></div>
      </div>
      <span class="tb-watch-num">{{ store.data?.领地.教会警戒度 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ store: any }>();

const stageText = computed(() => {
  const s = props.store.data?.世界.剧情阶段;
  return s === '萌芽' ? '萌芽期' : s === '崛起' ? '崛起期' : '争锋期';
});

const watchPct = computed(() => Math.min(100, props.store.data?.领地.教会警戒度 ?? 0));
const watchColor = computed(() => {
  const v = props.store.data?.领地.教会警戒度 ?? 0;
  if (v > 60) return 'var(--c-accent)';
  if (v > 30) return 'var(--c-gold)';
  return 'var(--c-growth)';
});
</script>

<style scoped>
.tb {
  padding: 10px;
  border-bottom: 2px solid var(--c-primary);
  background: linear-gradient(180deg, var(--c-surface-alt), var(--c-surface));
}
.tb-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.tb-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--c-ink);
}
.tb-stage {
  font-size: 12px;
  color: var(--c-gold);
  border: 1px solid var(--c-gold);
  border-radius: 4px;
  padding: 1px 6px;
}
.tb-meta {
  display: flex;
  gap: 10px;
  color: var(--c-ink-muted);
  font-size: 12px;
}
.tb-moon {
  color: var(--c-accent);
  font-weight: 600;
}
.tb-watch {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}
.tb-watch-label {
  font-size: 11px;
  color: var(--c-ink-muted);
}
.tb-watch-bar {
  flex: 1;
  height: 8px;
  background: var(--c-border);
  border-radius: 4px;
  overflow: hidden;
}
.tb-watch-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease, background 0.5s ease;
}
.tb-watch-num {
  font-size: 12px;
  font-weight: 600;
  min-width: 24px;
  text-align: right;
}
</style>