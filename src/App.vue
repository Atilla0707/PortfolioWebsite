<script setup>
import NavBar from './components/NavBar.vue'

</script>

<template>
  <NavBar />

  <main class="page-content">
    <RouterView />
  </main>
</template>

<style>
.page-content {
  padding-top: 110px;
}
</style>