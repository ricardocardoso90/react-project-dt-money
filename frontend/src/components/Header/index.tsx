import { Modal } from "../Modal";
import logoImg from "../../assets/logo.svg";
import { Button, Container, Content } from "./styles";

import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Nova Transação</Button>
          </Dialog.Trigger>

          <Modal />
        </Dialog.Root>
      </Content>
    </Container>
  )
}