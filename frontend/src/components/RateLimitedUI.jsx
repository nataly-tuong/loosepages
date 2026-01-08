import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div>
      <div className="mt-5 max-w-6xl mx-auto sm:mx-20 px-4 py-8 bg-[rgba(120,120,239,0.2)]/80 border border-white/15 rounded-xl">
        <div className="flex items-center gap-4">
          <ZapIcon className="text-[rgba(120,120,239,1)] w-8 h-8 shrink-0" />

          <div>
            <h3 className="text-white font-noto font-bold">
              Rate Limit Reached
            </h3>
            <p className="text-white font-noto mt-2">
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
