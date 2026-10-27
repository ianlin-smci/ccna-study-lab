export interface GlossaryEntry {
  abbreviation: string;
  fullName: string;
  explanation: string;
  aliases?: string[];
  plural?: boolean;
  caseSensitive?: boolean;
}
export interface GlossarySegment {text: string; term?: GlossaryEntry}
