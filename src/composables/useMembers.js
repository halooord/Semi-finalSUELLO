import { ref, computed, watch, onMounted } from 'vue'

export function useMembers() {
  const members = ref([])

  onMounted(() => {
    const savedRecords = localStorage.getItem('members')

    if (savedRecords) {
      try {
        members.value = JSON.parse(savedRecords)
      } catch (error) {
        console.error('Error loading members:', error)
        members.value = []
      }
    }
  })

  function addMember(member) {
    members.value.push({
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
      joinDate: member.joinDate,
      active: false
    })
  }

  function markActive(id) {
    const member = members.value.find(
      member => member.id === id
    )

    if (member) {
      member.active = true
    }
  }

  function deleteMember(id) {
    members.value = members.value.filter(
      member => member.id !== id
    )
  }

  const activeMembers = computed(() => {
    return members.value.filter(
      member => member.active
    )
  })

  watch(
    members,
    newMembers => {
      localStorage.setItem(
        'members',
        JSON.stringify(newMembers)
      )
    },
    {
      deep: true
    }
  )

  return {
    members,
    activeMembers,
    addMember,
    markActive,
    deleteMember
  }
}
