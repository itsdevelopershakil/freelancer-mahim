import Gallery from "@/components/Gallery";
import Footer from "@/components/partials/Footer";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <>
      <section className="py-[100px]">
        <div className="max-width">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-[48px] leading-[64px]">
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
