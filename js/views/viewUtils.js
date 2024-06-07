// Utilities for handling view updates
class ViewUtils {
    static updateElementText(selector, newText) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = newText;
        }
    }

    static createElement(tag, className, content) {
        let elem = document.createElement(tag);
        if (className) elem.className = className;
        if (content) elem.textContent = content;
        return elem;
    }

    static appendElement(parentSelector, child) {
        const parent = document.querySelector(parentSelector);
        if (parent) {
            parent.appendChild(child);
        }
    }
}
