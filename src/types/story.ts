/**
 * @fileoverview Domain types for the Neverending Story Engine & Kindle Reader.
 */

export type KindleTheme = 'paperwhite' | 'sepia' | 'dark' | 'mint';
export type KindleFont = 'bookerly' | 'georgia' | 'sans';
export type KindleFontSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl';
export type KindleLineSpacing = 'normal' | 'relaxed' | 'loose';
export type KindleMarginWidth = 'narrow' | 'normal' | 'wide';

export interface CharacterProfile {
  id: string;
  name: string;
  role: string;
  personality: string;
  location: string;
  backstory: string;
  inventory: string[];
  relationships: Record<string, string>;
  lastObservedUk: string;
}

export interface StorySourceTrigger {
  headline: string;
  category: 'Tech & AI' | 'UK Sports' | 'Atmospheric & Climate' | 'Governance & Infrastructure';
  sourceUrl?: string;
  extractedContextSnippet: string;
}

export interface Chapter {
  chapterNumber: number;
  title: string;
  subtitle: string;
  contentMarkdown: string;
  wordCount: number;
  readingTimeMinutes: number;
  modelUsed: string;
  tone: string;
  sourceTrigger: StorySourceTrigger;
  generatedAtUk: string;
  charactersInvolved: string[];
}

export interface StoryChronicleBook {
  bookTitle: string;
  subtitle: string;
  author: string;
  lastUpdatedUk: string;
  totalChapters: number;
  totalWords: number;
  characters: CharacterProfile[];
  usedSourceHeadlines: string[];
  chapters: Chapter[];
}

export interface KindleReaderSettings {
  theme: KindleTheme;
  fontFamily: KindleFont;
  fontSize: KindleFontSize;
  lineSpacing: KindleLineSpacing;
  marginWidth: KindleMarginWidth;
  isAutoscrollActive: boolean;
  autoscrollSpeed: number; // 1 to 5
}
