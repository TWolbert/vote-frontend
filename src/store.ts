import { reactive } from "vue";
import type { UserType } from "./UserType";

export const user = reactive({
    id: 0,
    username: '',
    realname: '',
    authority: 0,
    token: '',
    setUser(user: UserType) {
        this.id = user.id;
        this.username = user.username;
        this.realname = user.realname;
        this.authority = user.authority;
        this.token = user.token;
    }
 })