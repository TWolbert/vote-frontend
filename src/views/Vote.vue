<script lang="ts" setup>
import { onMounted } from 'vue';
import $ from 'jquery';
import { ref } from 'vue';
import type { ModpackType } from '@/UserType';
import { user } from '@/store';

const modpacks = ref<ModpackType[]>([]);
const SubmitScore = (e: Event) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const pack_id = form.pack_id.value;
    const score = form.score.value;
    const user_id = user.id;

    $.ajax({
        url: 'http://localhost:8000/modpacks/submit.php',
        method: 'POST',
        data: {
            pack_id: pack_id,
            score: score,
            user_id: user_id
        },
        success: function (data) {
            let ndata = JSON.parse(data);
            console.log(ndata);
        },
        error: function (err) {
            console.log(err);
        }
    });
};


onMounted(() => {

    // check for user
    if (!localStorage.getItem('user')) {
        document.location.href = '/login';
    }
    $.ajax({
        url: 'http://localhost:8000/modpacks/getmodpacks.php',
        method: 'GET',
        success: function (data) {
            let ndata = JSON.parse(data);

            modpacks.value = ndata.modpacks;
        },
        error: function (err) {
            console.log(err);
        }
    });
});
</script>

<template>
    <div class="bg-black min-h-[100vh] min-w-[100vw] text-white flex items-center flex-col justify-center">
        <h1 class="mb-5 text-5xl font-bold text-center">Stem</h1>
        <!-- map out modpacks -->
        <div class="flex flex-col items-center justify-center p-2 bg-black rounded-xl min-w-[30%]">
            <div v-for="modpack in modpacks" :key="modpack.id"
                class="flex flex-col items-center justify-center p-2 bg-[#040404] rounded-xl max-w-[60%] ">
                <!-- Render image -->
                <div class="flex gap-2">
                    <img :src="modpack.image" class="h-full rounded-md max-w-40" />
                    <div>
                        <h1 class="text-2xl font-bold">{{ modpack.name }}</h1>
                        <p>{{ modpack.description }}</p>
                        <!-- Allow user to click buttons 1 to 5 -->
                        <form class="flex gap-2" @submit="SubmitScore">
                            <input type="hidden" name="pack_id" :value="modpack.id" />
                            <select name="score" class="p-2 m-2 text-white bg-gray-800 rounded-lg">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3" selected>3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button type="submit" class="p-2 m-2 text-white bg-gray-800 rounded-lg">Submit {{ modpack.name }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>