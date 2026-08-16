<template>
  <SectionFold title="农业" badge="人口 {{ store.data?.领地.农业.人口 }}">
    <div class="ag-grid">
      <div class="ag-item">
        <span class="ag-label">人口</span>
        <span class="ag-val">{{ store.data?.领地.农业.人口 }}</span>
      </div>
      <div class="ag-item">
        <span class="ag-label">粮食产量</span>
        <span class="ag-val">{{ store.data?.领地.农业.粮食产量 }}</span>
      </div>
      <div class="ag-item">
        <span class="ag-label">粮食储备</span>
        <span class="ag-val">{{ store.data?.领地.农业.粮食储备 }}</span>
      </div>
    </div>
    <div v-if="store.data?.领地.农业.特产.length" class="ag-products">
      <span v-for="p in store.data.领地.农业.特产" :key="p" class="ag-chip">{{ p }}</span>
    </div>
  </SectionFold>
</template>

<script setup lang="ts">
import SectionFold from './SectionFold.vue';
defineProps<{ store: any }>();
</script>

<style scoped>
.ag-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}
.ag-item {
  background: var(--c-surface-alt);
  border-radius: 4px;
  padding: 6px;
  text-align: center;
}
.ag-label {
  display: block;
  font-size: 11px;
  color: var(--c-ink-muted);
}
.ag-val {
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: var(--c-growth);
}
.ag-products {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
}
.ag-chip {
  font-size: 11px;
  background: var(--c-surface-alt);
  border: 1px solid var(--c-border);
  border-radius: 10px;
  padding: 1px 8px;
  color: var(--c-ink-muted);
}
</style>