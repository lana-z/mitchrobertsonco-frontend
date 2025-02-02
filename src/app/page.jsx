"use client"
import { Header } from "@/components/header"
import { ExpandableSection } from "@/components/expandable-section"
import { SocialLinks } from "@/components/social-links"
import { SpeakingForm } from "@/components/speaking-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pb-20">
        <div id="my-story">
          <ExpandableSection
            title="My Story"
            image="/mitch-robertson-pfp-bw.jpeg"
          >
            <div className="grid mx-10 lg:mx-20 md:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-6">
                <h3 className="font-heading text-3xl text-white">ABOUT</h3>
                <div className="space-y-4">
                  <p>Throughout my entrepreneurial journey, I've faced challenges that tested my resilience and fueled my passion for growth, shaping the leader and speaker I am today. With over 25 years of experience across industries, entrepreneurship is more than my profession—it's a way of life rooted in innovation, impact, and authentic connection.</p>
                  <p>Raised in the South, I carry with me the rich tradition of storytelling and the power of community, values that infuse every venture I've led. My work has taken me across continents, immersing me in cultures that inspire my approach to leadership, creativity, and problem-solving. Music, food, culture, and meaningful conversation are my constant sources of inspiration—pillars that drive my passion for fostering human connection and sparking transformative ideas.</p>
                  <p>When I speak, I aim to do more than inspire—I aim to challenge perspectives and deliver actionable strategies that empower audiences to think boldly and act decisively. Whether discussing leadership, scaling businesses, or building trust-driven cultures, my talks are rooted in real-world experience and a steadfast commitment to creating positive change.</p>
                  <p>If you're looking for a speaker who brings authenticity, depth, and a global perspective to the stage, I'd love to connect. Let's create an experience that resonates, inspires, and drives impact.</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-heading text-3xl text-white">STARTUPS</h3>
                <ul className="space-y-1">
                  <li>Robertson Group Accelerator (2002-2007)</li>
                  <li>Hilti—Aeronautics (2007 - 2009)</li>
                  <li>Hilti—XBT (2009-2011)</li>
                  <li>Hit The Spot (2012 - 2014)</li>
                  <li>Wagon (2012 - 2014)</li>
                  <li>Code Fellows (2014 - Present)</li>
                  <li>LevelUp Economy (2019 - Present)</li>
                </ul>
              </div>
            </div>
          </ExpandableSection>
        </div>

        <ExpandableSection
          title="Speaking"
          image="/mitch-robertson-podcast.jpg"
        >
          <div className="grid mx-10 lg:mx-20 md:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6">
              <h3 className="font-heading text-3xl text-white">SPEAKING</h3>
              <ul className="space-y-1">
                <li>SXSW—Austin, TX (2006-2019)</li>
                <li>Hilti Summit—Schaan, Lichtenstien (2007-2012)</li>
                <li>GEN—Milan, IT (2008)</li>
                <li>Startup Weekend—Various (2009-2019)</li>
                <li>EntreFest—Cedar Rapids, Iowa (20112, 2015, 2018)</li>
                <li>1871—Chicago, Illinois(2013)</li>
                <li>DAI—Various Locations (2015-2018)</li>
                <li>SCN—Various Location (2015-2018)</li>
                <li>StartQ—Memphis, Tennessee (2015-2018)</li>
                <li>GAN Summit —Various Locations (2016-2018)</li>
                <li>Growth Conference—Vancouver, BC (2016-2018)</li>
                <li>MCA Fond Charaka—Rabat, Morocco (2016)</li>
                <li>Technopark—Casablanca, Morocco (2016)</li>
                <li>Rights of Man—Lewes, United Kingdom (2017)</li>
                <li>Radio Cayman—Cayman Island (2018-2019)</li>
                <li>TechSpo—Dubai (2018-2023)</li>
                <li>TenHabitat—Bridgetown, Barbados (2018)</li>
                <li>Xpand—Amman, Jordan (2018)</li>
                <li>CAEL—San Diego, California (2019)</li>
                <li>NHA Ventures—Saigon, Vietnam (2019)</li>
                <li>Lux Frági—Lisbon, Portugal (2021)</li>
              </ul>
            </div>
            <div>
              <SpeakingForm />
            </div>
          </div>
        </ExpandableSection>

        <ExpandableSection title="Follow Me">
          <div className="mx-10 lg:mx-20">
            <div className="flex flex-col items-center space-y-8">
              <SocialLinks />
            </div>
          </div>
        </ExpandableSection>
      </div>
      <Footer />
    </main>
  )
}
