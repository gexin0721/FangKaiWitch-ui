<template>
  <SectionFold title="经济" badge="贸易收入 {{ store.data?.领地.经济.贸易收入 }}">
    <div class="ec-grid">
      <div class="ec-item">
        <span class="ec-label">贸易收入</span>
        <span class="ec-val">{{ store.data?.领地.经济.贸易收入 }}</span>
      </div>
      <div class="ec-item">
        <span class="ec-label">税收</span>
        <span class="ec-val">{{ store.data?.领地.经济.税收 }}</span>
      </div>
    </div>
    <div v-if="hasStore" class="ec-store">
      <div v-for="(v, k) in store.data.领地.经济.物资储备" :key="k" class="ec-row">
        <span>{{ k }}</span><span>{{ v }}</span>
      </div>
      <div v-if="!hasStoreKey" class="ec-empty">暂无物资记录</div>
    </div>
  </SectionFold>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SectionFold from './SectionFold.vue';

const props = defineProps<{ store: any }>();
const hasStore = computed(() => !!props.store.data?.领地.经济.物资储备);
const hasStoreKey = computed(() => {
  const m = props.store.data?.领地.经济.物资储备;
  return m && Object.keys(m).length > 0;
});
</script>

<style scoped>
.ec-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}
.ec-item {
  background: var(--c-surface-alt);
  border-radius: 4px;
  padding: 6px;
  text-align: center;
}
.ec-label {
  display: block;
  font-size: 11px;
  color: var(--c-ink-muted);
}
.ec-val {
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: var(--c-gold);
}
.ec-store {
  margin-top: 8px;
  border-top: 1px dashed var(--c-border);
  padding-top: 6px;
}
.ec-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 2px 0;
  color: var(--c-ink);
}
.ec-empty {
  font-size: 12px;
  color: var(--c-ink-muted);
}
</style>