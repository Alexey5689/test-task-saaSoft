import { defineStore } from 'pinia';
import { computed, ref, watchEffect } from 'vue';
import { Account, AccountList } from '@/types/accountType';

export const useAccountStore = defineStore('account', () => {
    const account = ref<Account | null>(null);
    const accounts = ref<AccountList<Account>>({
        data: loadFromLocalStorage() || [],
    });
    const getAccount = computed(() => account.value);
    const getAccounts = computed(() => accounts.value.data);

    function loadFromLocalStorage(): Account[] {
        const saved = localStorage.getItem('accounts');
        return saved ? JSON.parse(saved) : [];
    }
    function saveToLocalStorage() {
        localStorage.setItem('accounts', JSON.stringify(accounts.value.data));
    }
    function isShowPassword(accountId: number) {
        const account = accounts.value.data.find((a) => a.id === accountId);
        if (account) {
            account.showPassword = !account.showPassword;
        }
    }
    function addAccount(newAccount: Omit<Account, 'id'>) {
        const accountWithId: Account = {
            id: Date.now(),
            showPassword: false,
            mark: [{ text: '' }],
            type: '',
            login: '',
            password: '',
            ...newAccount,
        };
        accounts.value.data.push(accountWithId);
    }

    const validationState = ref<Record<number, { type: boolean; login: boolean; password: boolean }>>({});
    function validateField(accountId: number, field: string, value: string): boolean {
        const account = accounts.value.data.find((a) => a.id === accountId);
        if (!account) return false;

        // Инициализируем состояние валидации для аккаунта, если его нет
        if (!validationState.value[accountId]) {
            validationState.value[accountId] = {
                type: false,
                login: false,
                password: false,
            };
        }

        let isValid = false;

        if (field === 'type') {
            account.password = '';
            isValid = value !== '';
            if (value === 'LDAP') {
                account.password = null;
                account.showPassword = false;
                isValid = true;
            }
            validationState.value[accountId].type = isValid;
        } else if (field === 'login') {
            isValid = value.trim().length > 0 && value.length <= 100;
            validationState.value[accountId].login = isValid;
        } else if (field === 'password') {
            isValid = account.type === 'LDAP' || (value.trim().length > 0 && value.length <= 100);
            validationState.value[accountId].password = isValid;
        }

        // Проверяем все поля
        const allValid =
            validationState.value[accountId].type &&
            validationState.value[accountId].login &&
            validationState.value[accountId].password;

        if (allValid) {
            saveToLocalStorage();
        }

        return isValid;
    }
    function updateMark(accountId: number, markString: string) {
        const account = accounts.value.data.find((a) => a.id === accountId);
        if (!account) return;
        account.mark = markString.split(';').map((text) => ({ text: text.trim() }));
        validateField(accountId, 'mark', markString);
    }

    function getMarkAsString(accountId: number): string {
        const account = accounts.value.data.find((a) => a.id === accountId);
        return account?.mark.map((item) => item.text).join('; ') || '';
    }
    function removeAccount(id: number) {
        accounts.value.data = accounts.value.data.filter((item) => item.id !== id);
        saveToLocalStorage();
    }

    return {
        account,
        accounts,
        getAccount,
        getAccounts,
        getMarkAsString,
        updateMark,
        addAccount,
        removeAccount,
        isShowPassword,
        validateField,
    };
});
