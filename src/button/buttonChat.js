function renderAddChat() {
    const button = document.createElement('button');
    button.className = 'button';

    button.addEventListener('click', function (event) {
        alert('Add chat!');
    });

    const text = document.createElement('span');
    text.textContent = 'Add chat';
    button.appendChild(text);

    const wrapper = document.createElement('div');
    wrapper.className = 'chat_button';

    wrapper.appendChild(button);
    return wrapper;
}
export { renderAddChat }