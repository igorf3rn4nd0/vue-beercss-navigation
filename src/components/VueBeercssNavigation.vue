<template>
  <nav ref="NavigationDrawerRef">
    <slot name="top"></slot>
    <div class="tiny-space"></div>
    <button class="s circle transparent large" @click="close">
      <i>menu_open</i>
    </button>
    <div class="s space"></div>
    <navigation-entry
      v-for="entry in modelValue"
      :key="entry.name"
      :path="entry.path"
      :icon="entry.icon"
      :label="entry.label"
      :name="entry.name"
      :active-entrys="activeEntrys"
      :is-drawer="isDrawer"
      :entrys="entry.entrys"
      @entryClick="activeteEntry(entry)"
      @chieldClick="(val) => activeteEntry(val)"
    />
    <div class="max"></div>
    <slot name="bottom"></slot>
    <div class="tiny-space"></div>
  </nav>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NavigationEntry from './NavigationEntry.vue'

const modelValue = defineModel()
const emit = defineEmits(['close', 'activeteEntry'])

const router = useRouter()

const activeEntrys = ref([])
const NavigationDrawerRef = ref(null)
const isDrawer = ref(false)

onMounted(() => {
  checkIsDrawer()
})

function checkIsDrawer() {
  isDrawer.value = NavigationDrawerRef.value.classList.contains('drawer')
}
function activeteEntry(entry) {
  if (entry.path) {
    router.push(entry.path)
    activeEntrys.value = []
    close()
  } else if (entry.entrys) {
    if (isDrawer.value) {
      if (!activeEntrys.value.includes(entry.name)) {
        activeEntrys.value.push(entry.name)
      } else {
        activeEntrys.value = activeEntrys.value.filter((e) => {
          return e !== entry.name
        })
      }
    } else {
      emit('activeteEntry', entry)
    }
  } else {
    close()
  }
}
function close() {
  emit('close')
}
</script>
