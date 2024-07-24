<template>
  <a :class="activetedEntry ? 'active ' : ''" :to="props.path" @click="entryClick()">
    <i>{{ props.icon }}</i>
    <span class="max">{{ props.label }}</span>
    <i v-if="props.entrys && isDrawer">{{
      activetedEntry ? 'arrow_drop_up' : 'arrow_drop_down'
    }}</i>
  </a>
  <div v-if="isDrawer" class="tiny-space"></div>
  <nav v-if="activetedEntry && props.entrys" class="drawer min no-padding">
    <nav class="drawer min no-padding vertical-padding">
      <navigation-entry
        v-for="entry in props.entrys"
        is-drawer
        :key="entry.name"
        :icon="entry.icon"
        :label="entry.label"
        :path="entry.path"
        :name="entry.name"
        :entrys="entry.entrys"
        :active-entrys="props.activeEntrys"
        @chieldClick="(val) => chieldClick(val)"
        @entryClick="chieldClick(entry)"
      />
    </nav>
  </nav>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const emit = defineEmits(['entryClick', 'chieldClick'])
const props = defineProps({
  path: String,
  icon: String,
  label: String,
  name: String,
  activeEntrys: Array,
  entrys: Array,
  isDrawer: Boolean
})

const route = useRoute()

const activetedEntry = computed(() => {
  return props.activeEntrys.includes(props.name) || props.name === route.name
})

function entryClick() {
  emit('entryClick')
}
function chieldClick(entry) {
  emit('chieldClick', entry)
}
</script>
