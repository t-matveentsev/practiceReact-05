import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel enim
        laboriosam deleniti, quidem molestiae corrupti odit, exercitationem
        dolorum, molestias consectetur qui! Explicabo delectus voluptate ex fuga
        quos officia odit at.
      </p>
      <nav className="nav">
        <NavLink to="aim">Aim</NavLink>
        <NavLink to="company">Company</NavLink>
        <NavLink to="team">Team</NavLink>
      </nav>
      <section className="outlet">
        <Outlet />
      </section>
    </div>
  );
};

export default About;
