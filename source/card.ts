import { ReceiveProps } from './interface/card';
import CardPainter from './cardPainter';
import CardDataManage from './cardData';

export class Card {
  painter: CardPainter;
  data: CardDataManage;

  constructor(props: ReceiveProps) {
    const { data, canvas } = props;

    this.painter = new CardPainter(this);
    this.data = new CardDataManage(this, data);
  }

  render() {
    this.painter.render();
  }
}