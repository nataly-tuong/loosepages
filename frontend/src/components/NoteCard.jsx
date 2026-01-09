import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lib/utils";

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="block bg-black/80 rounded-xl p-4
               border border-white/15 border-t-[5px] border-t-mainAccent
               transition-all duration-200
               hover:shadow-[0_0_30px_rgba(120,120,239,0.45)] hover:border-white/80"
      style={{
        backgroundImage:
          "radial-gradient(800px 200px at 150% 130%, secondaryAccent, transparent 70%)",
      }}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-white font-semibold text-lg">{note.title}</h3>

        <p className="text-white/70 line-clamp-3">{note.content}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-white/50">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-2">
            <PenSquareIcon className="size-4 text-white/70 hover:text-white transition" />
            <button
              className="text-red-400 hover:text-red-500 transition"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
