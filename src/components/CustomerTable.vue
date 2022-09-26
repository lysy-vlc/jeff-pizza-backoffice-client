<template>
  <el-table :data="[customer]">
    <el-table-column property="id" label="id" width="50"/>
    <el-table-column property="email" label="email" width="200"/>
    <el-table-column property="name" label="name" width="100"/>
    <el-table-column property="lastName" label="lastName" width="100"/>
    <el-table-column property="phoneNumber" label="phoneNumber" width="150"/>
    <el-table-column property="locale" label="locale" width="70"/>
    <el-table-column property="elegibleCoupon" label="elegibleCoupon" width="130"/>
    <el-table-column property="coupon" label="coupon" width="150"/>
  </el-table>
</template>

<script setup lang="ts">
import type { Customer } from '@/types/customer.types'

defineProps<{
  customer: Customer | null
}>()
</script>
