import { useForm } from 'react-hook-form';
import type { Question, FormProps, FormHandle } from './types';
import { TextField, NumberField, RadioField, CheckboxField } from '@/shared';
import { forwardRef, useImperativeHandle } from 'react';
import styled from "@emotion/styled";

export const Form = forwardRef<FormHandle, FormProps>(
    ({ questions, onSubmit }, ref) => {
        const { control, handleSubmit, watch } = useForm();

        useImperativeHandle(ref, () => ({
            submit: handleSubmit(onSubmit),
        }));

        // следим за всеми значениями для conditional logic
        const watchedValues = watch();

        const shouldShow = (q: Question) => {
            if (!q.conditionalLogic) return true;
            const { dependsOn, showIf } = q.conditionalLogic;
            const currentValue = watchedValues[dependsOn];
            return Array.isArray(currentValue)
                ? currentValue.some(v => showIf.includes(v))
                : showIf.includes(currentValue);
        };


        const renderField = (q: Question) => {
            if (!shouldShow(q)) return null;

            switch (q.type) {
                case 'text':
                    return <TextField key={q.id} question={q} control={control} />;
                case 'number':
                    return <NumberField key={q.id} question={q} control={control} />;
                case 'radio':
                    return <RadioField key={q.id} question={q} control={control} />;
                case 'checkbox':
                    return <CheckboxField key={q.id} question={q} control={control} />;
                default:
                    return null;
            }
        };

        return (
            <StyledForm>
                {questions.map(renderField)}
            </StyledForm>
        );
    }
);

/* === ADDED: responsive form container === */
const StyledForm = styled.form`
  width: 100%;
  margin: 0 auto;

  /* mobile */
  max-width: 330px;

  /* tablet */
  @media (min-width: 768px) {
    max-width: 560px;
  }

  /* desktop */
  @media (min-width: 1024px) {
    max-width: 640px;
  }
`;

Form.displayName = 'Form';
