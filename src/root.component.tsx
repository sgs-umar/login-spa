import Header from "./components/Header";
import Login from "./components/Login";

export default function Root(props) {
  return <>
    <Header title="Employee Management Tool" />
    <div className="container mt-5 flex justify-center">
      <Login />
    </div>

  </>
}
