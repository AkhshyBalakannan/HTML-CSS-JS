document.addEventListener('DOMContentLoaded', () => {
    const add = document.querySelector('#create')
    const del = document.querySelector('#delete')
    document.body.addEventListener('click', (e) => {
        if (!document.cookie) {
            document.getElementById("output").textContent = "No cookies currently";
        }
    })

    add.addEventListener('click', (e) => {
        let key = 'User';
        let value = "AKHSHY GANESH";
        let days = 60 * 60 * 24 * 30;
        document.cookie = `${key}=${value};path=/; max-age=${days};`;
    });

    del.addEventListener('click', (e) => {
        let key = 'User';
        document.cookie = `${key}=; path=/;`;
    });

});