<script setup>

  import { RouterLink } from 'vue-router'
  import profileImage from '../assets/images/mm.png'

</script>

<template>

  <section id="about" class="about">
    <div class="about-container">
      <img :src="profileImage" alt="">

      <div class="info-box">

        <div class="text">
          <h3>Hello, I am</h3>
          <h1>Atilla Durmus</h1>
          <span>Frontend Developer</span>
        </div>

        <div class="btn-group">
          <a href="/cv/AtillaDurmusCV.pdf" download class="btn">
            Download CV
          </a>
          <RouterLink to="/contact" class="btn">Contact</RouterLink>
        </div>

      </div>
    </div>
  </section>

</template>

<style>
:root{
  --bg-color: #081018;
  --second-bg-color: #0f172a;
  --text-color: #e6edf3;
  --main-color: #22c55e;
  --border-color: #1e293b;
  --muted-color: #94a3b8;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  scroll-behavior: smooth;
  list-style: none;
}

.header{
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 4rem;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  padding: 0.8rem 2rem;
  border-radius: 999px;
  z-index: 1000;
}

.logo{
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: 600;
  transition: 0.3s ease;
}

.logo:hover{
  color: var(--main-color);
}

.nav-links{
  display: flex;
  gap: 2rem;
}

li{
  display: flex;
  gap: 2rem;
}

.nav-links a{
  position: relative;
  color: var(--text-color);
  font-weight: 300;
  transition: 0.3s ease;
}

.nav-links a::before{
  position: absolute;
  content: "";
  width: 0;
  left: 0;
  bottom: -6px;
  height: 2px;
  border-radius: 1rem;
  transition: 0.3s ease;
  background: var(--main-color);
}

.nav-links a:hover{
  color: var(--main-color);
}

.nav-links a:hover::before{
  width: 100%;
}

.nav-links .router-link-active{
  color: var(--main-color);
}

.visit-btn{
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  font-size: 0.95rem;
  color: #081018;
  cursor: pointer;
  transition: 0.3s ease;
  background: var(--main-color);
}

.visit-btn:hover{
  background: #16a34a;
  transform: translateY(-2px);
}

#menu-icon{
  font-size: 2rem;
  display: none;
}

section{
  min-height: 100vh;
  padding: 8rem 12%;
  width: 100%;
  position: relative;
  background: var(--bg-color);
  color: var(--text-color);
}

.about{
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-container{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
}

.about img{
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--border-color);
  box-shadow: 0 0 40px rgba(34,197,94,0.12);
}

.info-box{
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1.5rem;
}

.info-box h3{
  font-size: 1.3rem;
  color: var(--muted-color);
  font-weight: 400;
}

.info-box h1{
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
}

.info-box span{
  color: var(--main-color);
  font-size: 1.8rem;
  font-weight: 500;
}

.btn-group{
  display: flex;
  gap: 1rem;
}

.btn{
  border-radius: 999px;
  padding: 0.9rem 1.8rem;
  border: 1px solid var(--border-color);
  background: var(--second-bg-color);
  color: var(--text-color);
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease;
}

.btn:hover{
  background: var(--main-color);
  color: #081018;
  border-color: var(--main-color);
}

.socials{
  display: flex;
  gap: 1.5rem;
}

.socials i{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--second-bg-color);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s ease;
}

.socials i:hover{
  color: var(--main-color);
  border-color: var(--main-color);
  transform: translateY(-3px);
}

.section-title{
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
}

.experience-info{
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 2rem;
}

.grid-card{
  background: var(--second-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: 0.3s ease;
}

.grid-card:hover{
  transform: translateY(-6px);
  border-color: var(--main-color);
}

.grid-card i{
  font-size: 1.5rem;
  color: var(--main-color);
}

.grid-card span{
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--main-color);
}

.grid-card h3{
  color: var(--text-color);
}

.grid-card p{
  color: var(--muted-color);
  line-height: 1.6;
}

::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-track{
  background: var(--bg-color);
}

::-webkit-scrollbar-thumb{
  background: var(--main-color);
  border-radius: 10px;
}

@media(max-width: 968px){

  .header{
    width: calc(100% - 2rem);
    gap: 1rem;
    padding: 1rem;
  }

  .nav-links{
    display: none;
  }

  .about-container{
    flex-direction: column;
    text-align: center;
    gap: 4rem;
  }

  .info-box{
    text-align: center;
    align-items: center;
  }

  .info-box h1{
    font-size: 3rem;
  }

  .grid{
    grid-template-columns: 1fr;
  }
}
</style>