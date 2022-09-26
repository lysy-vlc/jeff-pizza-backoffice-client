<template>
  <el-select
    v-model="status"
    @change="emitChange"
    class="m-2"
    placeholder="Select status"
  >
    <el-option
      v-for="item in statuses"
      :key="item"
      :label="item"
      :value="item"
    />
  </el-select>
</template>

<script setup lang="ts">
import { OrderStatus, OrderType } from '@/types/order.types'
import { onMounted, ref } from 'vue'

const statuses = Object.values(OrderStatus)

const status = ref<string>('')

onMounted(() => {
  status.value = initialStatus.initialStatus
})

const initialStatus = defineProps([ 'initialStatus' ])


const emit = defineEmits([ 'change' ])

function emitChange(value: string) {
  emit('change', value)
}
</script>
