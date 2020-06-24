import { ReceiveProps, CardPara } from './interface/card';

export class Card implements CardPara {
  constructor(props: ReceiveProps) {
    const { data, canvas } = props;

    this.painter = new Object();
  }


  render() {
    this.painter.render();
  }
}