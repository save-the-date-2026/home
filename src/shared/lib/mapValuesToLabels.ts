import type { Question } from '@/shared';

export function mapValuesToLabels(
    answers: Record<string, any>,
    questions: Question[]
) {
    const lookup = new Map<string, Map<string, string>>();

    questions.forEach(q => {
        if (!q.options) return;
        const dict = new Map<string, string>();
        q.options.forEach(opt => dict.set(opt.value, opt.label));
        lookup.set(q.fieldName, dict);
    });

    const result: Record<string, any> = {};

    Object.entries(answers).forEach(([field, value]) => {
        const dict = lookup.get(field);

        if (!dict) {
            result[field] = value;
            return;
        }

        if (Array.isArray(value)) {
            result[field] = value.map(v => dict.get(v) ?? v).join(', ');
            return;
        }

        result[field] = dict.get(value) ?? value;
    });

    return result;
}
