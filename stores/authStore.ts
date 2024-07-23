import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        domain: '' as string,
    }),
    actions: {
       handlelogin : {
        
       }
    }
})