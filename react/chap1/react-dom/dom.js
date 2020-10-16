export function setAttribute(dom, name, value) {
    if (name === "className") {
        name = "class";
    }
    if (/on\w+/.test(name)) {
        name = name.toLowerCase();
        dom[name] = value || "";
    } else if (name === "style") {
        if (!value || typeof name === "string") {
            dom.style.cssText = value || "";
        } else if (value && typeof name === "object") {
            for (let v in value) {
                dom.style[v] =
                    typeof value[v] === "number" ? value[v] + "px" : value[v];
            }
        }
    } else {
        if (name in dom) {
            dom[name] = value || "";
        }
        if (value) {
            dom.setAttribute(name, value);
        } else {
            dom.removeAttribute(name, value);
        }
    }
}
