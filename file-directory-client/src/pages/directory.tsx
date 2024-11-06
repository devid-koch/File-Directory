import FileDirectory from "../components/directory/directory";
import useFetch from "../hooks/useFetch";


export default function App() {
  const { data, isLoading, refresh } = useFetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <FileDirectory folderData={ data } refresh={ refresh } />
    </div>
  );
}
