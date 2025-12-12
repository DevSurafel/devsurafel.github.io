import SectionWrapper from '../ui/SectionWrapper';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CTO, TechCorp',
    text: "Surafel's backend skills are exceptional. He delivered a scalable API that exceeded our expectations.",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager, InnovateTech',
    text: 'A dedicated developer who consistently delivers high-quality work on time.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const Testimonials = () => (
  <SectionWrapper id="testimonials" className="py-20">
    <h2 className="section-title animated-underline">Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((t) => (
        <div key={t.name} className="glass-card p-6">
          <Quote className="w-8 h-8 text-primary mb-4" />
          <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
          <div className="flex items-center gap-4">
            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" loading="lazy" />
            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Testimonials;
