/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MapPin, 
  Hotel, 
  UserCircle,
  CheckCircle2,
  ChevronRight,
  UtensilsCrossed,
  Activity,
  LayoutDashboard,
  Bell
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "text-3xl md:text-5xl font-bold tracking-tight mb-6",
        light ? "text-white" : "text-slate-900"
      )}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-lg md:text-xl max-w-3xl mx-auto leading-relaxed",
          light ? "text-slate-400" : "text-slate-600"
        )}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1.5 w-24 bg-blue-600 mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
    />
  </div>
);

const PhoneFrame = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => (
  <div className={cn("relative mx-auto border-slate-900 bg-slate-900 border-[12px] rounded-[3.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden group", className)}>
    {/* Screen Content */}
    <div className="relative w-full h-full bg-slate-50 overflow-hidden">
      {children}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
          <div className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-1">Live Preview</div>
          <div className="text-sm font-bold leading-tight">{title}</div>
        </div>
      )}
    </div>
    {/* Reflection Overlay */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-40" />
  </div>
);

// --- Main App ---

export default function App() {
  const [activeContentTab, setActiveContentTab] = useState(0);
  const [activeMapStep, setActiveMapStep] = useState(0);

  const liveMapSteps = [
    { title: '开启活点模式', desc: '高德地图首页支持一键开启"活点地图"模式', image: './assets/4-2-1.png' },
    { title: '查看扫街榜', desc: '进入活点模式后查看"扫街榜"头部商户和达人', image: './assets/4-2-2.png' },
    { title: 'Pin 感兴趣活点', desc: '在地图上直接 Pin 住感兴趣的活点位置', image: './assets/4-2-3.png' },
    { title: '形成旅程清单', desc: '自动将已 Pin 的活点汇总形成初步旅程清单', image: './assets/4-2-4.png' },
    { title: '规划行程目的地', desc: '按照时间先后顺序智能规划清单中的行程目的地，并可放大每个目的地展示关联的活动、达人和打卡点', image: './assets/4-2-5-1.png', image2: './assets/4-2-5-2.png' },
    { title: '展示关联', desc: '放大每个目的地可展示关联的活动、达人和打卡点', image: './assets/4-2-6.png' },
    { title: '召唤行程管家', desc: '召唤行程管家帮你省钱，在行程页点"黄小西妙招"——进入智能体询价——智能体依据行程推送相关优惠套餐——用户下单。', image: './assets/4-2-7.png' },
    { title: '智能体询价', desc: '一键打包购买行程中的所有旅游产品并下单', image: './assets/4-2-8.png' },
    { title: '打包购买', desc: '打包购买行程中的旅游产品。', image: './assets/4-2-9.png' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 商户层 (智能体部署) */}
      <section id="ecosystem" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="华创云信各类商户智能体" 
          />

          <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: '景区智能体',
                  icon: MapPin,
                  items: ['智能导览与讲解', '票务分时预约', '客流预警引导'],
                  image: './assets/景区智能体.png'
                },
                {
                  title: '酒店智能体',
                  icon: Hotel,
                  items: ['入住咨询与房型介绍', '智能推荐与周边服务', '客户关怀与满意度调查'],
                  image: './assets/酒店智能体.jpg'
                },
                {
                  title: '餐饮智能体',
                  icon: UtensilsCrossed,
                  items: ['菜单推荐与口味偏好', '排队预约与在线取号', '优惠推送与食材溯源'],
                  image: './assets/餐饮智能体.jpg'
                },
                {
                  title: '个人智能体',
                  icon: UserCircle,
                  items: ['AI帮讲故事', '24h在线接待', '咨询秒回撮合'],
                  image: './assets/个人智能体.png'
                },
                {
                  title: '诊所/药店智能体',
                  icon: Activity,
                  items: ['预约挂号与候诊提醒', '健康咨询与用药指导', '院内导航与位置指引'],
                  image: './assets/f1efe81fedc99b52ae2b2b70ce91be1e.png',
                  isPC: true
                },
                {
                  title: 'B端工作台',
                  icon: LayoutDashboard,
                  items: ['经营数据看板', '客户画像管理', '营销工具配置'],
                  image: './assets/B端工作台.png',
                  isPC: false
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-slate-50/50 rounded-[2.5rem] p-10 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-8 group-hover:scale-110 transition-transform">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-8">{card.title}</h4>
                  <div className="space-y-4 mb-12 text-left w-full">
                    {card.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className={cn(
                    "w-full bg-slate-900 overflow-hidden shadow-2xl relative transition-transform duration-500 hover:scale-[1.2] hover:z-50",
                    card.isPC 
                      ? "aspect-video rounded-xl border-[4px] border-slate-800" 
                      : "max-w-[200px] aspect-[9/18] rounded-[2.5rem] border-[6px] border-slate-900"
                  )}>
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* 合作内容 */}
      <section id="innovative" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="黄小西的可能存在的合作内容" 
          />

          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl">
              {[
                { id: 0, label: '小高老师在贵州的整体形象切换为黄小西' },
                { id: 1, label: '节点智能推送' },
                { id: 2, label: '超时空活点地图' },
                { id: 3, label: 'AI 名片展示' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveContentTab(tab.id)}
                  className={cn(
                    "px-8 py-3 rounded-xl text-sm font-black transition-all",
                    activeContentTab === tab.id
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeContentTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeContentTab === 0 && (
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                  <div className="group">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-500/20">
                        <UserCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900">小高老师在贵州的整体形象切换为黄小西</h3>
                    </div>
                    <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                      将高德地图在贵州的虚拟形象从"小高老师"全面升级为"黄小西"，打造更具地域特色和文化认同的智能服务形象。
                    </p>

                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden w-full max-w-lg p-8">
                    <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 -mx-8 -mt-8 mb-6">
                      <h4 className="text-lg font-black text-slate-900">"黄小西"优势</h4>
                    </div>
                    <div className="space-y-4">
                      {[
                        { title: '文化贴合本土', desc: '契合贵州地域文旅特色，自带地方文化属性' },
                        { title: '辨识度突出', desc: 'IP 名称简洁，形象鲜明易记' },
                        { title: '官方权威认证', desc: '获省级认可，公信力强' },
                        { title: '应用场景多元', desc: '适配文旅服务、商业衍生等多场景开发' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                          <div className="font-bold text-purple-700 mb-1">{item.title}</div>
                          <div className="text-sm text-purple-600">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeContentTab === 1 && (
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                  <div className="group">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/20">
                        <Bell className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900">节点智能推送</h3>
                    </div>
                    <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                      基于 LBS 地理围栏技术，在用户旅程的关键节点（到达景区、进入酒店、停车就餐）主动推送智能体服务。
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                      {[
                        '到达触发：欢迎语+导览',
                        '驻留触发：深度体验推荐',
                        '离开触发：评价邀请+返程建议',
                        '跨端同步：高德App实时推送'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 text-sm font-bold text-slate-700 shadow-sm hover:border-orange-300 transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden w-full max-w-lg">
                    <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                      <h4 className="text-lg font-black text-slate-900">推送策略-服务场景匹配</h4>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        { type: '全域级推送', trigger: '飞机/高铁落地贵州后首次打开高德', content: '黄小西欢迎页+行程规划服务+消费券领取', target: '建立服务入口认知' },
                        { type: '目的地级推送', trigger: '到达黄果树停车场/酒店周边', content: '对应场景智能体（景区/酒店智能体）', target: '提供即时服务' },
                        { type: '行程级推送', trigger: '根据用户已规划行程，在对应时间节点', content: '下一站提醒+预约服务+交通建议', target: '行程串联服务' },
                        { type: '行为级推送', trigger: '搜索"贵州攻略"/"黄果树门票"/"贵州饭店"等', content: '相关产品包+智能体入口', target: '需求即时响应' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-6 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
                              {item.type}
                            </span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-md">
                              {item.target}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <span className="text-xs font-bold text-slate-400 block mb-1">触发条件</span>
                              <div className="text-sm font-medium text-slate-700">{item.trigger}</div>
                            </div>
                            <div>
                              <span className="text-xs font-bold text-slate-400 block mb-1">推送内容</span>
                              <div className="text-sm font-bold text-slate-900">{item.content}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeContentTab === 2 && (
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                  <div className="group">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900">超时空活点地图</h3>
                    </div>
                    <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                      从单纯的地理位置导航，延展为包含时间、活动与人群的旅程体验设计。促使用户"多去一地、多见一人、多留一天"。
                    </p>
                    
                    <div className="space-y-3">
                      {liveMapSteps.map((step, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveMapStep(i)}
                          className={cn(
                            "w-full text-left px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-4 group",
                            activeMapStep === i 
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                              : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                          )}
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0",
                            activeMapStep === i ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                          )}>
                            {i + 1}
                          </div>
                          <div className="flex-grow">
                            <div className="text-sm">{step.title}</div>
                          </div>
                          <ChevronRight className={cn("w-4 h-4 transition-transform", activeMapStep === i ? "translate-x-1" : "opacity-0")} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                  <motion.div
                    key={activeMapStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-8"
                  >
                    <PhoneFrame title={liveMapSteps[activeMapStep].title}>
                      <img src={liveMapSteps[activeMapStep].image} alt={liveMapSteps[activeMapStep].title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </PhoneFrame>
                    {liveMapSteps[activeMapStep].image2 && (
                      <PhoneFrame title={liveMapSteps[activeMapStep].title}>
                        <img src={liveMapSteps[activeMapStep].image2} alt={liveMapSteps[activeMapStep].title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                      </PhoneFrame>
                    )}
                  </motion.div>
                  <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xl text-slate-900 max-w-2xl w-full">
                    <div className="text-[10px] font-black text-blue-600 mb-2 uppercase tracking-widest">Step {activeMapStep + 1}</div>
                    <div className="text-sm font-bold leading-relaxed">{liveMapSteps[activeMapStep].desc}</div>
                    {liveMapSteps[activeMapStep].image2 && (
                      <>
                        <div className="text-[10px] font-black text-blue-600 mb-2 mt-4 uppercase tracking-widest">Step {activeMapStep + 1} (详情)</div>
                        <div className="text-sm font-bold leading-relaxed">放大每个目的地可展示关联的活动、达人和打卡点</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeContentTab === 3 && (
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                  <div className="group">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-teal-500/20">
                        <UserCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900">AI 名片展示</h3>
                    </div>
                    <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                      赋能超级个体（达人）的抓手，由对客名片和AI工作台组成。支持服务订阅，未来可集成高德广告服务。
                    </p>
                    <div className="flex gap-6">
                      <div className="flex-1 p-6 bg-teal-50 rounded-3xl border border-teal-100">
                        <div className="text-teal-700 font-black text-lg mb-2">对客名片</div>
                        <div className="text-sm text-teal-600 font-medium">展示个人品牌与服务</div>
                      </div>
                      <div className="flex-1 p-6 bg-slate-900 rounded-3xl shadow-xl">
                        <div className="text-white font-black text-lg mb-2">AI 工作台</div>
                        <div className="text-sm text-slate-400 font-medium">高效管理私域客户</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-8">
                  <PhoneFrame title="对客名片 (虾片)">
                    <img src="./assets/4-3-1.png" alt="对客名片" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </PhoneFrame>
                  <PhoneFrame title="AI 工作台">
                    <img src="./assets/4-3-2.png" alt="AI 工作台" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </PhoneFrame>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
