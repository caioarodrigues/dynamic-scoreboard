import { Header } from "../components/Header/Index.module";
import { CardsList } from "../components/CardsList/Index.module";
import { Table } from "../components/Table/Index.module";
import { Box } from "../components/Box/Index.module";
import { Layout } from "../components/Layout/Index.module";

function Index() {
  return (
    <Layout>
      <Header />
      <Box>
        <Table />
        <CardsList />
      </Box>
    </Layout>
  );
}

export default Index;
