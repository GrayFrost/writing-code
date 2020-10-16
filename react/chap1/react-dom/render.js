import { setAttribute } from "./dom";
export function render(vnode, container) {
    if (typeof vnode === "string") {
        const textNode = document.createTextNode(vnode);
        container.appendChild(textNode);
    }
    let dom = document.createElement(vnode.tag);
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach((key) => {
            setAttribute(dom, key, vnode.attrs[key]);
        });
    }
    if (vnode.children && vnode.children.length) {
        vnode.children.forEach((child) => render(child, dom));
    }

    return container.appendChild(dom);
}
