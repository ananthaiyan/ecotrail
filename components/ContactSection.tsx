// components/ContactSection.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Reduce Your Carbon Footprint?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Get in touch with our team to learn how EcoTrail can help your coal mine become more sustainable.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2">
              <Input placeholder="Enter your email" type="email" />
              <Button type="submit" variant="custom">
                Contact Sales
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
