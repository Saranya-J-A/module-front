export default function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="space-y-3">
      {tasks.map((t) => (
        <div
          key={t._id}
          className="flex justify-between items-center bg-gray-50 p-3 rounded shadow"
        >
          <div>
            <h3 className="font-bold">{t.title}</h3>
            <p className="text-sm text-gray-600">{t.description}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onUpdate(t)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(t._id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
