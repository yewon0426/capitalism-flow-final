export type PartId = 'part1' | 'part2' | 'part3';

export interface CurriculumStep {
  stepNumber: number;
  label: string;
  description: string;
  highlightTarget?: string;
}

export interface TeacherNote {
  dialogue: string; // 수업 발문 대본
  coreConcept: string; // 핵심 개념 학술 해설
  misconceptions: string[]; // 대표 오개념 방지 포인트
  curriculumStandard: string; // 2022 개정 통합사회2 성취기준 연계
  discussionQuestion: string; // 학생들과 나눌 질문
}

export interface TopicItem {
  id: number;
  partId: PartId;
  partNumber: number;
  partTitle: string;
  chapterNumberStr: string; // e.g. "01", "03"
  title: string;
  subtitle: string;
  keyQuestion: string; // "자본주의란 무엇이며 왜 발전했을까?"
  periodTag?: string; // e.g. "16~18세기", "18세기 후반~19세기"
  steps: CurriculumStep[];
  teacherNote: TeacherNote;
}

export interface CausalityStep {
  step: number;
  title: string;
  description: string;
  category: '배경' | '특징' | '성과' | '문제' | '전환' | '변화' | '의의';
}

export interface EraConcept {
  id: string;
  order: number;
  keyword: string; // 26px 핵심어
  shortDesc: string; // 22px 1줄 설명
  badge: string;
}

export interface EraShiftTransition {
  keyword: string; // 핵심어 (e.g. "산업 혁명")
  subDesc: string; // 1줄 설명 (e.g. "기계·공장제 생산 확대")
  outcome: string; // 결과 (e.g. "산업 자본주의 발전")
  badge: string; // e.g. "역사적 전환"
}

export interface TimelineEra {
  id: string;
  name: string;
  nameEn: string;
  period: string;
  keyFeatures: [string, string]; // 딱 2개의 핵심 특징
  govRoleQualitative: string; // "중상주의적 국가 개입", "시장 자율과 자유방임 강조", "정부의 적극적인 경기 안정 역할", "시장 기능과 규제 완화 강조"
  background: string;
  coreMechanism: string;
  theorists: string;
  concepts: EraConcept[]; // 3대 핵심 개념 (상호작용 도식)
  transitionArea: EraShiftTransition; // 별도 강조 영역 (역사적 대전환)
  keywords: string[];
}

export interface TimelineHinge {
  id: string;
  fromEraId: string;
  toEraId: string;
  event: string;
  year: string;
  causeTitle: string;
  triggerCause: string;
  crisisTitle: string;
  crisisOrShift: string;
  responseTitle: string;
  lesson: string;
}
