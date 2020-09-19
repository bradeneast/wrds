export default event => {
    let target = event.target || event;
    let tokenize = (token, type) => `<span class="token ${type}">${token}</span>`;
    target.innerHTML = target.innerText
        .replace(/\n/g, '')
        .replace(/;/g, tokenize(';', 'newline'))
        .replace(/[,:](?!\s)/g, substr => substr + ' ')
}