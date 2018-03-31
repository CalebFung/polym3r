import { PolymerElement, html } from 'lib/@polymer/polymer/polymer-element.js';
import css from './app.css';
import template from './app.html';
import 'component/my-component.js';

export class App extends PolymerElement {
    static get template() {
      return html([`<style>${css}</style> ${template}`]);
    }
}
// Defined custom element cannot be a single word
customElements.define('app-root', App);