export type Option = {
    value: string;
    label: string;
};

export type ConditionalLogic = {
    dependsOn: string;
    showIf: string[];
};

export type Question = {
    id: number;
    fieldName: string;
    label: string;
    type: 'text' | 'number' | 'radio' | 'checkbox';
    required?: boolean;
    placeholder?: string;
    min?: number;
    max?: number;
    options?: Option[];
    conditionalLogic?: ConditionalLogic;
};

export type FormProps = {
    questions: Question[];
    onSubmit: (data: Record<string, any>) => void;
};

export type FormHandle = {
    submit: () => void;
};
