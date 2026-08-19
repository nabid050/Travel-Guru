import { useParams, Link } from "react-router-dom";
import visaData from "../../Data/visaData";

const VisaApplyForm = () => {
  const { slug } = useParams();

  const visa = visaData.find((item) => item.slug === slug);

  if (!visa) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold">Visa Not Found</h1>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <section className="bg-slate-100 min-h-screen py-16">

      <div className="max-w-5xl mx-auto px-4">

        <Link
          to={`/visa/${visa.slug}`}
          className="btn btn-outline mb-6"
        >
          ← Back
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-[#122B8F]">
            Apply for {visa.country}
          </h1>

          <p className="text-gray-500 mt-3">
            Complete the application form below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 mt-10"
          >

            <input
              className="input input-bordered w-full"
              placeholder="First Name"
              required
            />

            <input
              className="input input-bordered w-full"
              placeholder="Last Name"
              required
            />

            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />

            <input
              className="input input-bordered w-full"
              placeholder="Phone Number"
              required
            />

            <input
              className="input input-bordered w-full"
              placeholder="Passport Number"
              required
            />

            <input
              type="date"
              className="input input-bordered w-full"
              required
            />

            <select
              className="select select-bordered w-full"
              defaultValue={visa.country}
            >
              <option>{visa.country}</option>
            </select>

            <input
              className="input input-bordered w-full"
              value={visa.visaType}
              readOnly
            />

            <textarea
              className="textarea textarea-bordered md:col-span-2"
              rows="5"
              placeholder="Additional Notes"
            />

            <div className="md:col-span-2">

              <label className="font-semibold">
                Upload Passport Copy
              </label>

              <input
                type="file"
                className="file-input file-input-bordered w-full mt-2"
              />

            </div>

            <button
              className="btn bg-[#122B8F] hover:bg-[#0f2377] border-none text-white md:col-span-2"
            >
              Submit Application
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default VisaApplyForm;