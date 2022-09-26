<template>
  <el-table
    :data="products"
  >
    <el-table-column property="id" label="id" width="50"/>
    <el-table-column property="name" label="name" width="200"/>
    <el-table-column property="reservationType" label="reservationType" width="130"/>
    <el-table-column property="code" label="code" width="200"/>
    <el-table-column property="description" label="description" width="200"/>
  </el-table>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product.types'

defineProps<{
  products: Product[] | []
}>()
</script>
