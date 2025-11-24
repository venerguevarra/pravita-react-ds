import { Button } from './components';

function App() {
  return (
    <main
      style={{
        padding: '24px',
        fontFamily:
          "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <h1>Design System Sandbox</h1>
      <p>
        Local playground for testing design-system components during development.
      </p>

      <section
        style={{
          marginTop: '16px',
          display: 'flex',
          gap: '12px',
        }}
      >
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="subtle">Subtle</Button>
      </section>
    </main>
  );
}

export default App;
