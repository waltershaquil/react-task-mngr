import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-gray-800 text-center flex flex-col justify-center items-top p-6">
      <div class="flex justify-center items-center min-h-screen">
        <div class="max-w-[720px] mx-auto">
          <div class="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer">
            <div class="p-4">
              <h5 class="mb-2 text-slate-800 text-xl font-semibold">{name}</h5>
              <p class="text-slate-600 leading-normal ">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
