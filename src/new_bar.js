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
        options.x !== undefined && (this.parent.style.left = options.x + 'px');
        options.width !== undefined &&
            (this.parent.style.width = options.width + 'px');
        options.y !== undefined && (this.parent.style.top = options.y + 'px');
        options.height !== undefined &&
            (this.parent.style.height = options.height + 'px');

        let rx = 3;
        if (this.className) {
            this.bar.className = 'new-bar ' + this.className;
            if (this.className === 'project') {
                rx = options.height / 2;
            }
        } else {
            this.bar.className = 'new-bar';
        }
        this.bar.style['border-radius'] = rx + 'px';
    }

    setBarTypeState(className) {
        this.className = className;
    }

    show(options) {
        this.setPosition(options);
        // show
        this.parent.style.opacity = 1;
    }

    hide() {
        this.parent.style.opacity = 0;
        this.setPosition({
            width: 0,
            height: 0,
            x: 0,
            y: 0
        });
    }
}
