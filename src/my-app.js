// Basic required imports
import { LitElement, html, css } from "lit-element";
import "./my-list";

// Create a class form your component and extend the LitElement
class MyApp extends LitElement {
    static get styles() {
        return css`
            .btn {
                border: 2px solid #000;
                background-color: transparent;
                text-transform: uppercase;
                padding: 14px 18px;
                font-family: var(--font);
                font-size: 14px;
                font-weight: 500;
                margin-top: 10px;
                margin-left: 15px;
                cursor: pointer;
                outline: none;
            }
        `;
    }

    static get properties() {
        return {
            list: { type: Array },
            data: { type: Array },
        };
    }

    constructor() {
        super();
        this.list = [];
        this.data = [
            { id: 0, name: "Interstellar", year: 2014 },
            { id: 1, name: "The Martian", year: 2015 },
            { id: 2, name: "Batman: The Dark Night", year: 2008 },
            { id: 3, name: "Matrix", year: 1999 },
            { id: 5, name: "Batman v Superman", year: 2016 },
        ];
    }

    render() {
        return html`
            <button @click=${this._onCreateList} class="btn">
                Create List
            </button>
            <button @click=${this._onDeleteList} class="btn">Empty List</button>

            <my-list .items=${this.list} title="My Favorites Movies"></my-list>
        `;
    }

    _onCreateList() {
        this.list = this.data;
    }

    _onDeleteList() {
        this.list = [];
    }
}

// Register yout element to sutom elements
customElements.define("my-app", MyApp);
