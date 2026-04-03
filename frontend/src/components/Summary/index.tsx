import { Card, Container } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatted } from "../../utils/formatter";
import { useSumary } from "../../hooks/useSumary";

export function Summary() {
  const sumary = useSumary();

  return (
    <Container>
      <Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp
            size={32}
            color="#00B37E"
          />
        </header>

        <strong>
          {priceFormatted.format(sumary.income)}
        </strong>
      </Card>

      <Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown
            size={32}
            color="#F75A68"
          />
        </header>

        <strong>
          {priceFormatted.format(sumary.outcome)}
        </strong>
      </Card>

      <Card variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar
            size={32}
            color="#FFF"
          />
        </header>

        <strong>
          {priceFormatted.format(sumary.total)}
        </strong>
      </Card>
    </Container>
  )
}