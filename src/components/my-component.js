import { PolymerElement, html } from 'lib/@polymer/polymer/polymer-element.js';
import css from './my-component.css';
import template from './my-component.html';

export class MyComponent extends PolymerElement {
    static get template() {
      return html([`<style>${css}</style> ${template}`]);
    }
}
// Defined custom element cannot be a single word
customElements.define('my-component', MyComponent);