<script setup lang="ts">
import { ArrowDown, UsersSearch, Check } from 'trinil-vue';
</script>

<template>
  <div class="app">
    <h1>Trinil Vue Icon Library</h1>
    <p>This example demonstrates how to use icons from trinil-vue</p>

    <section class="demo-section">
      <h2>Default Icons (24px, currentColor)</h2>
      <div class="icon-grid">
        <div class="icon-item">
          <ArrowDown />
          <p>ArrowDown</p>
        </div>
        <div class="icon-item">
          <UsersSearch />
          <p>UsersSearch</p>
        </div>
        <div class="icon-item">
          <Check />
          <p>Check</p>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Large Icons (48px)</h2>
      <div class="icon-grid">
        <div class="icon-item">
          <ArrowDown :size="48" />
        </div>
        <div class="icon-item">
          <UsersSearch :size="48" />
        </div>
        <div class="icon-item">
          <Check :size="48" />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Colored Icons</h2>
      <div class="icon-grid">
        <div class="icon-item">
          <ArrowDown :size="32" color="red" />
        </div>
        <div class="icon-item">
          <UsersSearch :size="32" color="blue" />
        </div>
        <div class="icon-item">
          <Check :size="32" color="green" />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>With Accessibility</h2>
      <div class="icon-grid">
        <div class="icon-item">
          <ArrowDown aria-label="Scroll down" />
        </div>
        <div class="icon-item">
          <UsersSearch title="Search for users" />
        </div>
        <div class="icon-item">
          <Check aria-label="Completed" class="text-success" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.app {
  max-width: 800px;
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.app h1 {
  margin-top: 0;
  color: #333;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-section h2 {
  margin-bottom: 20px;
  color: #555;
  font-size: 18px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: background-color 0.2s;
}

.icon-item:hover {
  background-color: #f0f0f0;
}

.icon-item svg {
  flex-shrink: 0;
}

.icon-item p {
  margin: 0;
  font-size: 12px;
  color: #666;
  text-align: center;
}

.text-success {
  color: green;
}
</style>
