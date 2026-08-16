<template>
  <div class="sf">
    <div class="sf-head" @click="open = !open">
      <span class="sf-caret" :class="{ 'sf-open': open }">▸</span>
      <span class="sf-title">{{ title }}</span>
      <span class="sf-badge" v-if="badge">{{ badge }}</span>
    </div>
    <div v-show="open" class="sf-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ title: string; badge?: string }>();
const open = ref(false);
</script>

<style scoped>
.sf {
  border: 1px solid var(--c-border);
  border-radius: 6px;
  background: var(--c-surface);
}
.sf-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  cursor: pointer;
  user-select: none;
  background: var(--c-surface-alt);
  border-radius: 6px;
}
.sf-head:hover {
  background: var(--c-border);
}
.sf-caret {
  font-size: 11px;
  color: var(--c-ink-muted);
  transition: transform 0.2s ease;
}
.sf-caret.sf-open {
  transform: rotate(90deg);
}
.sf-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--c-ink);
}
.sf-badge {
  margin-left: auto;
  font-size: 11px;
  color: var(--c-gold);
}
.sf-body {
  padding: 8px 10px;
}
</style>