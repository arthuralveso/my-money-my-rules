import Sumary from "../Sumary";
import TransactionsTable from "../TransactionsTable";
import { Container } from "./styles";

export default function Dashboard() {
    return (
        <div>
            <Container>
                <Sumary />
                <TransactionsTable />
            </Container>
        </div>
    )
}
