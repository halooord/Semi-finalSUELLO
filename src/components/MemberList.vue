<template>
  <div class="list-container">
    <h2>Members</h2>

    <p v-if="members.length === 0">
      No members have been added yet.
    </p>

    <div v-else>
      <MemberItem
        v-for="member in members"
        :key="member.id"
        :member="member"
        @mark-active="$emit('mark-active', $event)"
        @delete-member="$emit('delete-member', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import MemberItem from './MemberItem.vue'

defineProps({
  members: {
    type: Array,
    required: true
  }
})

defineEmits([
  'mark-active',
  'delete-member'
])
</script>