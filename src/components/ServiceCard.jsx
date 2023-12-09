function ServiceCard({ service }) {
  return (
    <div className="flex max-w-xs flex-col gap-5 rounded-xl   p-6 shadow-3xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-red">
        <img src={service.imgURL} alt={`icon-${service.imgURL}`} />
      </div>

      <h3 className="font-montserrat text-xl font-semibold ">
        {service.label}
      </h3>
      <p className="info-text">{service.subtext}</p>
    </div>
  );
}

export default ServiceCard;
