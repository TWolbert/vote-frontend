<script lang="ts" setup>
import $ from 'jquery'
import { user } from '@/store';
import { ref } from 'vue'
const username = ref('')
const password = ref('')

if (!document.location.href.includes('localhost')) {
    document.location.href = "/"
}

function Register(e: Event) {
    e.preventDefault()

    $.ajax({
        url: 'http://localhost:8000/auth/register.php',
        method: 'POST',
        data: {
            username: username.value,
            password: password.value
        },
        success: function (data) {
            let ndata = JSON.parse(data)

            // redirect to login page
            alert(ndata.message)
            console.log(ndata)

            document.location.href = '/login'
        },
        error: function (err) {
            console.log(err)
        }
    })

}
</script>

<template>
  <div class="bg-black min-h-[100vh] min-w-[100vw] text-white flex items-center flex-col justify-center">
    <h1 class="mb-5 text-5xl font-bold text-center">Registreer</h1>
    <p>
      (als deze werkt op prod gaat er iets goed mis meld t dan ff)
    </p>
    <form class="flex flex-col items-center justify-center p-2 bg-slate-500 rounded-xl min-w-[30%]">
      <input v-model="username" type="text" placeholder="Username" class="w-full p-2 m-2 text-white bg-gray-800 rounded-lg">
      <input v-model="password" type="password" placeholder="Password" class="w-full p-2 m-2 text-white bg-gray-800 rounded-lg">
      <button @click="Register" class="w-full p-2 m-2 text-white bg-gray-800 rounded-lg">Log in</button>
    </form>
  </div>
</template>