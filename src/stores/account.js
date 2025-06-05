import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
export const useAccountStore = defineStore('account', () => {
    const showPass = ref(false);

    const getShowPass = computed(() => showPass.value);

    return { getShowPass, showPass };
});
