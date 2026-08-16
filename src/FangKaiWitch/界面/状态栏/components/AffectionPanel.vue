<template>
  <SectionFold title="女巫好感" badge="核心羁绊">
    <div v-for="w in list" :key="w.key" class="af-row">
      <span class="af-name">{{ w.name }}</span>
      <div class="af-bar">
        <div class="af-fill" :style="{ width: w.pct + '%', background: w.color }"></div>
        <div class="af-mark love" v-if="w.loveLine"></div>
        <div class="af-mark marry" v-if="w.marryLine"></div>
      </div>
      <span class="af-num">{{ w.value }}</span>
      <span class="af-tag" :style="{ color: w.color }">{{ w.tag }}</span>
    </div>
    <div class="af-legend">
      <span>┄ 400 恋爱 ┄ 450 婚姻</span>
    </div>
  </SectionFold>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SectionFold from './SectionFold.vue';

const props = defineProps<{ store: any }>();

const list = computed(() => {
  const d = props.store.data;
  if (!d) return [];
  const names: Record<string, string> = {
    温蒂: '温蒂',
    夜莺: '夜莺',
    书卷: '书卷',
    叶子: '叶子',
    希尔维: '希尔维',
    爱葛莎: '爱葛莎',
  };
  const chars = ['温蒂', '夜莺', '书卷', '叶子', '希尔维', '爱葛莎'];
  const loveLine = ['温蒂', '夜莺'];
  return chars.map((k) => {
    const v = d[k]?.好感度 ?? 0;
    const isLove = loveLine.includes(k);
    const max = isLove ? 520 : 100;
    const pct = Math.min(100, (v / max) * 100);
    let tag = '';
    if (isLove) {
      tag = v >= 450 ? '婚姻' : v >= 400 ? '恋爱' : v >= 250 ? '信赖' : v >= 120 ? '熟悉' : '初识';
    } else {
      tag = v >= 60 ? '信赖' : v >= 30 ? '熟悉' : '初识';
    }
    return {
      key: k,
      name: names[k],
      value: v,
      pct,
      loveLine: isLove,
      marryLine: isLove && v >= 450,
      color: isLove ? 'var(--c-accent)' : 'var(--c-gold)',
      tag,
    };
  });
});
</script>

<style scoped>
.af-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 0;
}
.af-name {
  width: 52px;
  font-size: 12px;
  color: var(--c-ink);
}
.af-bar {
  position: relative;
  flex: 1;
  height: 8px;
  background: var(--c-surface-alt);
  border-radius: 4px;
  overflow: hidden;
}
.af-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.4s ease;
}
.af-mark {
  position: absolute;
  top: -2px;
  width: 1px;
  height: 12px;
  background: var(--c-ink);
}
.af-mark.love {
  left: 76.9%;
}
.af-mark.marry {
  left: 86.5%;
}
.af-num {
  width: 30px;
  text-align: right;
  font-size: 12px;
  font-weight: 600;
}
.af-tag {
  width: 32px;
  font-size: 11px;
  text-align: center;
}
.af-legend {
  margin-top: 6px;
  border-top: 1px dashed var(--c-border);
  padding-top: 4px;
  font-size: 11px;
  color: var(--c-ink-muted);
  text-align: center;
}
</style>