<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo" @click="closeMenu" >
      Atilla Durmus
    </RouterLink>

    <nav :class="['nav-links', { open: menuOpen }]">
      <RouterLink to="/" @click="closeMenu" class="btn">Home</RouterLink>
      <RouterLink to="/projects" @click="closeMenu" class="btn">Projects</RouterLink>
      <RouterLink to="/skills" class="btn">Skills</RouterLink>
      <RouterLink to="/contact" @click="closeMenu" class="btn">Contact</RouterLink>
    </nav>

    <a href="https://github.com/Atilla0707" target="_blank" class="visit-btn">
      Visit GitHub
    </a>

    <button class="menu-btn" @click="menuOpen = !menuOpen">
      ☰
    </button>
  </header>
</template>

<style>
.header {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;

  width: min(1100px, calc(100% - 2rem));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 0.8rem 1.5rem;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid #1e293b;
  border-radius: 999px;
}

.logo {
  color: #e6edf3;
  text-decoration: none;
  font-weight: 700;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #e6edf3;
  text-decoration: none;
}

.nav-links a:hover,
.nav-links .router-link-active {
  color: #22c55e;
}

.visit-btn {
  background: #22c55e;
  color: #081018;
  text-decoration: none;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  font-weight: 700;
  white-space: nowrap;
}

.menu-btn {
  display: none;
  background: transparent;
  border: none;
  color: #e6edf3;
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .header {
    border-radius: 24px;
    align-items: center;
  }

  .visit-btn {
    display: none;
  }

  .menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 0.8rem);
    left: 0;
    right: 0;

    display: none;
    flex-direction: column;
    gap: 1rem;

    padding: 1.2rem;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid #1e293b;
    border-radius: 20px;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>