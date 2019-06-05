import { $, createSVG } from './svg_utils';

export default class Stream {
    constructor(gantt, group, y_pos) {
        this.gantt = gantt;
        this.group = group;
        this.y = y_pos;
        this.prepare();
        this.draw();
        this.bind();
    }

    prepare() {
        this.x = 50;
        this.height = this.gantt.options.stream_header_height;
        this.g_elem = createSVG('g', {
            class: 'stream-label-group',
            'data-id': this.group.id
        });
    }

    draw() {
        this.draw_label();
    }

    draw_label() {
        createSVG('text', {
            x: this.x,
            y: this.y - this.height / 2,
            innerHTML: this.group.name,
            class: 'stream-label',
            append_to: this.g_elem
        });
    }

    bind() {
        $.on(this.g_elem, 'click', e => {
            console.log(`clicked: ${this.group.name}`);
        });
    }
}
