<script setup lang="ts">
import { useAccountStore } from '@/stores/account';

const accountStore = useAccountStore();
</script>

<template>
    <section class="section container">
        <ul class="section-header">
            <li>Метки</li>
            <li>Типы записи</li>
            <li>Логин</li>
            <li>Пароль</li>
        </ul>
        <div class="section-body">
            <div class="section-item">
                <div>
                    <textarea class="form-control flex-fill"></textarea>
                </div>
                <div>
                    <select class="form-select flex-fill" aria-label="Default select example">
                        <option selected>Выберите тип</option>
                        <option value="Локальная">Локальная</option>
                        <option value="LDAP">LDAP</option>
                    </select>
                </div>
                <div><input type="text" class="form-control flex-fill" /></div>
                <div>
                    <input :type="accountStore.getShowPass ? 'text' : 'password'" class="form-control" />
                    <button
                        type="button"
                        @click="accountStore.showPass = !accountStore.showPass"
                        class="btn position-absolute translate-middle-y"
                        aria-label="Показать пароль"
                    >
                        <i :class="accountStore.getShowPass ? 'bi-eye-slash' : 'bi-eye'"></i>
                    </button>
                </div>
                <div>
                    <button class="btn flex-shrink-0 button-trash" aria-label="Удалить">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.section-header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin: 0;
    padding: 0;
}
.section-header > li,
.section-item,
textarea {
    height: 40px;
}
.section-header > li,
.section-item {
    display: flex;
    align-items: center;
}

li:first-child,
.section-item > div:first-child {
    min-width: 300px;
}
li:nth-child(2),
.section-item > div:nth-child(2) {
    min-width: 250px;
}
li:nth-child(3),
li:nth-child(4),
.section-item > div:nth-child(3),
.section-item > div:nth-child(4) {
    min-width: 320px;
}
li:last-child,
.section-item > div:last-child {
    min-width: 40px;
}
.section-body {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.section-item {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}
textarea {
    resize: none;
    min-height: 40px;
}

textarea,
select,
input {
    width: 90%;
}
.section-item > div:nth-child(4) {
    position: relative;
}

input[type='password'] {
    padding-right: 35px;
}
input[type='password']::-ms-reveal {
    display: none;
}

button[type='button'] {
    background: transparent;
    border: none;
    color: #6c757d;
    width: 35px;
    transform: translateY(-50%);
    top: 50%;
    right: 40px;
}
.button-trash {
    width: 40px;
    height: 38px;
}
</style>
