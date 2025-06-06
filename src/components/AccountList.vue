<script setup>
import { useAccountStore } from '@/stores/accounts/account.ts';

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
        <div v-if="accountStore.getAccounts.length" class="section-body">
            <div v-for="account in accountStore.getAccounts" :key="account.id" class="section-item">
                <div>
                    <textarea
                        class="form-control flex-fill"
                        :value="accountStore.getMarkAsString(account.id)"
                        @input="(e) => accountStore.updateMark(account.id, e.target.value)"
                        @blur="accountStore.validateField(account.id, 'mark', accountStore.getMarkAsString(account.id))"
                        maxlength="50"
                    ></textarea>
                </div>
                <div>
                    <select
                        v-model="account.type"
                        class="form-select flex-fill"
                        aria-label="Default select example"
                        :class="{ 'is-invalid': account.type === '' }"
                        @change="accountStore.validateField(account.id, 'type', account.type)"
                    >
                        <option value="" selected>Выберите тип</option>
                        <option value="Локальная">Локальная</option>
                        <option value="LDAP">LDAP</option>
                    </select>
                </div>

                <div :style="{ width: account.type === 'LDAP' ? '640px' : '' }">
                    <input
                        :style="{ width: account.type === 'LDAP' ? '608px' : '' }"
                        v-model="account.login"
                        type="text"
                        class="form-control flex-fill"
                        :class="{ 'is-invalid': !accountStore.validateField(account.id, 'login', account.login) }"
                        maxlength="100"
                        @blur="accountStore.validateField(account.id, 'login', account.login)"
                        @input="accountStore.validateField(account.id, 'login', account.login)"
                        required
                    />
                </div>
                <div v-if="account.type === 'Локальная' || account.type === ''">
                    <input
                        v-model="account.password"
                        :type="account.showPassword ? 'text' : 'password'"
                        class="form-control"
                        maxlength="100"
                        :class="{ 'is-invalid': !accountStore.validateField(account.id, 'password', account.password) }"
                        @blur="accountStore.validateField(account.id, 'password', account.password)"
                        required
                    />
                    <button
                        v-if="accountStore.validateField(account.id, 'password', account.password)"
                        type="button"
                        @click="accountStore.isShowPassword(account.id)"
                        class="btn position-absolute translate-middle-y"
                        aria-label="Показать пароль"
                    >
                        <i :class="account.showPassword ? 'bi-eye-slash' : 'bi-eye'"></i>
                    </button>
                </div>
                <div>
                    <button
                        @click="accountStore.removeAccount(account.id)"
                        class="btn flex-shrink-0 btn-outline-danger button-trash"
                        aria-label="Удалить"
                    >
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="text-bg-danger p-3">Список учетных записей пуст</div>
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
