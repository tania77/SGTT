import { Team } from './team.type';
export interface Usuario {
    id: string;
    fullName: string;
    username: string;
    idOrganizations: string[];
    teams: Team[];
}
