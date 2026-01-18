import { Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import type { Question } from '@/shared/ui';

export const NumberField = ({ question, control }: { question: Question; control: any }) => (
    <Field>
        <Label>{question.label}</Label>

        <Controller
            name={question.fieldName}
            control={control}
            rules={{
                required: question.required,
                min: question.min,
                max: question.max,
            }}
            render={({ field }) => (
                <input
                    {...field}
                    type="number"
                    min={question.min}
                    max={question.max}
                    placeholder={question.placeholder}
                />
            )}
        />
    </Field>
);

const Field = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;


const Label = styled.label`
    margin-bottom: 12px;
`