import { HeroSlider } from '../components/sections/HeroSlider';
import { StatsSection } from '../components/sections/StatsSection';
import { AboutPreview } from '../components/sections/AboutPreview';
import { FieldsSection } from '../components/sections/FieldsSection';
import { ProjectsPreview } from '../components/sections/ProjectsPreview';
import { FinancePreview } from '../components/sections/FinancePreview';
import { NewsPreview } from '../components/sections/NewsPreview';
import { PartnersSection } from '../components/sections/PartnersSection';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <AboutPreview />
      <FieldsSection />
      <ProjectsPreview />
      <FinancePreview />
      <NewsPreview />
      <PartnersSection />
    </>
  );
}
