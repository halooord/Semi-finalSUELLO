<template>
    <div class="form-container">
        <h2>Add New Member</h2>

                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <label class="form-label fw-semibold">
                                Full Name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="fullName"
                                placeholder="Enter your full name"
                                required
                                >
                        </div>
                        <div class="form-group">
                            <label class="form-label fw-semibold">
                                Email
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="email"
                                placeholder="Enter your full email"
                                required
                                >
                        </div>
                        <div class="form-group">
                            <label class="form-label fw-semibold">
                                clubRole
                            </label>
                            <select
                                class="form-select"
                                v-model="clubRole"
                                required
                                >
                                <option value="">Select your Role</option>
                                <option value="Member">Member</option>
                                <option value="Officer">Officer</option>
                                <option value="Treasurer">Treasurer</option>
                                <option value="President">President</option>
                                
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label fw-semibold">
                                Join Date
                            </label>
                            <input
                                type="date"
                                class="form-control"
                                v-model="joinDate"
                                placeholder="Enter your joinDate number"
                                required
                                >
                        </div>
                        <button type="submit" class="add-button">
                         Add Member
                        </button>
                    </form>
                </div>
</template>
<script setup>
import {ref, reactive} from 'vue'

const emit = defineEmits(['member-added'])

const form = reactive({
    fullName: '',
    email: '',
    clubRole: '',
    joinDate: ''
})

const errorMessage = ref('')

function submitForm() {
    if (
        !form.fullName ||!form.email || !form.clubRole || !form.joinDate) {
        errorMessage.value = 'Please fill in all fields.'
        return
    }
}

const newMember ={
    id: Date.now(),
    fullName: form.fullName,
    email: form.email,
    clubRole: form.clubRole,
    joinDate: form.joinDate,
    status: 'Pending'
}

emit('member-added', newMember)
form.fullName = ''
form.email = ''
form.clubRole = ''
form.joinDate = ''
errorMessage.value = ''
</script>