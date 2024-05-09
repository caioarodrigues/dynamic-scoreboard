import { Header } from "../components/Header/Index.module";
import { CardsList } from "../components/CardsList/Index.module";

function Index() {
  return (
    <div className=" bg-gray-500 h-screen">
      <Header />
      <CardsList />
    </div>
  );
}

export default Index;
