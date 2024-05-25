const input = document.querySelector('#favchap');
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', (/*e*/) => {
    e.preventDefault();

    if (input.value !='') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }

    /*const li = document.createElement('li');

    const deleteButton = document.createElement('button');

    li.textContent = input.value;

    deleteButton.textContent = '❌';

    li.appendChild(deleteButton);

    list.appendChild(li);


    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
        input.value = '';
    })
    

} else {
    input.focus();
}*/
});

let chaptersArray = getChaptersList() || [];
chaptersArray.forEach (chapter => {
    displayList(chapter);
})

function displayList(item){
    let li = document.createElement('li');

    let deleteButton = document.createElement('button');

    li.textContent = item;

    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);

    list.append(li);


    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChaptersList(){
    localStorage.setItem('myFavoritBOMList', JSON.stringify(chaptersArray));
}

function getChaptersList(){
    return JSON.parse(localStorage.getItem('myFavoriteBOMList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
}