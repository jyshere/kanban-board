import "./About.css";

export default function About() {
    return (
        <div className="about-container">

            <div className="about-content">

                <h1>About KanbanBoard</h1>

                <p className="about-intro">
                    KanbanBoard is a simple and efficient task management
                    application designed to help individuals and teams organize
                    their work, track progress, and stay productive.
                </p>

                <section className="about-section">
                    <h2>Our Mission</h2>

                    <p>
                        Our goal is to make project management easy and
                        intuitive. Whether you're working on personal tasks,
                        college projects, or collaborating with a team,
                        KanbanBoard helps you stay organized from start to finish.
                    </p>
                </section>

                <section className="about-section">
                    <h2>What You Can Do</h2>

                    <ul>
                        <li>Create multiple project boards.</li>
                        <li>Add, edit, move, and delete task cards.</li>
                        <li>Organize work into different columns.</li>
                        <li>Track project progress visually.</li>
                        <li>Collaborate with team members (coming soon).</li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>Why Kanban?</h2>

                    <p>
                        The Kanban method provides a visual way to manage work.
                        It helps you focus on current tasks, identify bottlenecks,
                        and improve productivity by making your workflow clear and
                        organized.
                    </p>
                </section>

            </div>

        </div>
    );
}