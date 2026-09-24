<script setup>
import MemberForm from '../components/MemberForm.vue'
import MemberList from '../components/MemberList.vue'
import { useMembers } from '../composables/useMembers'

const {
  members,
  activeMembers,
  addMember,
  markActive,
  deleteMember
} = useMembers()

function handleMemberAdded(member) {
  addMember(member)
}

function handleMarkActive(id) {
  markActive(id)
}

function handleDeleteMember(id) {
  deleteMember(id)
}
</script>

<template>
  <div>
    <h1>Members</h1>

    <div class="stats">
      <div>
        <strong>Total Members</strong>
        <span>{{ members.length }}</span>
      </div>

      <div>
        <strong>Active Members</strong>
        <span>{{ activeMembers.length }}</span>
      </div>
    </div>

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

