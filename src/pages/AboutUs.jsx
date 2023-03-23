import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import InfoBlocks from '../components/InfoBlocks';
import PageSubtitle from '../components/Text/PageSubtitle';
import PageTitle from '../components/Text/PageTitle';
import SectionSubTitle from '../components/Text/SectionSubtitle';
import SectionTitle from '../components/Text/SectionTitle';
import ln from '../assets/logo-ln.svg';

function AboutUs() {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Optional if you want to skip the scrolling animation
    });
  });
  return (
    <>
      <section className="hero section section__wide">
        <PageTitle>We have a proven track&nbsp;record.</PageTitle>
        <PageSubtitle>
          Whether it&apos;s optimizing project management processes or
          developing a new product strategy, our team is committed to helping
          our clients overcome obstacles and achieve their goals.
        </PageSubtitle>
      </section>
      <section className="section section__wide">
        <SectionTitle>
          Andres Wulfson. <span className="section__title--2">CEO</span>
          <br />{' '}
          <a
            href="https://www.linkedin.com/in/andres-w-293a89140/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <img src={ln} alt="LinkedIn" />
            linkedin.com/in/andreswulfson
          </a>{' '}
        </SectionTitle>
        <SectionSubTitle>
          With 13 years of experience in the industry, have a proven track
          record of helping our clients build and manage successful products.
          Has worked with a diverse range of organizations across various
          industries.
        </SectionSubTitle>
        <SectionTitle variant>Success casses</SectionTitle>
        <InfoBlocks
          id="ae"
          title={
            <>
              <h3>Agile engine </h3>
              <p>Product Manager &&nbsp;SM&nbsp;SR</p>
            </>
          }
        >
          <p>
            As a SAFe Scrum Master for a team of 200 Developers, Architects,
            Product Owners, Product Managers, Portfolio Managers, and Scrum
            Masters, responsibilities include ensuring that the product team
            (Online Appointment Booking) delivers products to market on time.
          </p>
          <p>
            The team has achieved an 80% improvement in cycle time and lead
            time.{' '}
          </p>
          <p>
            Scope creep on Sprints and gold plating on Stories has been
            successfully eliminated through the establishment of Definition of
            Done agreements with the development team.{' '}
          </p>
          <p>
            The backlog has been reduced from 1500 to 120 items in a 3-month
            period through refinement sessions held twice a week with the
            Product Owner.{' '}
          </p>
          <p>
            The team has consistently achieved a 95% success rate in hitting
            commitments every Product Iteration, as shown by the CFD.
          </p>
          <p>
            Demonstrated leadership in RTE / Scrum of Scrums communication and
            conducted more than 10 Inspect & Adapt sessions to drive continuous
            improvement.
          </p>
        </InfoBlocks>
        <InfoBlocks
          id="tl"
          title={
            <>
              <h3>Trafilea </h3>
              <p>Scrum master</p>
            </>
          }
        >
          <p>
            Project Manager responsible for building portfolios and projects in
            Asana to create the Project/Product Roadmap for a Top 25 Forbes
            Company, with a focus on remote work.
          </p>
          <p>
            Managed a Marketing team that consisted of an Acquisition team, a
            Growth team, an IT team, a Creatives/Design/Copywrite team, Social
            Media team, Retention team, SEO team, Merchandising & Operations
            team.
          </p>
          <p>
            Successfully managed and implemented several integrations (LOB,
            AttentiveSMS, Nosto, Tapcart, Cohley) on Shopify.
          </p>
          <p>
            As a Scrum Master and Product Owner, managed Shapermint.com Store,
            an e-commerce shop with the following achievements: <br />
            - Over 2 million customers. <br />
            - Over 30 million online shoppers. <br />- Over 2 billion
            impressions.
          </p>
          <p>
            Managed Empetua and Truekind product roadmap from product design to
            product launch.
          </p>
        </InfoBlocks>
        <InfoBlocks
          id="az"
          title={
            <>
              <h3>Azumo</h3>
              <p>Scrum master</p>
            </>
          }
        >
          <p>
            Manage project execution to ensure compliance with budget, schedule,
            and scope.
          </p>
          <p>
            Prepare project status reports by collecting, analyzing, and
            summarizing project-related information.{' '}
          </p>
          <p>Coordinate recruitment and selection of project personnel. </p>
          <p>Direct and oversee activities of project personnel. </p>
          <p>
            Establish and execute a project communication plan to facilitate
            effective communication among team members and stakeholders.
          </p>
          <p>Identify the need for initial or additional project resources.</p>
          <p>
            Initiate, review, and approve modifications to project plans as
            needed.
          </p>
          <p>Monitor and track project milestones and deliverables.</p>
          <p>
            Negotiate with project stakeholders and suppliers to obtain
            necessary resources or materials.
          </p>
          <p>Schedule and facilitate meetings related to the project.</p>
          <p>
            Submit project deliverables while ensuring adherence to quality
            standards.
          </p>
          <p>
            Develop and update project plans such as project objectives,
            technologies, requirements, schedules, funding, and staffing.
          </p>
        </InfoBlocks>
      </section>

      <section className="section section__wide card__grid no_hover">
        <Link to="/" className="no_hover">
          <Card className="card__big">
            <h3>Experts at product magment and agile methodologies.</h3>
            <p className="section__sub"> ← Go to home page</p>
          </Card>
        </Link>
        <Link to="/services" className="no_hover">
          <Card className="card__big">
            <h3>We build and manage successful products.</h3>

            <p className="section__sub"> Discover our services →</p>
          </Card>
        </Link>
      </section>
    </>
  );
}

export default AboutUs;
