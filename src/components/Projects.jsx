
const Projects = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Weather App</h3>
          <p className="text-gray-300">A React app fetching live weather data with animated icons and dynamic UI.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Task Tracker</h3>
          <p className="text-gray-300">A todo list with CRUD functionality and local storage, styled with Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
