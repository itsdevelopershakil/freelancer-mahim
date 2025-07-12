import Gallery from "@/components/Gallery";
import Footer from "@/components/partials/Footer";
import Portfolio from "@/components/Portfolio";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <>
      <section className="py-20 bg-[#101015]">
        <div className="max-width">
          <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[64px] text-center">
            My Recent Projects
          </h1>
          <p className="text-[#B7B7B5] md:text-lg leading-7 mt-5 mb-10 text-center">
            I am continually eager to take on new challenges, collaborating with{" "}
            <br className="hidden md:block" />
            individuals and companies to bring their product ideas to life.
          </p>
          <Portfolio />
        </div>
      </section>
      <section className="py-20 sm:py-[100px]">
        <div className="max-width">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[64px]">
            Testimonials
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-10 mt-5 sm:mt-10 mb-10 sm:mb-[120px]">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <TestimonialCard />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Gallery />
        </div>
      </section>
      <Footer />
    </>
  );
}
