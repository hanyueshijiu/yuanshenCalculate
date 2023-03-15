<template>
  <el-card class="box-card">
    <div class="role-select">
      <div class="role-title">
        角色选择
      </div>
      <div class="role-choice-box">
        <div class="role-header">角色</div>
        <div class="m-4">
          <el-cascader v-model="Infovalue" :options="roleInfo" :props="props" @change="handleChange" />
        </div>
        <div class="role-header">等级</div>
        <div class="m-4">
          <el-cascader v-model="Levelvalue" :options="roleLevel" @change="handleChange" />
        </div>
      </div>

    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const Infovalue = ref([]);
const Levelvalue = ref([]);
const handleChange = (value: any) => {
  console.log(value)
}

const props = {
  expandTrigger: 'hover' as const,
}

const roleInfo = [
  {
    value: '五星',
    label: '五星',
    children: [
      {
        value: '风',
        label: '风',
        children: [
          {
            value: '流浪者',
            label: '流浪者',
          },
          {
            value: '旅行者（空）',
            label: '旅行者（空）',
          },
          {
            value: '旅行者（莹）',
            label: '旅行者（莹）',
          },
          {
            value: '枫原万叶',
            label: '枫原万叶',
          },
          {
            value: '温迪',
            label: '温迪',
          },
          {
            value: '琴',
            label: '琴',
          },
          {
            value: '魈',
            label: '魈',
          }
        ]
      },
      {
        value: '火',
        label: '火',
        children: [
          {
            value: '迪希亚',
            label: '迪希亚',
          },
          {
            value: '胡桃',
            label: '胡桃',
          },
          {
            value: '宵宫',
            label: '宵宫',
          },
          {
            value: '可莉',
            label: '可莉',
          },
          {
            value: '迪卢克',
            label: '迪卢克',
          }
        ]
      },
      {
        value: '水',
        label: '水',
        children: [
          {
            value: '妮露',
            label: '妮露',
          },
          {
            value: '夜兰',
            label: '夜兰',
          },
          {
            value: '神里凌人',
            label: '神里凌人',
          },
          {
            value: '达达利亚',
            label: '达达利亚',
          },
          {
            value: '珊瑚宫心海',
            label: '珊瑚宫心海',
          },
          {
            value: '莫娜',
            label: '莫娜',
          }
        ]
      },
      {
        value: '冰',
        label: '冰',
        children: [
          {
            value: '申鹤',
            label: '申鹤',
          },
          {
            value: '尤拉',
            label: '尤拉',
          },
          {
            value: '埃洛伊',
            label: '埃洛伊',
          },
          {
            value: '罗莎莉亚',
            label: '神里凌华',
          },
          {
            value: '七七',
            label: '七七',
          },
          {
            value: '甘雨',
            label: '甘雨',
          }
        ]
      },
      {
        value: '雷',
        label: '雷',
        children: [
          {
            value: '赛诺',
            label: '赛诺',
          },
          {
            value: '旅行者（空）',
            label: '旅行者（空）',
          },
          {
            value: '旅行者（莹）',
            label: '旅行者（莹）',
          },
          {
            value: '八重神子',
            label: '八重神子',
          },
          {
            value: '雷电将军',
            label: '雷电将军',
          },
          {
            value: '刻晴',
            label: '刻晴',
          }
        ]
      },
      {
        value: '岩',
        label: '岩',
        children: [
          {
            value: '旅行者（空）',
            label: '旅行者（空）',
          },
          {
            value: '旅行者（莹）',
            label: '旅行者（莹）',
          },
          {
            value: '荒泷一斗',
            label: '荒泷一斗',
          },
          {
            value: '阿贝多',
            label: '阿贝多',
          },
          {
            value: '钟离',
            label: '钟离',
          }
        ]
      }, {
        value: '草',
        label: '草',
        children: [
          {
            value: '旅行者（空）',
            label: '旅行者（空）',
          },
          {
            value: '旅行者（莹）',
            label: '旅行者（莹）',
          },
          {
            value: '艾尔海森',
            label: '艾尔海森',
          },
          {
            value: '提纳里',
            label: '提纳里',
          },
          {
            value: '纳西妲',
            label: '纳西妲',
          }
        ]
      }
    ],
  },
  {
    value: '四星',
    label: '四星',
    children: [
      {
        value: '风',
        label: '风',
        children: [
          {
            value: '珐露珊',
            label: '珐露珊',
          },
          {
            value: '鹿野院平藏',
            label: '鹿野院平藏',
          },
          {
            value: '早柚',
            label: '早柚',
          },
          {
            value: '砂糖',
            label: '砂糖',
          }
        ]
      },
      {
        value: '火',
        label: '火',
        children: [
          {
            value: '托马',
            label: '托马',
          },
          {
            value: '班尼特',
            label: '班尼特',
          },
          {
            value: '安柏',
            label: '安柏',
          },
          {
            value: '香菱',
            label: '香菱',
          },
          {
            value: '辛焱',
            label: '辛焱',
          },
          {
            value: '烟绯',
            label: '烟绯',
          }
        ]
      },
      {
        value: '水',
        label: '水',
        children: [
          {
            value: '坎蒂丝',
            label: '坎蒂丝',
          },
          {
            value: '行秋',
            label: '行秋',
          },
          {
            value: '芭芭拉',
            label: '芭芭拉',
          }
        ]
      },
      {
        value: '冰',
        label: '冰',
        children: [
          {
            value: '莱依拉',
            label: '莱依拉',
          },
          {
            value: '迪奥娜',
            label: '迪奥娜',
          },
          {
            value: '重云',
            label: '重云',
          },
          {
            value: '罗莎莉亚',
            label: '罗莎莉亚',
          },
          {
            value: '凯亚',
            label: '凯亚',
          }
        ]
      },
      {
        value: '雷',
        label: '雷',
        children: [
          {
            value: '多莉',
            label: '多莉',
          },
          {
            value: '久岐忍',
            label: '久岐忍',
          },
          {
            value: '九条裟罗',
            label: '九条裟罗',
          },
          {
            value: '菲谢尔',
            label: '菲谢尔',
          },
          {
            value: '丽莎',
            label: '丽莎',
          },
          {
            value: '雷泽',
            label: '雷泽',
          },
          {
            value: '北斗',
            label: '北斗',
          }
        ]
      },
      {
        value: '岩',
        label: '岩',
        children: [
          {
            value: '云堇',
            label: '云堇',
          },
          {
            value: '五郎',
            label: '五郎',
          },
          {
            value: '凝光',
            label: '凝光',
          },
          {
            value: '诺艾尔',
            label: '诺艾尔',
          }
        ]
      }, {
        value: '草',
        label: '草',
        children: [
          {
            value: '瑶瑶',
            label: '瑶瑶',
          },
          {
            value: '柯莱',
            label: '柯莱',
          }
        ]
      }
    ],
  },
]

const roleLevel = [
  {
    value: 'LV1',
    label: 'LV1'
  },
  {
    value: 'LV10',
    label: 'LV10'
  },
  {
    value: 'LV20',
    label: 'LV20'
  },
  {
    value: 'LV30',
    label: 'LV30'
  },
  {
    value: 'LV40',
    label: 'LV40'
  },
  {
    value: 'LV50',
    label: 'LV50'
  },
  {
    value: 'LV60',
    label: 'LV60'
  },
  {
    value: 'LV70',
    label: 'LV70'
  },
  {
    value: 'LV80',
    label: 'LV80'
  },
  {
    value: 'LV90',
    label: 'LV90'
  }
]
</script>

<style lang="less" scoped>
.box-card {
  width: 40rem;
  height: 43rem;
  opacity: 0.9;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  color: aquamarine;

  .role-select {
    height: 3rem;
    font-size: 1.6rem;

    .role-title {
      border: 2px solid #eee;
      color: aqua;
      border-radius: 5px;
      text-align: center;
    }

    .role-choice-box {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;

      .role-header {
        margin: auto 10px;
        font-size: 1rem;
      }
    }
  }
}
</style>