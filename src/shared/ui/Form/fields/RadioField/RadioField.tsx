import { Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import {Flex, type Question, Text} from '@/shared/ui';

export const RadioField = ({ question, control }: { question: Question; control: any }) => (
    <Field>
        <Label><Text align={'start'} weight={700}>{question.label}</Text></Label>

        <Controller
            name={question.fieldName}
            control={control}
            rules={{ required: question.required }}
            render={({ field }) => (
                <Options>
                    {question.options?.map(opt => (
                        <label key={opt.value}>
                            <Flex direction={'row'}>
                                <Input
                                    type="radio"
                                    checked={field.value === opt.value}
                                    onChange={() => field.onChange(opt.value)}
                                />

                                <Text align={'start'}>
                                    {opt.label}
                                </Text>
                            </Flex>
                        </label>
                    ))}
                </Options>
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

const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Input = styled.input`
    padding-right: 16px;
`

const Label = styled.label`
    margin-bottom: 12px;
    font-weight: bold;
`
