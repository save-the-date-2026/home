import type { Question } from '@/shared';

export type FormBlock = {
    id: number;
    title: string;
    description?: string;
    questions: Question[];
};
