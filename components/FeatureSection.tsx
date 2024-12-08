// components/FeatureSection.tsx

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
  bgImage: string;
}

const features: Feature[] = [
  {
    title: "Real-time Monitoring",
    description:
      "Track your carbon emissions in real-time with our advanced sensors and analytics.",
    bgImage: "monitor.jpg",
  },
  {
    title: "Predictive Analysis",
    description:
      "Use AI-powered predictions to optimize your operations and reduce emissions.",
    bgImage: "predictive.jpg",
  },
  {
    title: "Cloud-based Dashboard",
    description:
      "Access your data from anywhere with our secure, cloud-based dashboard.",
    bgImage: "dash.jpg",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${feature.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 hover:opacity-75 rounded-lg"></div>
              <CardHeader className="relative z-10 flex flex-col justify-between h-full p-4">
                <CardTitle className="text-white">{feature.title}</CardTitle>
                <CardContent>
                  <CardDescription className="text-white">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
