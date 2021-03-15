import Modal from "react-modal";

import { Container } from "./styles"

Modal.setAppElement("#root");

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
		>
			<h2>Oi</h2>
		</Modal>
	)
}