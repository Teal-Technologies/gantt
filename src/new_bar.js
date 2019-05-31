export default class GhostBar {
    constructor(parent) {
        this.parent = parent;
        this.make();
    }

    make() {
        this.parent.innerHTML = `
            <div class="new-bar"></div>
        `;

        this.bar = this.parent.querySelector('.new-bar');
    }

    setPosition(options) {
        options.x && (this.parent.style.left = options.x + 'px');
        options.width && (this.parent.style.width = options.width + 'px');
        options.y && (this.parent.style.top = options.y + 'px');
        options.height && (this.parent.style.height = options.height + 'px');
    }

    show(options) {
        this.setPosition(options);
        // show
        this.parent.style.opacity = 1;
    }

    hide() {
        this.parent.style.opacity = 0;
    }
}
