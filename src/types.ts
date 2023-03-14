// 圣遗物套装
export type GroupType = '绝缘之旗印' | '追忆之注连' | '流浪大地的乐团' | '昔日宗室之仪' | '如雷的圣物' | '平息鸣雷的尊者' | '翠绿之影' | '被怜爱的少女' | '悠古的磐岩' | '逆飞的流星' | '炽烈的炎之魔女' | '渡过烈火的贤人'

// 圣遗物位置
export type Type = '生之花' | '死之羽' | '理之冠' | '时之沙' | '空之杯'

// 圣遗物主词条属性
export type MainType =  'fireDamage' | 'waterDamage' | 'rockDamage' | 'grassDamage' | 'windDamage' | 'thunderboltDamage' | 'iceDamage' | 'maxHealthPoint' | 'minHealthPoint' | 'maxAttack' | 'minAttack' | 'maxDefense' | 'minDefense' | 'criticalStrikeRate' | 'criticalStrikeDamage' | 'proficients' | 'chargingRate'

// 圣遗物综合
export interface RelicsType {
    type: Type
    group: GroupType
    level: number,
    date_id?:number,
    attributes: {
        main:MainType
        mainValue: number
        maxHealthPoint?: number
        minHealthPoint?: number
        maxAttack?: number
        minAttack?: number
        maxDefense?: number
        minDefense?: number
        criticalStrikeRate?: number
        criticalStrikeDamage?: number
        proficients?: number
        chargingRate?: number
    }
}

// 基础筛选类型
export type BaseType = {
    group?: GroupType
    level?: number
}

export type AdvanceType = {
    healthPoint?: number
    defense?: number
    attack?: number
    proficients?: number
    criticalStrikeRate?: number
    criticalStrikeDamage?: number
    chargingRate?: number
    fireDamage?: number
    waterDamage?: number
    rockDamage?: number
    grassDamage?: number
    windDamage?: number
    thunderboltDamage?: number
    iceDamage?: number
}

// 筛选条件
export interface ScreeningConditionsType {
    base: BaseType
    advance: AdvanceType
}

// 角色基础属性
export interface BaseAttributes {
    healthPoint: number
    defense: number
    attack: number
    proficients?: number
    criticalStrikeRate?: number
    criticalStrikeDamage?: number
    chargingRate?: number
    fireDamage?: number
    waterDamage?: number
    rockDamage?: number
    grassDamage?: number
    windDamage?: number
    thunderboltDamage?: number
    iceDamage?: number
}

// 
export interface HashType {
    '生之花': boolean
    '死之羽': boolean
    '理之冠': boolean
    '时之沙': boolean
    '空之杯': boolean
}

export interface RelicsFormateType {
    '生之花': RelicsType[]
    '死之羽': RelicsType[]
    '理之冠': RelicsType[]
    '时之沙': RelicsType[]
    '空之杯': RelicsType[]
}
