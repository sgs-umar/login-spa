import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";

export default function Root(props) {
  return <>
    <Header title="Employee Management Tool" />
    <div className="container mt-5 flex justify-center">
      <AddEmployee />
    </div>

  </>
}
