import { Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import {Flex, type Question} from '@/shared/ui';
import {Text} from '@/shared'

export const TextField = ({ question, control }: { question: Question; control: any }) => (
    <Field>
        <Label><Text align={'start'}  weight={700}>{question.label}</Text></Label>
        <Flex align={'flex-start'}>
            <Controller
                name={question.fieldName}
                control={control}
                rules={{ required: question.required }}
                render={({ field }) => (
                    <BorderBottomInput
                        {...field}
                        type="text"
                        placeholder={question.placeholder}
                    />
                )}
            />
        </Flex>
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

export const BorderBottomInput = styled.input`
    width: 100%;
    padding: 8px 0;
    font-size: 16px;
    font-family: inherit;
    color: #333;
    background: transparent;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-bottom-color: #007bff;
    }

    &:disabled {
        border-bottom-color: #e9ecef;
        color: #6c757d;
        cursor: not-allowed;
    }

    &::placeholder {
        color: #999;
        opacity: 1;
    }

    &:hover:not(:disabled):not(:focus) {
        border-bottom-color: #999;
    }
`;
