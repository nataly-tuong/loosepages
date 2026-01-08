import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header
      className="bg-black/80 backdrop-blur-xl border-b border-white/10"
      style={{
        backgroundImage:
          "radial-gradient(500px 80px at 20% 0%, rgba(120,120,239,0.3), transparent 70%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-12 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-noto text-white font-bold text-primary tracking-tighter">
            LoosePages
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to={"/create"}
              className="p-2 text-white border font-noto border-white/20 rounded-xl flex font-bold tracking-tighter hover:bg-white hover:text-black transition-colors duration-200"
              style={{
                backgroundImage:
                  "radial-gradient(200px 80px at 20% 0%, rgba(120,120,239,0.3), transparent 70%)",
              }}
            >
              <PlusIcon />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
