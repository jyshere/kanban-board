import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <p className="hero-eyebrow">
          PLAN &nbsp; / &nbsp; ORGANIZE &nbsp; / &nbsp; GET THINGS DONE
        </p>

        <h1 className="hero-title">
          Your Tasks, Organized
        </h1>

        <p className="hero-subtitle">
          A simple and powerful Kanban board to help you manage your
          <br />
          work, stay focused, and achieve your goals.
        </p>
      </section>


      {/* Three Column Section */}
      <section className="home-options">

        {/* Get Started */}
        <div className="home-card get-started-card">

          <div className="card-icon get-started-icon">
            <span>♙</span>
          </div>

          <h2 className="home-card-title">
            Get Started
          </h2>

          <p className="home-card-subtitle">
            Create your account and dive in.
          </p>

          <div className="steps">

            <div className="step">
              <span className="step-number">1</span>
              <span className="step-text">
                Click on “Get Started”
              </span>
            </div>

            <div className="step">
              <span className="step-number">2</span>
              <span className="step-text">
                Log in with your email (OTP) or Google
              </span>
            </div>

            <div className="step">
              <span className="step-number">3</span>
              <span className="step-text">
                Start organizing your tasks
              </span>
            </div>

          </div>

          <Link to="/login" className="home-card-button primary-button">
            Get Started
            <span>→</span>
          </Link>

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login">Log in</Link>
          </p>

        </div>


        {/* Explore */}
        <div className="home-card explore-card">

          <div className="card-icon explore-icon">
            <span>◇</span>
          </div>

          <h2 className="home-card-title">
            Explore
          </h2>

          <p className="home-card-subtitle">
            See what you can do.
          </p>

          <div className="feature-list">

            <div className="list-item">
              <span className="check explore-check">✓</span>
              <span>Create and manage boards</span>
            </div>

            <div className="list-item">
              <span className="check explore-check">✓</span>
              <span>Add, edit and move cards</span>
            </div>

            <div className="list-item">
              <span className="check explore-check">✓</span>
              <span>Organize with columns</span>
            </div>

            <div className="list-item">
              <span className="check explore-check">✓</span>
              <span>Keep track of your progress</span>
            </div>

          </div>

         

        </div>


        {/* Features */}
        <div className="home-card features-card">

          <div className="card-icon features-icon">
            <span>☆</span>
          </div>

          <h2 className="home-card-title">
            Features
          </h2>

          <p className="home-card-subtitle">
            Everything you need in one place.
          </p>

          <div className="feature-list">

            <div className="list-item">
              <span className="check features-check">✓</span>
              <span>Easy drag &amp; drop interface</span>
            </div>

            <div className="list-item">
              <span className="check features-check">✓</span>
              <span>Customizable columns</span>
            </div>

            <div className="list-item">
              <span className="check features-check">✓</span>
              <span>Task priorities (Low / Medium / High)</span>
            </div>

            <div className="list-item">
              <span className="check features-check">✓</span>
              <span>Due dates &amp; labels</span>
            </div>

            <div className="list-item">
              <span className="check features-check">✓</span>
              <span>Secure authentication</span>
            </div>

          </div>

         

        </div>

      </section>

    </div>
  );
}