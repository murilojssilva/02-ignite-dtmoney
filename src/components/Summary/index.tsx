import incomeImage from "../../assets/income.svg"
import outcomeImage from "../../assets/outcome.svg"
import totalImage from "../../assets/total.svg"

import { Container } from "./styles";

export function Summary() {
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImage} alt="Entradas" />
				</header>
				<strong>R$1.000,00</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImage} alt="Saídas" />
				</header>
				<strong>R$600,00</strong>
			</div>
			<div>
				<header>
					<p>Entradas</p>
					<img src={totalImage} alt="Entradas" />
				</header>
				<strong>R$400,00</strong>
			</div>
		</Container>
	)
}