<template>
  <SectionFold title="外交" badge="关系网络">
    <div v-for="item in list" :key="item.key" class="dp-row">
      <span class="dp-name">{{ item.name }}</span>
      <div class="dp-bar">
        <div class="dp-fill" :style="{ left: barLeft(item.v), width: barWidth(item.v), background: barColor(item.v) }"></div>
        <div class="dp-zero"></div>
      </div>
      <span class="dp-num">{{ item.v }}</span>
    </div>
  </SectionFold>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SectionFold from './SectionFold.vue';

const props = defineProps<{ store: any }>();

const list = computed(() => {
  const d = props.store.data?.领地.外交;
  if (!d) return [];
  const names: Record<string, string> = {
    灰堡王室: '灰堡王室',
    灰堡贵族: '灰堡贵族',
    教会: '教会',
    晨曦王国: '晨曦王国',
    狼心王国: '狼心王国',
    莫金沙民: '莫金沙民',
    边境城邦: '边境城邦',
    峡湾群岛: '峡湾群岛',
    商会: '商会',
    佣兵团: '佣兵团',
    魔鬼: '魔鬼',
  };
  return Object.keys(names).map((k) => ({ key: k, name: names[k], v: d[k] ?? 0 }));
});

function barLeft(v: number) {
  return v < 0 ? 50 + v : 50;
}
function barWidth(v: number) {
  return Math.min(50, Math.abs(v));
}
function barColor(v: number) {
  if (v < -30) return 'var(--c-accent)';
  if (v < 0) return '#d98a6b';
  if (v > 60) return 'var(--c-growth)';
  return 'var(--c-gold)';
}
</script>

<style scoped>
.dp-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 0;
}
.dp-name {
  width: 72px;
  font-size: 12px;
  color: var(--c-ink);
  white-space: nowrap;
}
.dp-bar {
  position: relative;
  flex: 1;
  height: 7px;
  background: var(--c-surface-alt);
  border-radius: 3px;
}
.dp-fill {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 3px;
  transition: left 0.4s ease, width 0.4s ease;
}
.dp-zero {
  position: absolute;
  left: 50%;
  top: -1px;
  width: 1px;
  height: 9px;
  background: var(--c-border);
}
.dp-num {
  width: 36px;
  font-size: 12px;
  font-weight: 600;
  text-align: right;
  color: var(--c-ink);
}
</style>