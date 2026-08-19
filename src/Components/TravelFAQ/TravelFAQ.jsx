const TravelFAQ = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#122B8F]">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Find answers to common travel questions and plan your journey
            with confidence.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image Section */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
              alt="Customer Support"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Accordion Section */}
          <div className="flex-1 w-full">

            <div className="join join-vertical w-full">

              <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title text-lg font-semibold">
                  How can I book a flight through Travel Guru?
                </div>
                <div className="collapse-content">
                  <p>
                    Simply search your destination, compare available
                    airlines, choose your preferred flight, and complete
                    the booking securely online.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-semibold">
                  Can I cancel or modify my booking?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes. Most airlines and hotels allow modifications or
                    cancellations based on their individual policies and
                    fare conditions.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-semibold">
                  Do you provide visa assistance?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes. We offer guidance and visa support services for
                    popular travel destinations around the world.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-semibold">
                  What payment methods are accepted?
                </div>
                <div className="collapse-content">
                  <p>
                    We accept Visa, Mastercard, American Express, mobile
                    banking, and various international payment gateways.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-semibold">
                  Are there any hidden charges?
                </div>
                <div className="collapse-content">
                  <p>
                    No. All costs are displayed transparently before you
                    confirm your booking.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-semibold">
                  Do you offer travel insurance?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes. Travel insurance options can be added during the
                    booking process for extra protection and peace of mind.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TravelFAQ;