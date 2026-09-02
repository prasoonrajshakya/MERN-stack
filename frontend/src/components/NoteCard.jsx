import { Link } from "react-router";
import { Trash2Icon, PenSquareIcon } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { formatDate, formatTime } from "../lib/utils";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); //get rid of the <Link>'s behaviour ie navigate to noteDetailPage

    if (!window.confirm("Confirm deletion?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error deleting message", error);
      toast.error("failed to delele note");
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00ff9d]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(note.createdAt)} · {formatTime(note.createdAt)}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error hover:bg-error/20"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4 hover:scale-125 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
