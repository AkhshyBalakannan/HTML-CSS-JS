const button = document.querySelector('.btn');
const userId = document.querySelector('#userId');
const comment = document.querySelector('#comments');
const afterThis = document.querySelector('.newRow');
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(userId.value === '') && !(comment.value === '')) {
        addToComments();
    }
    userId.value = '';
    comment.value = '';
})
const addToComments = () => {
    const addHolder = document.createElement('tr');
    const ownerComment = document.createElement('td');
    const addContent = document.createElement('td');
    addHolder.appendChild(ownerComment);
    ownerComment.after(addContent);
    afterThis.append(addHolder);
    ownerComment.innerText = userId.value;
    addContent.innerText = comment.value;
}
const togglebutton = document.querySelector('.btntoggler');
const autotogglebutton = document.querySelector('.btnautotoggler');
const offautotoggler = document.querySelector('.btnoffautotoggler');
var id = 1;
const html = document.querySelector('html');
togglebutton.addEventListener('click', () => {
    color();
})
autotogglebutton.addEventListener('click', () => {
    id = setInterval(() => {
        color();
    }, 1000)
})
offautotoggler.addEventListener('click', () => {
    clearInterval(id);
})
afterThis.addEventListener('click', (e) => {
    e.target.remove();
})
const color = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.querySelector('html').style.backgroundColor = `rgb(${r},${g},${b})`;
}