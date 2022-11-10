import buttonStyles from './button.scss';

const CHAT_NAMES = [
    'Room 1',
    'Room 2',
    'Room 3',
    'Room 4',
    'Room 5',
    'Room 6',
    'Room 7',
    'Room 8',
    'Room 9',
    'Room 10',
    'Room 11',
    'Room 12',
];
function renderChat() {
    const ul = document.createElement('ul');
    ul.className = 'chat_list';

    const hr = document.createElement('hr');
    ul.appendChild(hr);

    CHAT_NAMES.forEach(item => {
        const li = document.createElement('li');
        const hr = document.createElement('hr');
        li.textContent = item;
        li.className = 'chat_item';
        ul.appendChild(li);
        ul.appendChild(hr);
    });

    return ul;
}

function renderAddButton() {
    const button = document.createElement('button');
    button.className = 'button';

    button.addEventListener('click', function (event) {
        console.log('Add chat!');
    });

    const text = document.createElement('span');
    text.textContent = 'Add chat';
    button.appendChild(text);

    const wrapper = document.createElement('div');
    wrapper.className = 'chat_button';

    wrapper.appendChild(button);
    return wrapper;
}
//__________________________\\
function renderAddChat() {
    const button = document.createElement('button');
    button.className = 'button';

    button.addEventListener('click', function (event) {
        console.log('Add chat!');
    });

    const text = document.createElement('span');
    text.textContent = 'Add chat';
    button.appendChild(text);

    const wrapper = document.createElement('div');
    wrapper.className = 'chat_button';

    wrapper.appendChild(button);
    return wrapper;
}
//__________________\\
function renderAddRoom() {
    const button = document.createElement('button');
    button.className = 'button';

    button.addEventListener('click', function (event) {
        console.log('Add room!');
    });

    const text = document.createElement('span');
    text.textContent = 'Add Room';
    button.appendChild(text);

    const wrapper = document.createElement('div');
    wrapper.className = 'chat_button';

    wrapper.appendChild(button);
    return wrapper;
}
//__________________\\
const wrapper = document.createElement('div');
wrapper.className = 'chat_wrapper';

wrapper.appendChild(renderChat());

export { wrapper as wrapper_button_room };
export {renderAddChat, renderAddRoom}

