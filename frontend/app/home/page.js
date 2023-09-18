

import TaskManager from '@/components/TaskManger';
function Home() {
  return (
    <div className="flex min-h-screen items-top justify-center">
      <div className="p-12 m-3 w-[2000px] border rounded-lg shadow-lg">
        <header className="mb-4 text-2xl font-bold">Task Mangagement App</header>
        <main>
          <TaskManager/>
        </main>
      </div>
    </div>
  );
}

export default Home;
