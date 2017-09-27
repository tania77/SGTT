import { Usuario } from './usuario.type';
export interface Membership {
    id: string;
    idMember: string;
    memberType: string;
    user: Usuario;
}
