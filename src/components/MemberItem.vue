<template>
  <div class="member-card">

    <div class="member-info">
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
        {{ formatDate(member.joinDate) }}
      </p>

      <p>
        <strong>Status:</strong>

        <span
          :class="{
            active: member.status === 'Active',
            pending: member.status === 'Pending'
          }"
        >
          {{ member.status }}
        </span>
      </p>
    </div>

    <div class="actions">

      <button
        v-if="member.status !== 'Active'"
        @click="markActive"
        class="active-button"
      >
        Mark as Active
      </button>

      <button
        @click="deleteMember"
        class="delete-button"
      >
        Delete
      </button>

    </div>

  </div>
</template>

<script setup>
import { useFormatDate } from '../composables/useFormatDate'

const props = defineProps({
  member: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'mark-active',
  'delete-member'
])

const { formatDate } = useFormatDate()

function markActive() {
  emit('mark-active', props.member.id)
}

function deleteMember() {
  emit('delete-member', props.member.id)
}
</script>
