import { render } from "./render"


export const filterUsers = () => {
    const btnIsChildren = document.getElementById('btn-isChildren')
    const btnIsPermissions = document.getElementById('btn-isPermissions')
    const btnIsAll = document.getElementById('btn-isAll')

    btnIsChildren.addEventListener('click', (e) => {
        userService.filterUsers('children').then(users => {
            render(users);
        })
    })
    btnIsPermissions.addEventListener('click', (e) => {
        userService.filterUsers('permissions').then(users => {
            render(users);
        })
    })
    btnIsAll.addEventListener('click', (e) => {
        userService.getUsers().then(users => {
            render(users);
        })
    })
}