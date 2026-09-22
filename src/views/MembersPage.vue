<script setup>
    import { ref, watch } from 'vue'

    const fullName = ref('')
    const email = ref('')
    const clubRole = ref('')
    const joinDate = ref('')

    fullName.value = localStorage.getItem('fullName') || ''
    email.value = localStorage.getItem('email') || ''
    clubRole.value = localStorage.getItem('clubRole') || ''
    joinDate.value = localStorage.getItem('joinDate') || ''


    watch(fullName, (newValue)=>{
        localStorage.setItem('fullName', newValue)
    })
    watch(email, (newValue)=>{
        localStorage.setItem('email', newValue)
    })
    watch(clubRole, (newValue)=>{
        localStorage.setItem('clubRole', newValue)
    })
    watch(joinDate, (newValue)=>{
        localStorage.setItem('joinDate', newValue)
    })

    function addMember(){
        alert(`Registration successful\nWelcome, ${fullName.value}`)
    }

    function clearForm(){
        fullName.value = ''
        email.value = ''
        clubRole.value = ''
        joinDate.value = ''
        localStorage.removeItem('fullName')
        localStorage.removeItem('email')
        localStorage.removeItem('clubRole')
        localStorage.removeItem('joinDate')
    }

</script>

<template>
    <div class="container py-5">
        <div class="col-lg-7">
            <div class="card shadow-sa border-0">
                <div class="card-body p-4">
                    <h3 class="fw-bold mb-4">
                        Create An Account
                    </h3>

                    <form @submit.prevent="addMember">
                        <div class="mb-3">
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
                        <div class="mb-3">
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
                        <div class="mb-3">
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
                        <div class="mb-3">
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
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex gap-2">
        <button
        type="submit"
        class="btn btn-primary"
        @click="addMember"
        >Add Member
    </button>
    <button
        type="submit"
        class="btn btn-outline-danger"
        @click="clearForm"
        >Clear form data
    </button>
    </div>

</template>