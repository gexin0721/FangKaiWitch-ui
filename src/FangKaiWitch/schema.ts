export const Schema = z.object({
  世界: z.object({
    当前时间: z.string().prefault('圣历四九二年冬'),
    当前区域: z.string().prefault('边陲镇'),
    邪魔之月状态: z.boolean().prefault(false),
    剧情阶段: z.enum(['萌芽', '崛起', '争锋']).prefault('萌芽'),
    近期事件: z.array(z.string()).prefault([]),
  }),
  领地: z.object({
    规模: z.coerce.number().prefault(1),
    教会警戒度: z.coerce.number().prefault(0),
    农业: z.object({
      人口: z.coerce.number().prefault(200),
      粮食产量: z.coerce.number().prefault(30),
      粮食储备: z.coerce.number().prefault(40),
      特产: z.array(z.string()).prefault(['神石', '煤']),
    }),
    经济: z.object({
      贸易收入: z.coerce.number().prefault(0),
      税收: z.coerce.number().prefault(5),
      物资储备: z.record(z.string(), z.string()).prefault({}),
      矿产产出: z.record(z.string(), z.string()).prefault({}),
    }),
    外交: z.object({
      灰堡王室: z.coerce.number().prefault(10),
      灰堡贵族: z.coerce.number().prefault(10),
      教会: z.coerce.number().prefault(0),
      晨曦王国: z.coerce.number().prefault(0),
      狼心王国: z.coerce.number().prefault(0),
      莫金沙民: z.coerce.number().prefault(0),
      边境城邦: z.coerce.number().prefault(0),
      峡湾群岛: z.coerce.number().prefault(0),
      商会: z.coerce.number().prefault(5),
      佣兵团: z.coerce.number().prefault(5),
      魔鬼: z.coerce.number().prefault(-50),
    }),
    军事: z.object({
      陆军: z.coerce.number().prefault(50),
      海军: z.coerce.number().prefault(0),
      空军: z.coerce.number().prefault(0),
      装备水平: z.coerce.number().prefault(10),
      士气: z.coerce.number().prefault(50),
    }),
    科技: z.object({
      科技等级: z.coerce.number().prefault(1),
      技术研究进度: z.record(z.string(), z.string()).prefault({}),
      奥术学派进度: z.coerce.number().prefault(0),
      魔导化程度: z.coerce.number().prefault(0),
    }),
    稳定度: z.object({
      治安: z.coerce.number().prefault(40),
      民意: z.coerce.number().prefault(50),
    }),
    社会思潮: z.object({
      当前主流主义: z.string().prefault('封建主义'),
      思潮强度: z.record(z.string(), z.string()).prefault({}),
      改革推行进度: z.record(z.string(), z.string()).prefault({}),
      改革过渡期: z.boolean().prefault(false),
      反扑风险: z.coerce.number().prefault(0),
    }),
  }),
  温蒂: z.object({
    好感度: z.coerce.number().prefault(0),
  }),
  夜莺: z.object({
    好感度: z.coerce.number().prefault(0),
    信任度: z.coerce.number().prefault(0),
  }),
  书卷: z.object({
    好感度: z.coerce.number().prefault(0),
  }),
  叶子: z.object({
    好感度: z.coerce.number().prefault(0),
  }),
  希尔维: z.object({
    好感度: z.coerce.number().prefault(0),
  }),
  爱葛莎: z.object({
    好感度: z.coerce.number().prefault(0),
  }),
});
export type Schema = z.output<typeof Schema>;