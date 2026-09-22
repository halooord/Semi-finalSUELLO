<template>
  <div>

    <h1>Club Members</h1>

    <MemberForm
      @member-added="handleMemberAdded"
    />

    <MemberList
      :members="members"
      @mark-active="handleMarkActive"
      @delete-member="handleDeleteMember"
    />

  </div>
</template>

<script setup>
import MemberForm from '../components/MemberForm.vue'
import MemberList from '../components/MemberList.vue'

import { useMembers } from '../composables/useMembers.js'

const {
  members,
  addMember,
  removeMember,
  markAsActive
} = useMembers()

function handleMemberAdded(member) {
  addMember(member)
}

function handleMarkActive(id) {
  markAsActive(id)
}

function handleDeleteMember(id) {
  removeMember(id)
}
</script>