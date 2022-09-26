<script setup lang="ts">
import { useClient, handleSubscriptions, defaultPlugins } from 'villus'
import { createClient } from 'graphql-ws'

const wsClient = createClient({
  url: 'ws://localhost:3000/graphql'
})

const subscriptionForwarder = operation => {
  return {
    subscribe: obs => {
      wsClient.subscribe(
        {
          query: operation.query
        },
        obs
      )
    }
  }
}

const client = useClient({
  url: 'http://localhost:3000/graphql',
  use: [ handleSubscriptions(subscriptionForwarder), ...defaultPlugins() ]
})
</script>

<template>
  <header></header>

  <RouterView />
</template>

<style scoped></style>
