<template>
  <div class="wk-panel" :class="{ 'wk-alert': isAlert }">
    <TitleBar :store="store" />
    <div class="wk-section">
      <AffectionPanel :store="store" />
    </div>
    <div class="wk-dimensions">
      <AgriPanel :store="store" />
      <EconPanel :store="store" />
      <DiplomacyPanel :store="store" />
      <MilitaryPanel :store="store" />
      <TechPanel :store="store" />
      <StabilityPanel :store="store" />
      <IdeologyPanel :store="store" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from './store';
import TitleBar from './components/TitleBar.vue';
import AffectionPanel from './components/AffectionPanel.vue';
import AgriPanel from './components/AgriPanel.vue';
import EconPanel from './components/EconPanel.vue';
import DiplomacyPanel from './components/DiplomacyPanel.vue';
import MilitaryPanel from './components/MilitaryPanel.vue';
import TechPanel from './components/TechPanel.vue';
import StabilityPanel from './components/StabilityPanel.vue';
import IdeologyPanel from './components/IdeologyPanel.vue';

const store = useDataStore();

const isAlert = computed(() => {
  const w = store.data;
  if (!w) return false;
  return w.领地.教会警戒度 > 60 || w.领地.社会思潮.改革过渡期 === true;
});
</script>

<style scoped>
.wk-panel {
  border: 1px solid var(--c-border);
  border-radius: 8px;
  background: var(--c-surface);
  overflow: hidden;
  transition: border-color 0.4s ease;
}
.wk-panel.wk-alert {
  border-color: var(--c-accent);
  box-shadow: 0 0 0 1px var(--c-accent);
}
.wk-section {
  padding: 8px;
  border-bottom: 1px solid var(--c-border);
}
.wk-dimensions {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
}
</style>