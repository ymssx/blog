import Card from './card';
import CardPainter from './cardPainter';
import CardFile from './cardFile';

export default class CardPainterChip {
  card: Card;
  painter: CardPainter;
  fileManage: CardFile;
  ctx: CanvasRenderingContext2D;
  relyData: any[];
  fileMap: object;
  paintControl: any;

  constructor(painter: CardPainter, relyData: any[]) {
    this.card = painter.card;
    this.painter = painter;
    this.fileManage = painter.card.fileManage;
    this.ctx = painter.ctx;
    this.relyData = relyData;
    this.fileMap = {};

    // 订阅数据
    painter.subscribe(relyData, this);
  }

  getData(): object {
    return this.painter.reqData(this.relyData);
  }

  async getFiles(): Promise<object> {
    return {};
  }

  async update() {
    const data = this.getData();
    const files = await this.getFiles();
    this.distributeRender(data, files);
  }

  distributeRender(data: object, files: object) {
    // 区分在WINDOW和NODE环境
    // WINDOW环境下进行异步绘制
    // NODE环境下直接绘制
    if (this.card.ENV === 'WINDOW') {
      this.asyncRender(data, files);
    } else {
      this.render(data, files);
    }
  }

  asyncRender(data: object, files: object) {
      if (this.paintControl) {
        window.cancelAnimationFrame(this.paintControl);
      }

      window.requestAnimationFrame(() => {
        this.render(data, files);
      })
  }

  render(data: object, files: object) {}
}