import { useState, type FormEvent } from "react";

const Contact = () => {
  const [t0] = useState(() => Date.now());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!import.meta.env.VITE_API_URL) {
      console.error("VITE_API_URL is missing");
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          t0,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);

      setFormData({
        name: "",
        email: "",
        message: "",
        website: "",
      });
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      setError("Network error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Get In Touch
      </h2>

      {success && (
        <p aria-live="polite" className="text-green-400 text-center mb-4">
          Message sent successfully!
        </p>
      )}

      {error && <p className="text-red-400 text-center mb-4">{error}</p>}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          placeholder="Name..."
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          placeholder="example@gmail.com"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          placeholder="Your Message..."
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />

        {/* Honeypot field */}
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          style={{ display: "none" }}
          value={formData.website}
          onChange={(e) =>
            setFormData({ ...formData, website: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full cursor-pointer bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_5px_rgba(59,130,246,0.4)]
            ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default Contact;
