import React from 'react';
import { ArrowDown, UsersSearch, Check } from 'trinil-react';
import './App.css';

export function App() {
  return (
    <div className="app">
      <h1>Trinil React Icon Library</h1>
      <p>This example demonstrates how to use icons from trinil-react</p>

      <section className="demo-section">
        <h2>Default Icons (24px, currentColor)</h2>
        <div className="icon-grid">
          <div className="icon-item">
            <ArrowDown />
            <p>ArrowDown</p>
          </div>
          <div className="icon-item">
            <UsersSearch />
            <p>UsersSearch</p>
          </div>
          <div className="icon-item">
            <Check />
            <p>Check</p>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>Large Icons (48px)</h2>
        <div className="icon-grid">
          <div className="icon-item">
            <ArrowDown size={48} />
          </div>
          <div className="icon-item">
            <UsersSearch size={48} />
          </div>
          <div className="icon-item">
            <Check size={48} />
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>Colored Icons</h2>
        <div className="icon-grid">
          <div className="icon-item">
            <ArrowDown size={32} color="red" />
          </div>
          <div className="icon-item">
            <UsersSearch size={32} color="blue" />
          </div>
          <div className="icon-item">
            <Check size={32} color="green" />
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>With Accessibility</h2>
        <div className="icon-grid">
          <div className="icon-item">
            <ArrowDown ariaLabel="Scroll down" />
          </div>
          <div className="icon-item">
            <UsersSearch title="Search for users" />
          </div>
          <div className="icon-item">
            <Check ariaLabel="Completed" className="text-success" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
