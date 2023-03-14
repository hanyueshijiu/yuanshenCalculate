import { RelicsData, screeningConditions, characterBaseAttributes } from "./data";
import { RelicsType, ScreeningConditionsType, BaseAttributes, BaseType, HashType, RelicsFormateType, AdvanceType } from "../types"

/**
 * @function relicsCalculator 
 * @param RelicsData  圣遗物数据
 * @param screeningConditions  筛选条件
 * @param characterBaseAttributes 角色基础属性
 */

export function relicsCalculator(characterBaseAttributes: BaseAttributes, relicsData: RelicsType[], screeningConditions: ScreeningConditionsType): RelicsType[][] {

    // 根据圣遗物等级和圣遗物套装组合初次筛选后的所有圣遗物
    let { newRelicsData, newRelicsSet } = baseScreening(relicsData, screeningConditions.base)

    // 根据角色基础属性和圣遗物属性组合筛选后的圣遗物
    let resultRelicsData = advanceScreening(characterBaseAttributes, newRelicsData, screeningConditions.advance)

    return resultRelicsData
}

function baseScreening(relicsData: RelicsType[], condition: BaseType) {

    const newRelicsSet = new Set()
    const newRelicsData: RelicsType[] = []
    // 遍历筛选条件，如果包含 'group', 'level' 则进行初次筛选
    for (let k in condition) {

        // relicsData = relicsData.filter((item) => item[k as 'group' | 'level'] === condition[k as 'group' | 'level'])

        for (let i = 0; i < relicsData.length; ++i) {

            const item = relicsData[i]

            if (k == 'group') {
                if (item.group == condition[k]) {
                    newRelicsData.push(item)
                    newRelicsSet.add(item)
                }
            } else {
                newRelicsSet.add(item)
            }
        }

    }

    return { newRelicsData, newRelicsSet }
}

function advanceScreening(baseAttributes: BaseAttributes, relicsData: RelicsType[], condition: AdvanceType): RelicsType[][] {

    let res: RelicsType[][] = []

    // 将圣遗物数据格式化一下
    let formateData = formateRelics(relicsData)

    let hash: HashType = {
        '生之花': false,
        '死之羽': false,
        '理之冠': false,
        '时之沙': false,
        '空之杯': false
    }

    let path: RelicsType[] = []

    dfs(hash, path)

    function dfs(hash: HashType, path: RelicsType[]) {

        // 递归出口
        if (path.length === 5) {

            // 遍历筛选条件的每一项，取得目标值，
            for (let key in condition) {


                let target = condition[key]

                let value = 0

                // 生命
                if (key === 'healthPoint') {

                    // 遍历圣遗物组合，取得每个圣遗物 item 
                    for (let item of path) {

                        // 如果圣遗物主属性为百分比生命值
                        if (item.attributes.main === 'maxHealthPoint') {

                            value += baseAttributes.healthPoint * item.attributes.mainValue

                        }
                        // 如果圣遗物主属性为固定生命值
                        if (item.attributes.main === 'minHealthPoint') {

                            value += item.attributes.mainValue

                        }

                        // 圣遗物副属性
                        const attribute = item.attributes

                        // 如果副属性有大生命
                        value += attribute['maxHealthPoint'] ? baseAttributes.healthPoint * attribute['maxHealthPoint'] : 0

                        // 如果副属性有小生命
                        value += attribute['minHealthPoint'] ? attribute['minHealthPoint'] : 0


                    }

                    if (value < target) return

                }

                // 防御
                if (key === 'defense') {

                    for (let item of path) {

                        // 如果圣遗物主属性为百分比防御
                        if (item.attributes.main === 'maxDefense') {

                            value += baseAttributes[key] * item.attributes.mainValue

                        }
                        // 如果圣遗物主属性为固定防御
                        if (item.attributes.main === 'minDefense') {

                            value += item.attributes.mainValue

                        }

                        // 圣遗物副属性
                        const attribute = item.attributes

                        // 如果副属性有大防御
                        value += attribute['maxDefense'] ? baseAttributes[key] * attribute['maxDefense'] : 0

                        // 如果副属性有小防御
                        value += attribute['minDefense'] ? attribute['minDefense'] : 0

                    }

                    if (value < target) return

                }

                // 攻击
                if (key === 'attack') {

                    for (let item of path) {

                        // 如果圣遗物主属性为百分比防御
                        if (item.attributes.main === 'maxAttack') {

                            value += baseAttributes[key] * item.attributes.mainValue

                        }
                        // 如果圣遗物主属性为固定防御
                        if (item.attributes.main === 'minAttack') {

                            value += item.attributes.mainValue

                        }
                        // 圣遗物副属性
                        const attribute = item.attributes

                        // 如果副属性有大防御
                        value += attribute['maxAttack'] ? baseAttributes[key] * attribute['maxAttack'] : 0

                        // 如果副属性有小防御
                        value += attribute['minAttack'] ? attribute['minAttack'] : 0

                    }
                    if (value < target) return

                }

                // 精通
                if (key === 'proficients') {

                    for (let item of path) {

                        // 如果圣遗物主属性为精通
                        if (item.attributes.main === 'proficients') {

                            value += item.attributes.mainValue

                        }
                        // 如果副属性有精通
                        value += item.attributes['proficients'] ? item.attributes['proficients'] : 0

                    }
                    if (value < target) return

                }

                // 暴击率
                if (key === 'criticalStrikeRate') {

                    for (let item of path) {

                        // 如果圣遗物主属性为暴击率
                        if (item.attributes.main === 'criticalStrikeRate') {

                            value += item.attributes.mainValue

                        }

                        // 如果副属性有暴击率
                        value += item.attributes['criticalStrikeRate'] ? item.attributes['criticalStrikeRate'] : 0

                    }
                    if (value < target) return

                }

                // 暴击伤害
                if (key === 'criticalStrikeDamage') {

                    for (let item of path) {

                        // 如果圣遗物主属性为暴击伤害
                        if (item.attributes.main === 'criticalStrikeDamage') {

                            value += item.attributes.mainValue

                        }
                        // 如果副属性有暴击伤害
                        value += item.attributes['criticalStrikeDamage'] ? item.attributes['criticalStrikeDamage'] : 0

                    }
                    if (value < target) return

                }

                // 元素充能
                if (key === 'chargingRate') {

                    for (let item of path) {

                        // 如果圣遗物主属性为元素充能
                        if (item.attributes.main === 'chargingRate') {

                            value += item.attributes.mainValue

                        }
                        // 如果副属性有元素充能
                        value += item.attributes['chargingRate'] ? item.attributes['chargingRate'] : 0

                    }
                    if (value < target) return

                }

                // 元素伤害
                for (let item of path) {

                    // 如果圣遗物主属性为对应元素伤害
                    if (item.attributes.main === key) {

                        value += item.attributes.mainValue

                    }

                }
                if (value < target) return


            }

            res.push([...path])

        }

        // 递归入口,这个递归入口比较复杂，5种圣遗物，每种只能进去一个，所以我这里用hash来记录，是否该位置进入过数组

        for (let key in formateData) {

            // 其中一种圣遗物集合
            let data = formateData[key]

            // 如果这个key值为真,说明path已经进入了一个同类型圣遗物,跳过
            if (hash[key]) {
                continue
            }

            // 否则遍历这种圣遗物集合
            for (let item of data) {
                path.push(item)
                hash[item.type] = true
                dfs(hash, path)
                path.pop()
                hash[item.type] = false
            }
        }
    }

    return res
}

// 对圣遗物数据进行格式化
function formateRelics(relicsData: RelicsType[]) {

    let hashMap: RelicsFormateType = {
        '生之花': [],
        '死之羽': [],
        '理之冠': [],
        '时之沙': [],
        '空之杯': [],
    }

    for (let item of relicsData) {

        hashMap[item.type].push(item)

    }

    return hashMap
}

let res = relicsCalculator(characterBaseAttributes, RelicsData, screeningConditions)

console.log(res)



