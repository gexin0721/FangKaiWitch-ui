<template>
  <SectionFold title="军事" badge="陆 {{ store.data?.领地.军事.陆军 }}">
    <div class="ml-grid">
      <div class="ml-item">
        <span class="ml-label">陆军</span>
        <span class="ml-val">{{ store.data?.领地.军事.陆军 }}</span>
      </div>
      <div class="ml-item">
        <span class="ml-label">海军</span>
        <span class="ml-val">{{ store.data?.领地.军事.海军 }}</span>
      </div>
      <div class="ml-item">
        <span class="ml-label">空军</span>
        <span class="ml-val">{{ store.data?.领地.军事.空军 }}</span>
      </div>
    </div>
    <div class="ml-meters">
      <div class="ml-meter">
        <span class="ml-meter-label">装备水平</span>
        <div class="ml-meter-bar"><div class="ml-meter-fill" :style="{ width: equipPct + '%' }"></div></div>
        <span class="ml-meter-num">{{ store.data?.领地.军事.装备水平 }}</span>
      </div>
      <div class="ml-meter">
        <span class="ml-meter-label">士气</span>
        <div class="ml-meter-bar"><div class="ml-meter-fill morale" :style="{ width: moralePct + '%' }"></div></div>
        <span class="ml-meter-num">{{ store.data?.领地.军事.士气 }}</span>
      </div>
    </div>
  </SectionFold>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SectionFold from './SectionFold.vue';

const props = defineProps<{ store: any }>();
const equipPct = computed(() => Math.min(100, props.store.data?.领地.军事.装备水平 ?? 0));
const moralePct = computed(() => Math.min(100, props.store.data?.领地.军事.士气 ?? 0));
</script>

<style scoped>
.ml-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-bottom: 8px;
}
.ml-item {
  background: var(--c-surface-alt);
  border-radius: 4px;
  padding: 6px;
  text-align: center;
}
.ml-label {
  display: block;
  font-size: 11px;
  color: var(--c-ink-muted);
}
.ml-val {
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: var(--c-steel);
}
.ml-meter {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 0;
}
.ml-meter-label {
  width: 64px;
  font-size: 12px;
  color: var(--c-ink);
}
.ml-meter-bar {
  flex: 1;
  height: 7px;
  background: var(--c-surface-alt);
  border-radius: 3px;
  overflow: hidden;
}
.ml-meter-fill {
  height: 100%;
  background: var(--c-steel);
  border-radius: 3px;
}
.ml-meter-fill.morale {
  background: var(--c-gold);
}
.ml-meter-num {
  width: 30px;
  text-align: right;
  font-size: 12px;
  font-weight: 600;
}
</style>