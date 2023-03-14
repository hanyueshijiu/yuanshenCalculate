// type：圣遗物位置
// group：圣遗物套装
// attributes：圣遗物属性
// main：圣遗物主词条
// mainValue：圣遗物主词条属性
// maxHealthPoint：大生命
// minHealthPoint：小生命
// maxAttack：大攻击
// minAttack：小攻击
// maxDefense：大防御
// minDefense：小防御
// criticalStrikeRate：暴击率
// criticalStrikeDamage：暴击伤害
// proficients：元素精通
// chargingRate：元素充能

import { RelicsType, ScreeningConditionsType, BaseAttributes } from "../types"

// 从背包一个一个敲出来的圣遗物数据
export const RelicsData: RelicsType[] = [
    {
        type: '生之花',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'maxHealthPoint',
            mainValue: 4780,
            maxHealthPoint: 0.105,
            chargingRate: 0.162,
            minAttack: 18,
            criticalStrikeRate: 0.097
        }
    },
    {
        type: '生之花',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'maxHealthPoint',
            mainValue: 4780,
            maxHealthPoint: 0.111,
            chargingRate: 0.074,
            minDefense: 39,
            criticalStrikeDamage: 0.21
        }
    },
    {
        type: '生之花',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'maxHealthPoint',
            mainValue: 4780,
            maxAttack: 0.14,
            minAttack: 56,
            criticalStrikeDamage: 0.054,
            criticalStrikeRate: 0.066
        }
    },
    {
        type: '生之花',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'maxHealthPoint',
            mainValue: 4780,
            proficients: 42,
            minDefense: 39,
            criticalStrikeDamage: 0.202,
            criticalStrikeRate: 0.035
        }
    },
    {
        type: '死之羽',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'minAttack',
            mainValue: 311,
            chargingRate: 0.097,
            maxHealthPoint: 0.093,
            criticalStrikeRate: 0.066,
            minDefense: 44
        }
    },
    {
        type: '死之羽',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'minAttack',
            mainValue: 311,
            chargingRate: 0.045,
            criticalStrikeRate: 0.105,
            criticalStrikeDamage: 0.132,
            minDefense: 32
        }
    },
    {
        type: '时之沙',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'chargingRate',
            mainValue: 0.518,
            maxDefense: 0.262,
            criticalStrikeRate: 0.066,
            maxAttack: 0.099,
            proficients: 16
        }
    },
    {
        type: '时之沙',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'chargingRate',
            mainValue: 0.518,
            maxHealthPoint: 0.099,
            minAttack: 27,
            criticalStrikeDamage: 0.218,
            minDefense: 21
        }
    },
    {
        type: '空之杯',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'fireDamage',
            mainValue: 0.466,
            maxAttack: 0.192,
            maxDefense: 0.066,
            chargingRate: 0.104,
            minHealthPoint: 568
        }
    },
    {
        type: '空之杯',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'waterDamage',
            mainValue: 0.466,
            criticalStrikeDamage: 0.272,
            minAttack: 31,
            chargingRate: 0.052,
            minHealthPoint: 478
        }
    },
    {
        type: '空之杯',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'thunderboltDamage',
            mainValue: 0.466,
            criticalStrikeDamage: 0.054,
            proficients: 33,
            chargingRate: 0.162,
            maxHealthPoint: 0.111
        }
    },
    {
        type: '空之杯',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'waterDamage',
            mainValue: 0.466,
            proficients: 23,
            minDefense: 42,
            maxHealthPoint: 0.093,
            criticalStrikeDamage: 0.218
        }
    },
    {
        type: '空之杯',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: "iceDamage",
            mainValue: 0.466,
            maxAttack: 0.099,
            maxHealthPoint: 0.099,
            criticalStrikeRate: 0.066,
            criticalStrikeDamage: 0.14
        }
    },
    {
        type: '理之冠',
        group: '绝缘之旗印',
        level: 20,
        attributes: {
            main: 'criticalStrikeDamage',
            mainValue: 0.622,
            minHealthPoint: 478,
            maxAttack: 0.14,
            criticalStrikeRate: 0.074,
            minDefense: 39
        }
    },
    {
        type: '理之冠',
        group: '昔日宗室之仪',
        level: 20,
        attributes: {
            main: 'criticalStrikeDamage',
            mainValue: 0.622,
            minHealthPoint: 478,
            maxAttack: 0.105,
            chargingRate: 0.104,
            minDefense: 60,
            maxDefense:0.066
        }
    },
]

// 筛选条件
export const screeningConditions: ScreeningConditionsType = {
    base: {
        group: '绝缘之旗印',
        level: 20,
    },
    advance: {
        criticalStrikeRate: 0.44,
        criticalStrikeDamage: 0.40,
        proficients: 0,
        chargingRate: 0.11,
    }
}
// 不同的角色不同的基础属性
export const characterBaseAttributes: BaseAttributes = {
    healthPoint: 14450,
    defense: 548,
    attack: 786,
    proficients: 23
}