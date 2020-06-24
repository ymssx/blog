export type subType_CH = 'tc' | 'xg' | 'rh' | 'ys' | 'tt' | 'cl' | 'lj';
export type subType_EN = 'normal' | 'effect' | 'fusion' | ''; // 待补充...
export type attribute = 'light' | 'dark' | 'fire' | 'water' | 'wind' | 'earth' | 'divine';

export interface CardData {
    id: string;
    name: string;
    type: 'monster' | 'spell' | 'trap';
    subType: subType_CH | subType_EN;
    plusTypes: string[];
    // only monster
    level?: number;
    attribute?: attribute;
    ATK?: number | string;
    DEF?: number | string;
};

// Card对象接受参数
export interface ReceiveProps {
    data: CardData;
    canvas: HTMLCanvasElement;
};

// Card对象内部属性
export interface CardPara {
    data: CardData;
    canvas: HTMLCanvasElement;
    painter: object;
};