import { Header } from "../components/Header/Index.module";
import { CardsList } from "../components/CardsList/Index.module";
import { Table } from "../components/Table/Index.module";
import { Box } from "../components/Box/Index.module";

function Index() {
  return (
    <>
      <Header />
      <Box>
        <Table />
        <CardsList />
      </Box>
    </>
  );
}

export default Index;
