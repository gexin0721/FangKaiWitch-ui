<template>
  <SectionFold title="科技" badge="等级 {{ store.data?.领地.科技.科技等级 }}">
    <div class="tc-grid">
      <div class="tc-item">
        <span class="tc-label">科技等级</span>
        <span class="tc-val">{{ store.data?.领地.科技.科技等级 }}</span>
      </div>
      <div class="tc-item">
        <span class="tc-label">奥术学派</span>
        <span class="tc-val">{{ store.data?.领地.科技.奥术学派进度 }}</span>
      </div>
      <div class="tc-item">
        <span class="tc-label">魔导化</span>
        <span class="tc-val">{{ store.data?.领地.科技.魔导化程度 }}</span>
      </div>
    </div>
    <div class="tc-meters">
      <div class="tc-meter">
        <span class="tc-meter-label">奥术学派进度</span>
        <div class="tc-meter-bar"><div class="tc-meter-fill arcane" :style="{ width: arcanePct + '%' }"></div></div>
      </div>
      <div class="tc-meter">
        <span class="tc-meter-label">魔导化程度</span>
        <div class="tc-meter-bar"><div class="tc-meter-fill magic" :style="{ width: magicPct + '%' }"></div></div>
      </div>
    </div>
  </SectionFold>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SectionFold from './SectionFold.vue';

const props = defineProps<{ store: any }>();
const arcanePct = computed(() => Math.min(100, props.store.data?.领地.科技.奥术学派进度 ?? 0));
const magicPct = computed(() => Math.min(100, props.store.data?.领地.科技.魔导化程度 ?? 0));
</script>

<style scoped>
.tc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-bottom: 8px;
}
.tc-item {
  background: var(--c-surface-alt);
  border-radius: 4px;
  padding: 6px;
  text-align: center;
}
.tc-label {
  display: block;
  font-size: 11px;
  color: var(--c-ink-muted);
}
.tc-val {
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: var(--c-steel);
}
.tc-meter {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 0;
}
.tc-meter-label {
  width: 92px;
  font-size: 12px;
  color: var(--c-ink);
}
.tc-meter-bar {
  flex: 1;
  height: 7px;
  background: var(--c-surface-alt);
  border-radius: 3px;
  overflow: hidden;
}
.tc-meter-fill {
  height: 100%;
  border-radius: 3px;
}
.tc-meter-fill.arcane {
  background: var(--c-primary);
}
.tc-meter-fill.magic {
  background: #7a5cbf;
}
</style>