import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./Components/Form";
import Table from "./Components/Table";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Form>
      <Table></Table>
    </Form>
  </>
);
