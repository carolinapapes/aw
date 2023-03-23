import React, { useEffect } from 'react';
import PageSubtitle from '../components/Text/PageSubtitle';
import PageTitle from '../components/Text/PageTitle';
import SectionSubTitle from '../components/Text/SectionSubtitle';
import Card from '../components/Card';

function Contact() {
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
        <PageTitle>Let&apos;s talk</PageTitle>
        <PageSubtitle>
          If you&apos;re interested in discussing potential opportunities,
          please feel free to connect us.
        </PageSubtitle>
      </section>
      <div className="section section__wide card__grid">
        <Card className="card__big">
          {' '}
          <h3>Contact us</h3>
          <SectionSubTitle>
            <a href="+5493416740084" target="_blank" rel="noreferrer">
              <p className="section__sub">Tel: +54 9 341 674 0084</p>
            </a>
            <a
              href="mailto:shajarllc@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p className="section__sub">shajarllc@gmail.com</p>
            </a>
          </SectionSubTitle>
        </Card>
        <Card className="card__big">
          <h3>Office</h3>

          <p className="section__sub">
            Corrientes 1624, o.1, Rosario,
            <br /> Santa Fe, Argentina
          </p>
        </Card>
      </div>
    </>
  );
}

export default Contact;
