import { Header } from "../components/Header/Index.module";
import { CardsList } from "../components/CardsList/Index.module";
import { Table } from "../components/Table/Index.module";

function Index() {
  return (
    <div className="flex flex-col bg-gray-500 h-screen">
      <Header />
      <Table />
      <CardsList />
    </div>
  );
}

export default Index;
