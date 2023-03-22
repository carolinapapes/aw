import React from 'react';
import './App.scss';
import avatar from './assets/avatar.png';
import ln from './assets/logo-ln.svg';

function App() {
  return (
    <div className="app">
      <div className="img-box">
        <div className="vh-100">
          <img src={avatar} alt="" />
        </div>
      </div>
      <header>
        <p className="logo">Andres Wulfson</p>
        {/* <nav></nav> */}
        <a
          href="https://www.linkedin.com/in/andres-w-293a89140/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <img src={ln} alt="LinkedIn" />
          linkedin.com/in/andreswulfson
        </a>
      </header>
      <main className="">
        <div className="text-box">
          <section className="hero section section__wide">
            <h1 className="col-2">
              Hi! I&apos;m Andres,
              <br /> a product manager
            </h1>
            <p className="sub col-2">
              I am passionate about building products that solve real-world
              problems. I thrive on the challenge of identifying market
              opportunities, gathering insights, and collaborating with
              cross-functional teams to bring ideas to life.
            </p>
          </section>

          {/* <h2>About me</h2> */}
          {/* <p>
            Nunc eget consequat est. Vivamus sit amet erat gravida, placerat
            eros at, venenatis libero. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Duis
            lobortis pulvinar enim vel vulputate. Fusce consectetur leo ut
            hendrerit pretium.{' '}
          </p> */}
          {/* <p>
            Vivamus sit amet erat gravida, placerat eros at, venenatis libero.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Duis lobortis pulvinar enim vel vulputate.
            Fusce consectetur leo ut hendrerit pretium. Praesent blandit erat at
            mauris rutrum, in pretium purus vehicula.{' '}
          </p> */}
          <section className="section section__wide">
            <h2 className="section__title">Experience</h2>
            <div className="experience">
              <div className="date">
                <p>Sep 2020 - Present</p>
                <p>2 yrs 7 mos</p>
              </div>
              <div className="job">
                <div className="title">
                  <h3>Product Manager - Agile engine </h3>
                  <p>Full time</p>
                </div>
                <div className="description">
                  <p>
                    Part of a SAFe Scrum Master of a train with 200 Developers,
                    Architects, Product Owners, Product Managers, Portfolio
                    Manager and Scrum Master, my role is to make sure my product
                    and product team (Online Appointment Booking) is on time to
                    market. Cycle team and Lead time improved by 80% on the
                    team. No scope creep on Sprints, no gold plating on Stories.
                    Definition of Done agreements with the dev team. Refinement,
                    our backlog went from 1500 to 120 in a 3 month period with
                    refinements twice a week with Product Owner (and our CFD
                    shows hitting 95% of our commitments every Product
                    Iteration) Leading RTE / Scrum of Scrums comunication
                    Leading and creating more than 10+ Inspect & Adapt sessions
                  </p>
                </div>
              </div>
            </div>
            <div className="experience">
              <div className="date">
                <p>Dec 2019 - Aug 2020</p>
                <p>9 mos</p>
              </div>
              <div className="job">
                <div className="title">
                  <h3>Scrum Master Trafilea </h3>
                  <p>Full time</p>
                </div>
                <div className="description">
                  <p>
                    As a Project Manager Building the Portfolios & Projects in
                    Asana for Project/Product Roadmap of a Top 25 Forbes Company
                    to work remotely. Manage a Marketing team consisted of an
                    Acquisition team, a Growth team, an IT team, a
                    Creatives/Design/Copywrite team, Social Media team,
                    Retention team, SEO team, Merchandising & Operations team.
                    Sucessfully manage and implement on Shopify several
                    integrations (LOB, AttentiveSMS, Nosto, Tapcart, Cohley) As
                    a Scrum Master and Product Owner Manage Shapermint.com
                    Store, an e-commerce shop with the following achievements:
                    +2 Million Customers + 30 Million Online Shoppers + 2
                    Billion Impressions Manage Empetua and Truekind product
                    roadmap from product design to product launch.
                  </p>
                </div>
              </div>
            </div>
            <div className="experience">
              <div className="date">
                <p>Dec 2017 - Dec 2019</p>
                <p>2 yrs 1 mo</p>
              </div>
              <div className="job">
                <div className="title">
                  <h3>Scrum Master - Azumo </h3>
                  <p>Full time</p>
                </div>
                <div className="description">
                  <p>
                    {' '}
                    Manage project execution to ensure adherence to budget,
                    schedule, and scope. Prepare project status reports by
                    collecting, analyzing, and summarizing information.
                    Coordinate recruitment and selection of project personnel.
                    Direct and coordinate activities of project personnel.
                    Establish and execute a project communication plan. Identify
                    need for initial or supplemental project resources.
                    Initiate, review, and approve modifications to project
                    plans. Monitor and track project milestones and
                    deliverables. Negotiate with project stakeholders and
                    suppliers to obtain resources or materials. Schedule and
                    facilitate meetings related to the project. Submit project
                    deliverables, ensuring adherence to quality standards.
                    Develop and update project plans such as project objectives,
                    technologies, requirements, schedules, funding, and
                    staffing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className=" section certifications">
            <h2 className="section__title">Certifications</h2>
            <p>
              Certified Scrum Master® <br />
              Certified Product Owner®
              <br /> Certified SAFe 5 Advanced Scrum Master®
              <br /> Certified SAFe 5 PO/PM®
              <br /> Certified SAFe 5 Practitioner®{' '}
            </p>
          </section>

          <section className="section">
            <div className="card">
              <h2 className="section__title">Contact</h2>
              {/* <h3>Let&apos;s work together </h3> */}

              <p>
                If you&apos;re interested in discussing potential opportunities,
                please feel free to connect with me on LinkedIn.
              </p>
              <div className="logo-box">
                <a
                  href="https://www.linkedin.com/in/andres-w-293a89140/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin"
                >
                  <img src={ln} alt="LinkedIn" />
                  linkedin.com/in/andreswulfson
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
