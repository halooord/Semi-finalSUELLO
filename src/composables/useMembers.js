import { ref, watch, onMounted } from 'vue'

 export function useMembers() {
 	const members = ref([])

 	function addMember(member) {
     	members.value.push(member)
 	}

 	function removeMember(id) {
     	members.value = members.value.filter(
         	record => record.id !== id
     	)
 	}

    function markAsActive(id) {
        const member = members.value.find(record => record.id === id)
        if (member) {
            member.active = true
        }
    }
    
    onMounted(()=>{
        const savedRecords = localStorage.getItem('members')
        if(savedRecords){
            members.value = JSON.parse(savedRecords)
        }
    })

    watch(members, (newMembers) => {
        localStorage.setItem('members', JSON.stringify(newMembers))
    }, { deep: true })

 	return {
     	members,
     	addMember,
     	removeMember,
     	markAsActive
 	}
 }
