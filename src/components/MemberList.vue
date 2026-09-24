<script setup>
import MemberItem from './MemberItem.vue'

defineProps({
  members: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'mark-active',
  'delete-member'
])
</script>

<template>
  <div>
    <h2>Member List</h2>

    <p v-if="members.length === 0">
      No members have been added yet.
    </p>

    <MemberItem
      v-for="member in members"
      :key="member.id"
      :member="member"
      @mark-active="emit('mark-active', $event)"
      @delete-member="emit('delete-member', $event)"
    />
  </div>
</template>
