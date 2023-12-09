import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

function Services() {
  return (
    <section>
      <h1 className="flex items-center py-8 font-montserrat text-3xl font-semibold">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-red p-2">
          <span className="text-white">S</span>
        </span>
        ervices
      </h1>
      <div className="flex justify-start max-lg:flex-col max-lg:gap-6 lg:space-x-[77px]">
        {services.map((service) => (
          <ServiceCard key={service.imgURL} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
