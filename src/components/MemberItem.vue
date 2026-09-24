<script setup>
defineProps({
  member: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'mark-active',
  'delete-member'
])
</script>

<template>
  <div class="member-card">
    <h3>{{ member.name }}</h3>

    <p>
      <strong>Email:</strong>
      {{ member.email }}
    </p>

    <p>
      <strong>Role:</strong>
      {{ member.role }}
    </p>

    <p>
      <strong>Join Date:</strong>
      {{ member.joinDate }}
    </p>

    <p>
      <strong>Status:</strong>

      <span
        :class="member.active ? 'active' : 'inactive'"
      >
        {{ member.active ? 'Active' : 'Inactive' }}
      </span>
    </p>

    <button
      v-if="!member.active"
      @click="emit('mark-active', member.id)"
    >
      Mark as Active
    </button>

    <button
      class="delete-button"
      @click="emit('delete-member', member.id)"
    >
      Delete
    </button>
  </div>
</template>

