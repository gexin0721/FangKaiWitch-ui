<template>
  <SectionFold title="稳定度">
    <div class="st-meter">
      <span class="st-label">治安</span>
      <div class="st-bar"><div class="st-fill" :style="{ width: lawPct + '%', background: lawColor }"></div></div>
      <span class="st-num">{{ store.data?.领地.稳定度.治安 }}</span>
    </div>
    <div class="st-meter">
      <span class="st-label">民意</span>
      <div class="st-bar"><div class="st-fill" :style="{ width: moralePct + '%', background: moraleColor }"></div></div>
      <span class="st-num">{{ store.data?.领地.稳定度.民意 }}</span>
    </div>
  </SectionFold>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SectionFold from './SectionFold.vue';

const props = defineProps<{ store: any }>();
const lawPct = computed(() => Math.min(100, props.store.data?.领地.稳定度.治安 ?? 0));
const moralePct = computed(() => Math.min(100, props.store.data?.领地.稳定度.民意 ?? 0));
const lawColor = computed(() => (lawPct.value < 30 ? 'var(--c-accent)' : lawPct.value < 60 ? 'var(--c-gold)' : 'var(--c-growth)'));
const moraleColor = computed(() => (moralePct.value < 30 ? 'var(--c-accent)' : moralePct.value < 60 ? 'var(--c-gold)' : 'var(--c-growth)'));
</script>

<style scoped>
.st-meter {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 0;
}
.st-label {
  width: 40px;
  font-size: 12px;
  color: var(--c-ink);
}
.st-bar {
  flex: 1;
  height: 7px;
  background: var(--c-surface-alt);
  border-radius: 3px;
  overflow: hidden;
}
.st-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease;
}
.st-num {
  width: 30px;
  text-align: right;
  font-size: 12px;
  font-weight: 600;
}
</style>