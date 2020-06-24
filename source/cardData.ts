import Card from './card';
import { CardData } from './interface/card';

export default class CardDataManage {
  card: Card;
  data: CardData;

  constructor(card: Card, data: CardData) {
    this.card = card;
    this.data = new Proxy(data, {});
  }

  callUpdate() {
    this.card.painter.update();
  }
}