export const getTemplateNode = async (name) => {
    const template = document.querySelector(name).cloneNode(true);
    return template;
};
