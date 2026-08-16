<template>
  <SectionFold title="社会思潮" badge="主流：{{ store.data?.领地.社会思潮.当前主流主义 }}">
    <div class="id-main">
      <span class="id-main-label">当前主流主义</span>
      <span class="id-main-val">{{ store.data?.领地.社会思潮.当前主流主义 }}</span>
    </div>
    <div v-if="store.data?.领地.社会思潮.改革过渡期" class="id-transition">
      主义过渡期，社会动荡
    </div>
    <div v-if="store.data?.领地.社会思潮.反扑风险 > 0" class="id-backlash">
      反扑风险：{{ store.data?.领地.社会思潮.反扑风险 }}
    </div>
  </SectionFold>
</template>

<script setup lang="ts">
import SectionFold from './SectionFold.vue';
defineProps<{ store: any }>();
</script>

<style scoped>
.id-main {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}
.id-main-label {
  font-size: 12px;
  color: var(--c-ink-muted);
}
.id-main-val {
  font-size: 14px;
  font-weight: 700;
  color: var(--c-primary);
  border: 1px solid var(--c-primary);
  border-radius: 4px;
  padding: 1px 8px;
}
.id-transition {
  margin-top: 6px;
  font-size: 12px;
  color: var(--c-accent);
  font-weight: 600;
}
.id-backlash {
  margin-top: 4px;
  font-size: 12px;
  color: var(--c-gold);
}
</style>