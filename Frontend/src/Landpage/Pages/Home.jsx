import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Plan. Organize. Get Things Done.</h1>
          <p className="hero-subtitle">
            A simple and powerful Kanban workspace to organize your projects,
            manage tasks, and keep your work moving.
          </p>
          <p className="hero-description">
            Create boards, organize tasks into columns, prioritize your work,
            and track progress — all in one place.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Explore Features</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">
          Everything You Need to Manage Your Work
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📋</span>
            <h3 className="feature-card-title">Organize Projects</h3>
            <p className="feature-card-description">
              Create separate boards for different projects, goals, or workflows.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🗂️</span>
            <h3 className="feature-card-title">Manage Tasks</h3>
            <p className="feature-card-description">
              Create, edit, and delete tasks while keeping everything organized
              inside your boards.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🔄</span>
            <h3 className="feature-card-title">Drag & Drop</h3>
            <p className="feature-card-description">
              Move tasks between To Do, In Progress, and Done with an intuitive
              drag-and-drop experience.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3 className="feature-card-title">Set Priorities</h3>
            <p className="feature-card-description">
              Identify important tasks quickly by assigning Low, Medium, or High
              priority.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📅</span>
            <h3 className="feature-card-title">Track Deadlines</h3>
            <p className="feature-card-description">
              Add due dates to tasks and keep your work on schedule.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3 className="feature-card-title">Stay Productive</h3>
            <p className="feature-card-description">
              A clean workspace designed to help you focus on what needs to be
              done.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2 className="how-it-works-title">How It Works</h2>
        <div className="how-it-works-steps">
          <div className="step-card">
            <span className="step-number">01</span>
            <h3 className="step-title">Create a Board</h3>
            <p className="step-description">
              Start a workspace for your project or goal.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h3 className="step-title">Add Your Tasks</h3>
            <p className="step-description">
              Break your work into manageable tasks and add the details you need.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h3 className="step-title">Move & Track</h3>
            <p className="step-description">
              Drag tasks across your workflow as your work progresses.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">04</span>
            <h3 className="step-title">Get Things Done</h3>
            <p className="step-description">
              Keep everything organized and see your progress at a glance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}