import { getTemplateNode } from './templates';
import * as blocksJSON from '../../models/JSON/details.json';
import { asyncQuerySelector } from '../../helper/tools';

export const building = async () => {
    const blocks = blocksJSON.default;
    const details = document.querySelector('.details');
    for (let block of blocks) {
        const node = await createBlockNode(block);
        details.appendChild(node);
    }
};

const createBlockNode = async (block) => {
    const node = await getTemplateNode('.details-block');
    node.className = `detail ${block.class}`;
    node.querySelector('.name').textContent = block.name;
    appendSvg(block, node);
    return node;
};

const appendSvg = async (block, node) => {
    asyncQuerySelector(document, `.${block.class}`).then((icon) => {
        asyncQuerySelector(node, '.icon-wrapper').then((node) => {
            node.appendChild(icon);
        });
    });
};
