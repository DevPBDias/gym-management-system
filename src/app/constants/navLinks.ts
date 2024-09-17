export default interface ILinks {
    id: number,
    name: string,
    path: string,
}

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        path: '/dashboard',
    },
    {
        id: 2,
        name: 'Treinos',
        path: '/training',
    },
    {
        id: 3,
        name: 'Avaliações',
        path: '/evaluation',
    },
    {
        id: 4,
        name: 'Perfil',
        path: '/profile',
    }
]