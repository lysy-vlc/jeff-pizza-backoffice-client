<script setup lang="ts">
import { ref, watch } from 'vue'
import { useMutation, useQuery, useSubscription } from 'villus'
import { GetOrders, orderCreated, OrderStatusChanged, UpdateOrder, UpdateOrderStatus } from '@/queries/orders'
import ProductTable from '@/components/ProductTable.vue'
import type { Product } from '@/types/product.types'
import type { Customer } from '@/types/customer.types'
import CustomerTable from '@/components/CustomerTable.vue'
import { OrderStatus } from '@/types/order.types'
import type { Order } from '@/types/order.types'
import ChangeOrderStatus from '@/components/ChangeOrderStatus.vue'

enum ContentType {
  PRODUCT = 'PRODUCT',
  CUSTOMER = 'CUSTOMER',
  HUB = 'HUB',
  CHANGE_STATUS = 'CHANGE_STATUS'
}

// new order subscription
const orderSubscription = useSubscription({ query: orderCreated })
const orderSubscriptionData = orderSubscription.data
watch(orderSubscriptionData, ({ orderCreated }: { orderCreated: Order }) => {
  orders.value.push(orderCreated)
})

// change order status subscription
const orderStatusSubscription = useSubscription({ query: OrderStatusChanged })
const orderStatusSubscriptionData = orderStatusSubscription.data
watch(orderStatusSubscriptionData, ({ orderStatusChanged }: { orderStatusChanged: Order }) => {
  orders.value = orders.value.map(o => o.id === orderStatusChanged.id ? orderStatusChanged : o)
})

// reactive variables
const orders = ref<Order[] | []>([])

const productPreviewData = ref<Product[] | []>([])

const customerPreviewData = ref<Customer | null>(null)

const showModal = ref<boolean>(false)

const modalContentType = ref<ContentType | null>(null)

const selectedOrder = ref<Order | null>(null)

function showProducts(productsData: Product[] | []): void {
  productPreviewData.value = productsData
  modalContentType.value = ContentType.PRODUCT
  showModal.value = true
}

function showCustomer(customerData: Customer | null): void {
  customerPreviewData.value = customerData
  modalContentType.value = ContentType.CUSTOMER
  showModal.value = true
}

function showChangeStatus(order: Order): void {
  selectedOrder.value = order
  modalContentType.value = ContentType.CHANGE_STATUS
  showModal.value = true
}

// table row color depends on order status
const tableRowClassName = ({ row }: { row: { status: string } }) => {
  switch (row.status) {
    case OrderStatus.CANCEL:
      return 'cancel-row'
    case OrderStatus.CONFIRMED:
      return 'confirmed-row'
    case OrderStatus.IN_DELIVERY:
      return 'in-delivery-row'
    case OrderStatus.IN_PROCESS:
      return 'in-process-row'
    default:
      return ''
  }
}

function changeStatus(status: string) {
  const updateOrderStatusMutation = useMutation(UpdateOrderStatus)

  const variables = {
    id: selectedOrder.value.id,
    status
  }

  updateOrderStatusMutation.execute(variables)

  showModal.value = false
}

// initially load orders
useQuery({
  query: GetOrders
}).then(({ data, error }) => {
  orders.value = data.value.orders
})
</script>

<template>
  <el-table
    :data="orders"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="id" label="id" width="60"/>
    <el-table-column prop="type" label="type" width="80"/>
    <el-table-column prop="receptionType" label="receptionType" width="120"/>
    <el-table-column prop="status" label="status" width="130"/>

    <el-table-column label="change status" width="180">
      <template #default="scope">
        <el-button @click="showChangeStatus(scope.row)">change status</el-button>
      </template>
    </el-table-column>

    <el-table-column label="requestedDate" width="180">
      <template #default="scope">
        {{ new Date(scope.row.requestedDate).toLocaleString() }}
      </template>
    </el-table-column>

    <el-table-column label="scheduledDate" width="180">
      <template #default="scope">
        {{ new Date(scope.row.scheduledDate).toLocaleString() }}
      </template>
    </el-table-column>

    <el-table-column label="confirmedDate" width="180">
      <template #default="scope">
        {{ new Date(scope.row.confirmedDate).toLocaleString() }}
      </template>
    </el-table-column>

    <el-table-column label="products" width="180">
      <template #default="scope">
        <div style="padding: 10px 0">
          <el-badge :value="scope.row.products.length" class="item">
            <el-button @click="showProducts(scope.row.products)">show products</el-button>
          </el-badge>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="customer" width="180">
      <template #default="scope">
        <div style="padding: 10px 0">
          <el-button @click="showCustomer(scope.row.customer)">show customer</el-button>
        </div>
      </template>
    </el-table-column>

    <el-table-column prop="channel" label="channel" width="180"/>
  </el-table>

  <el-dialog v-model="showModal" title="Products ordered" width="100%">
    <ProductTable v-if="modalContentType === ContentType.PRODUCT" :products="productPreviewData"/>
    <CustomerTable v-if="modalContentType === ContentType.CUSTOMER" :customer="customerPreviewData"/>
    <ChangeOrderStatus
      v-if="selectedOrder && modalContentType === ContentType.CHANGE_STATUS"
      :initialStatus="selectedOrder.status"
      @change="changeStatus"
    />
  </el-dialog>
</template>

<style>
.el-table .cancel-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .confirmed-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .in-delivery-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

.el-table .in-process-row {
  --el-table-tr-bg-color: var(--el-color-info-light-9);
}
</style>
