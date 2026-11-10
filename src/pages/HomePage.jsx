import React from 'react';
import Hero from '../sections/Hero';
import ImpactStats from '../sections/ImpactStats';
import ServicesPractice from '../sections/ServicesPractice';
import Industries from '../sections/Industries';
import Approach from '../sections/Approach';
import CoreExpertise from '../sections/CoreExpertise';
import AboutWhyUs from '../sections/AboutWhyUs';
import ClientsMarquee from '../sections/ClientsMarquee';
import ContactCTA from '../sections/ContactCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <ServicesPractice />
      <Industries />
      <Approach />
      <CoreExpertise />
      <AboutWhyUs />
      <ClientsMarquee />
      <ContactCTA />
    </main>
  );
}
