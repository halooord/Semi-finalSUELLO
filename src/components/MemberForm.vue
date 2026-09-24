<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['member-added'])

const form = reactive({
  name: '',
  email: '',
  role: 'Member',
  joinDate: ''
})

const errorMessage = ref('')

function submitForm() {
  errorMessage.value = ''

  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !form.role ||
    !form.joinDate
  ) {
    errorMessage.value =
      'Please fill in all required fields.'

    return
  }

  emit('member-added', {
    name: form.name.trim(),
    email: form.email.trim(),
    role: form.role,
    joinDate: form.joinDate
  })

  form.name = ''
  form.email = ''
  form.role = 'Member'
  form.joinDate = ''
}
</script>

<template>
  <div class="form-container">
    <h2>Add Member</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Member Name</label>

        <input
          v-model="form.name"
          type="text"
          placeholder="Enter name"
        />
      </div>

      <div class="form-group">
        <label>Email</label>

        <input
          v-model="form.email"
          type="email"
          placeholder="Enter email"
        />
      </div>

      <div class="form-group">
        <label>Club Role</label>

        <select v-model="form.role">
          <option value="Member">Member</option>
          <option value="Officer">Officer</option>
          <option value="Treasurer">Treasurer</option>
          <option value="President">President</option>
        </select>
      </div>

      <div class="form-group">
        <label>Join Date</label>

        <input
          v-model="form.joinDate"
          type="date"
        />
      </div>

      <p v-if="errorMessage" class="error">
        {{ errorMessage }}
      </p>

      <button type="submit">
        Add Member
      </button>
    </form>
  </div>
</template>

