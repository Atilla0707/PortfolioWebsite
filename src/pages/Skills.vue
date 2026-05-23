<template>
  <section class="skills-page">
    <div class="skills-container">
      <div class="section-header">
        <span>02 /</span>
        <div>
          <h1>Skills & Stack</h1>
          <p>Technologies I work with daily and the depth I’ve reached in each.</p>
        </div>
      </div>

      <div class="skills-layout">
        <aside class="skill-tabs">
          <button
              v-for="(items, category) in categories"
              :key="category"
              :class="{ active: activeCategory === category }"
              @click="activeCategory = category"
          >
            {{ category }}
<!--            <span>{{ items.length }}</span>-->
          </button>
        </aside>

        <div class="skills-grid">
          <div class="skill-card" v-for="skill in skills" :key="skill.name">
            <div class="skill-top">
              <h3>{{ skill.name }}</h3>
              <span>{{ skill.years }}</span>
            </div>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const activeCategory = ref('Frontend')

const categories = {
  Frontend: [
    { name: 'Angular',description: 'Working webshop' },
    { name: 'Vue.js', description: 'Portfolio website, Webbrowser game ' },
    { name: 'React', description: 'School Assignments' },
    { name: 'TypeScript', description: 'Strict mode, generics, utility types, typed APIs' },
    { name: 'JavaScript', description: 'Basic webbrowser javascript projects' },
    { name: 'HTML / CSS',description: 'Semantic markup, animations, grid, flexbox, responsive design' }
  ],
  Backend: [
    { name: 'Java', years: 3, description: 'Object-oriented programming and backend logic' },
    { name: 'Spring Boot', years: 2, description: 'REST APIs, controllers, services, repositories' },
    { name: 'MySQL', years: 3, description: 'Relational databases, queries, joins' },
    { name: 'PostgreSQL', years: 3, description: 'Relational databases, queries, joins' },
    { name: 'C#', description: 'Multiple minigames made in Unity' }

  ],
  'DevOps & Tools': [
    { name: 'Git', years: 4, description: 'Version control, branches, merge requests' },
    { name: 'Docker', years: 2, description: 'Containers, Dockerfiles, compose setup' },
    { name: 'GitLab',description: 'Repositories, issues, CI/CD basics' },
    { name: 'Github',description: 'Repositories'}
  ],
  Testing: [
    { name: 'JUnit', description: 'Unit testing for Java applications' },
    { name: 'Postman', description: 'Testing APIs and requests' },
  ],
  'Machine Learning':[
    { name: 'Jupyter Notebook', description: 'Basic notebooks for machine learning, ' },

  ]
}

const skills = computed(() => categories[activeCategory.value])
</script>

<style scoped>
.skills-page {
  min-height: 100vh;
  background: #081018;
  color: #e6edf3;
  padding: 120px 24px 80px;
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  gap: 18px;
  align-items: baseline;
  border-bottom: 1px solid #1e293b;
  padding-bottom: 32px;
  margin-bottom: 72px;
}

.section-header span {
  color: #22c55e;
  font-family: monospace;
  font-size: 13px;
  letter-spacing: 0.18em;
}

.section-header h1 {
  font-family: Georgia, serif;
  font-size: clamp(36px, 5vw, 48px);
  font-weight: 500;
  margin: 0;
}

.section-header p {
  color: #94a3b8;
  margin-top: 8px;
}

.skills-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 48px;
}

.skill-tabs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-tabs button {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent;
  color: #94a3b8;
  border: none;
  border-radius: 16px;
  padding: 18px 20px;

  font-size: 15px;
  cursor: pointer;
  transition: 0.25s ease;
}

.skill-tabs button.active,
.skill-tabs button:hover {
  background: #0f172a;
  color: #e6edf3;
  box-shadow: inset 0 0 0 1px #1e293b;
}

.skill-tabs button.active::before {
  content: "◇";
  color: #22c55e;
  margin-right: 10px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.skill-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 18px;
  padding: 28px;
  min-height: 120px;
  transition: 0.25s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: #22c55e;
}

.skill-top {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.skill-card h3 {
  font-family: Georgia, serif;
  font-size: 22px;
  font-weight: 500;
  margin: 0;
}

.skill-top span {
  color: #94a3b8;
  font-family: monospace;
  font-size: 13px;
}

.skill-card p {
  color: #64748b;
  margin-top: 18px;
  line-height: 1.6;
  font-size: 14px;
}

@media (max-width: 850px) {
  .skills-layout {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>