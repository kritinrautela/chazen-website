import { ArrowRight } from "lucide-react";

export function InquiryForm() {
  return (
    <form className="grid gap-5 border border-ink/10 bg-porcelain p-5 shadow-soft md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink/78">
          Name
          <input className="h-12 border border-ink/12 bg-white px-4 text-base outline-none transition focus:border-leaf" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink/78">
          Email
          <input
            type="email"
            className="h-12 border border-ink/12 bg-white px-4 text-base outline-none transition focus:border-leaf"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink/78">
          Company
          <input className="h-12 border border-ink/12 bg-white px-4 text-base outline-none transition focus:border-leaf" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink/78">
          Inquiry type
          <select className="h-12 border border-ink/12 bg-white px-4 text-base outline-none transition focus:border-leaf">
            <option>Personal gift</option>
            <option>Real estate settlement</option>
            <option>Corporate gifting</option>
            <option>Partnership conversation</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink/78">
          Approximate quantity
          <input className="h-12 border border-ink/12 bg-white px-4 text-base outline-none transition focus:border-leaf" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink/78">
          Preferred timing
          <input className="h-12 border border-ink/12 bg-white px-4 text-base outline-none transition focus:border-leaf" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink/78">
        Message
        <textarea
          rows={5}
          className="border border-ink/12 bg-white px-4 py-3 text-base outline-none transition focus:border-leaf"
        />
      </label>
      <button type="button" className="button-primary justify-self-start">
        Send inquiry <ArrowRight size={17} />
      </button>
      <p className="max-w-xl text-xs leading-6 text-ink/52">
        Submit your inquiry and our team will contact you to discuss pre-orders, B2B
        gifting, or partnership opportunities.
      </p>
    </form>
  );
}
