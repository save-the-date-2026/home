import { Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import {Flex, type Question, Text} from '@/shared/ui';
export const CheckboxField = ({ question, control }: { question: Question; control: any }) => (
    <Field>
        <TitleLabel> <Text align={'start'} weight={700}>{question.label}</Text></TitleLabel>

        <Controller
            name={question.fieldName}
            control={control}
            rules={{ required: question.required }}
            defaultValue={[]}
            render={({ field }) => {
                const values: string[] = field.value || [];

                const toggleValue = (val: string) => {
                    if (values.includes(val)) {
                        field.onChange(values.filter(v => v !== val));
                    } else {
                        field.onChange([...values, val]);
                    }
                };

                return (
                    <Options>
                        {question.options?.map(opt => (
                            <Label key={opt.value}>
                                <Flex direction={'row'}>
                                    <Input
                                        type="checkbox"
                                        checked={values.includes(opt.value)}
                                        onChange={() => toggleValue(opt.value)}
                                    />
                                    <Text align={'start'}>
                                        {opt.label}
                                    </Text>
                                </Flex>
                            </Label>
                        ))}
                    </Options>
                );
            }}
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
const TitleLabel = styled.label`
    margin-bottom: 12px;
    font-weight: bold;
`

const Label = styled.label`
    display: flex;
    flex-direction: row;
    
`

const Input = styled.input`
    padding-right: 16px;
`