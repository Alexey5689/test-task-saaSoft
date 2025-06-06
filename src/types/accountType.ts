export interface Account {
    id: number;
    mark: { text: string }[];
    type: string;
    login: string;
    password: string | null;
    showPassword: boolean;
}

export interface AccountList<T extends Account> {
    data: T[];
}
