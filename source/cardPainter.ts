import Card from './card';
import CardPainterChip from './cardPainterChip';

export default class CardPainter {
  card: Card;
  chips: CardPainterChip[];

  constructor(card: Card, painterChips: CardPainterChip[]) {
    this.card = card;
    this.chips = painterChips;
  }

  render() {
    return Promise.all(this.chips.map((chip: CardPainterChip) => {
      return chip.render();
    }));
  }
}