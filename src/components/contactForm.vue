<template>
  <section class="contact-section">
    <div class="contact-container">
    <div class="contact-header">

      <div>
        <h1>Contact</h1>
        <p>
          Available for contact. I respond within one business day.
        </p>
      </div>
    </div>

    <div class="contact-grid">
      <div>
        <div v-if="success" class="success-box">
          <div class="success-icon">✓</div>
          <h2>Message sent.</h2>
          <p>Thanks for reaching out — I’ll get back to you soon.</p>
        </div>

        <form v-else @submit.prevent="sendEmail" class="contact-form">
          <div class="field">
            <label>Name</label>
            <input v-model="form.name" type="text" placeholder="Your name" required />
          </div>

          <div class="field">
            <label>Email</label>
            <input v-model="form.email" type="email" placeholder="you@example.com" required />
          </div>

          <div class="field">
            <label>Message</label>
            <textarea
                v-model="form.message"
                placeholder="Message......"
                rows="6"
                required
            ></textarea>
          </div>

          <button type="submit">
            Send message
          </button>

          <p v-if="error" class="error-message">Something went wrong.</p>
        </form>
      </div>

      <div class="contact-info">
        <div>
          <p class="info-title">Reach me directly</p>

          <a href="mailto:atilladurmus07@gmail.com" class="contact-link">
            <span class="link-icon">✉</span>
            <div>
              <p>Email</p>
              <small>atilladurmus07@gmail.com</small>
            </div>
          </a>

          <a href="https://github.com/Atilla0707" target="_blank" class="contact-link">
            <span class="link-icon">⌘</span>
            <div>
              <p>GitHub</p>
              <small>github.com/atilladurmus</small>
            </div>
          </a>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const success = ref(false)
const error = ref(false)

const sendEmail = async () => {
  success.value = false
  error.value = false

  try {
    await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.value.name,
          from_email: form.value.email,
          message: form.value.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    success.value = true
    form.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (err) {
    console.log(err)
    console.log(err.text)
    console.log(err.status)
    error.value = true
  }
}
</script>

<style>
.contact-section {
  width: 100%;
  min-height: 100vh;
  padding: 80px 24px;
  color: #e6edf3;
  background: #081018;
}
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-header {
  display: flex;
  gap: 16px;
  align-items: baseline;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 24px;
  margin-bottom: 64px;
}

.section-number,
.info-title,
label,
.details-card {
  font-family: monospace;
}

.section-number,
.info-title {
  color: #22c55e;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  font-family: Georgia, serif;
  font-weight: 500;
}

h1 {
  font-size: clamp(32px, 5vw, 44px);
  margin: 0;
}

.contact-header p {
  color: #94a3b8;
  font-size: 14px;
  margin-top: 6px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field label {
  display: block;
  color: #94a3b8;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 14px;
  padding: 14px 16px;
  color: #e6edf3;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  transition: 0.2s ease;
}

textarea {
  resize: none;
}

input::placeholder,
textarea::placeholder {
  color: #64748b;
}

input:focus,
textarea:focus {
  border-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34,197,94,0.15);
}

button {
  width: fit-content;
  border: none;
  background: #22c55e;
  color: #081018;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  background: #16a34a;
  transform: translateY(-2px);
}

.error-message {
  color: #f87171;
  font-size: 14px;
}

.success-box {
  text-align: center;
  padding: 64px 0;
}

.success-icon {
  width: 56px;
  height: 56px;
  background: rgba(34,197,94,0.12);
  color: #22c55e;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto 16px;
  font-size: 24px;
}

.success-box p,
.cta-card p {
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.7;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #e6edf3;
  text-decoration: none;
  margin-bottom: 16px;
  transition: 0.2s ease;
}

.contact-link:hover {
  color: #22c55e;
}

.link-icon {
  width: 42px;
  height: 42px;
  border: 1px solid #1e293b;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #0f172a;
}

.contact-link p {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.contact-link small {
  color: #94a3b8;
}

.cta-card,
.details-card {
  border: 1px solid #1e293b;
  background: #0f172a;
  border-radius: 24px;
  padding: 28px;
}

.cta-card h3 {
  font-size: 24px;
  margin: 0 0 12px;
}

.cta-card em {
  color: #22c55e;
  font-style: normal;
}

.details-card {
  border-radius: 16px;
}

.details-card p {
  font-size: 12px;
  margin: 0 0 12px;
  color: #22c55e;
}

.details-card span {
  color: #94a3b8;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-header {
    margin-bottom: 40px;
  }
}
</style>