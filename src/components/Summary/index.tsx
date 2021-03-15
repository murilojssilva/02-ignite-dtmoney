import incomeImage from "../../assets/income.svg"
import outcomeImage from "../../assets/outcome.svg"
import totalImage from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
	const { transactions } = useTransactions();

	const summary = transactions.reduce((acc, transaction) => {
		if (transaction.type === 'deposit') {
			acc.deposits += transaction.amount;
			acc.total += transaction.amount;
		}
		else {
			acc.withdraw += transaction.amount;
			acc.total -= transaction.amount;
		}
		return acc;
	}, {
		deposits: 0,
		withdraw: 0,
		total: 0
	})

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImage} alt="Entradas" />
				</header>
				<strong>{new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}).format(summary.deposits)}</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImage} alt="Saídas" />
				</header>
				<strong>{new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}).format(summary.withdraw)}</strong>
			</div>
			<div>
				<header>
					<p>Total</p>
					<img src={totalImage} alt="Entradas" />
				</header>
				<strong>{new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}).format(summary.total)}</strong>
			</div>
		</Container>
	)
}