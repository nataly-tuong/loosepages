import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="mt-5 max-w-6xl mx-4 sm:mx-8 md:mx-auto">
      <div
        className="
        mx-4 sm:mx-8 md:mx-auto
          bg-black/80
          border border-white/15
          rounded-xl
          px-6 py-6
          backdrop-blur-xl
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
        "
        style={{
          backgroundImage:
            "radial-gradient(800px 200px at 150% 130%, rgba(120,120,239,0.28), transparent 70%)",
        }}
      >
        <div className="flex items-center gap-4">
          <ZapIcon className="text-[rgba(120,120,239,1)] w-7 h-7 shrink-0" />

          <div>
            <h3 className="text-white font-noto font-bold">
              Rate Limit Reached
            </h3>
            <p className="text-white/70 font-noto mt-2">
              You've reached the maximum number of requests allowed. Please wait
              a moment before trying again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
