<script lang="ts" setup>
import { user } from '@/store';
import $ from 'jquery'
import { ref } from 'vue'
const username = ref('')
const password = ref('')

function Login(e: Event) {
    e.preventDefault();

    $.ajax({
        url: 'http://localhost:8000/auth/login.php',
        method: 'POST',
        data: {
            username: username.value,
            password: password.value
        },
        success: function (data) {
            let ndata = JSON.parse(data)

            alert(ndata.message)
            console.log(ndata)

            user.setUser(ndata.user)

            localStorage.setItem('user', JSON.stringify(ndata.user))
        },
        error: function (err) {
            console.log(err)
        }
    })
}

if (localStorage.getItem('user')) {
    document.location.href = '/'
}

</script>

<template>
  <div class="bg-black min-h-[100vh] min-w-[100vw] text-white flex items-center flex-col justify-center">
    <h1 class="mb-5 text-5xl font-bold text-center">Log in</h1>
    <form class="flex flex-col items-center justify-center p-2 bg-slate-500 rounded-xl min-w-[30%]">
      <input v-model="username" type="text" placeholder="Username" class="w-full p-2 m-2 text-white bg-gray-800 rounded-lg">
      <input v-model="password" type="password" placeholder="Password" class="w-full p-2 m-2 text-white bg-gray-800 rounded-lg">
      <button @click="Login" class="w-full p-2 m-2 text-white bg-gray-800 rounded-lg">Log in</button>
    </form>
  </div>
</template>