import { Link } from "react-router";
import { NotebookIcon, PlusIcon } from "lucide-react";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <NotebookIcon className="size-20 mb-4" />
      <h3 className="text-lg font-semibold text-base-content">
        No notes found
      </h3>
      <p className="text-sm text-base-content/60 mb-6">
        Create a note to get started
      </p>
      <Link to={"/create"} className="btn btn-primary btn-md">
        <PlusIcon className="size-6" /> Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
