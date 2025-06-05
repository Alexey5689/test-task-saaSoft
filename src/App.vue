<script setup>
import AddAccount from '@/components/AddAccount.vue';
import AccountList from '@/components/AccountList.vue';
import { useAccountStore } from '@/stores/account';

const accountStore = useAccountStore();
</script>
<template>
    <header class="header container">
        <h1>Тестовое задание SaaSoft</h1>
    </header>
    <main class="container">
        <add-account />
        <account-list />
    </main>
</template>

<style scoped>
.header {
    padding-top: 50px;
}
.section {
    padding-block: 25px;
}
</style>
