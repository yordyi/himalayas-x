import { 
  BeakerIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

export const solutions = [
  {
    id: 'ai-automation',
    name: 'AI 自动化',
    icon: BeakerIcon,
    description: '利用AI自动化您的业务流程',
    href: '/solutions/ai-automation',
    features: [
      {
        name: '智能工作流',
        description: '自动化重复性任务和流程',
      },
      {
        name: '数据分析',
        description: '深度学习驱动的数据分析',
      },
      {
        name: '预测模型',
        description: '基于历史数据的智能预测',
      },
      {
        name: '实时监控',
        description: '关键指标实时监控和预警',
      },
    ],
    benefits: [
      '提高运营效率75%',
      '减少人为错误90%',
      '加快决策速度',
      '降低运营成本',
    ],
  },
  {
    id: 'data-analytics',
    name: '数据分析',
    icon: ChartBarIcon,
    description: '深度数据分析和商业智能',
    href: '/solutions/data-analytics',
    features: [
      {
        name: '商业智能',
        description: '可视化数据分析和报告',
      },
      {
        name: '预测分析',
        description: '基于AI的趋势预测',
      },
      {
        name: '实时分析',
        description: '实时数据处理和分析',
      },
      {
        name: '定制报告',
        description: '自定义分析报告生成',
      },
    ],
    benefits: [
      '提升决策准确度60%',
      '优化资源分配',
      '发现潜在机会',
      '提高投资回报',
    ],
  },
  {
    id: 'security',
    name: '安全与合规',
    icon: ShieldCheckIcon,
    description: '企业级安全解决方案',
    href: '/solutions/security',
    features: [
      {
        name: '威胁检测',
        description: 'AI驱动的安全威胁检测',
      },
      {
        name: '合规管理',
        description: '自动化合规检查和报告',
      },
      {
        name: '数据加密',
        description: '端到端数据加密保护',
      },
      {
        name: '访问控制',
        description: '细粒度的访问权限管理',
      },
    ],
    benefits: [
      '降低安全风险80%',
      '确保合规性',
      '保护敏感数据',
      '简化审计流程',
    ],
  },
] as const

export type Solution = typeof solutions[number] 