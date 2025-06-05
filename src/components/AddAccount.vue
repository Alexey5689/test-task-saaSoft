<script setup lang="ts">
import { useAccountStore } from '@/stores/account';

const accountStore = useAccountStore();
</script>
<template>
    <section class="section container">
        <div class="section-body">
            <div class="section-content">
                <h4>Учетные записи</h4>
                <button type="button" @click="accountStore.addAccount" class="btn btn-outline-info icon-plus">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
            <div class="section-warning">
                <span
                    ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1="13" y1="17" x2="11" y2="17" />
                    </svg>
                </span>
                <p>Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
            </div>
        </div>
    </section>
</template>
<style scoped>
.section-body {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.section-content {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 20px;
}
.section-content > h4 {
    margin: 0;
}
.section-warning {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    background-color: rgb(216, 230, 235);
}
</style>
