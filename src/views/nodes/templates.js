export const getTemplateNode = (name) => {
    const template = document.querySelector(name).cloneNode(true);
    return template;
}