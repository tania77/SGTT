import { Membership } from './membership.type';

export interface Team {
    id: string;
    name: string;
    displayName: string;
    desc: string;
    descData: string;
    idBoards: string[];
    memberships: Membership[];
}
