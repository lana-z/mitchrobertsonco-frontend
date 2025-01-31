export function SpeakingForm() {
  return (
    <form className="w-full space-y-4">
      <h3 className="font-heading text-3xl text-white mb-8">Inquire About Speaking</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="bg-transparent border-b border-white/20 p-2 text-sm focus:outline-none focus:border-white/40"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="bg-transparent border-b border-white/20 p-2 text-sm focus:outline-none focus:border-white/40"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-transparent border-b border-white/20 p-2 text-sm focus:outline-none focus:border-white/40"
      />
      <textarea
        defaultValue={`Speaking Engagement Details: \n
Requested Speaker Session Type:
_ Keynote
_ Breakout Session
_ Panel Discussion
_ Other`}
        rows={8}
        className="w-full bg-transparent border-b border-white/20 p-2 text-sm focus:outline-none focus:border-white/40 text-gray-400 min-h-[160px]"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full bg-transparent border-b border-white/20 p-2 text-sm focus:outline-none focus:border-white/40"
      />
      <button
        type="submit"
        className="w-full border border-white/20 p-3 text-sm hover:bg-white/5 transition-colors"
      >
        Submit
      </button>
    </form>
  )
}
