import { useState, useRef, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {Container, Flex, Form, type FormHandle, Title, Text} from '@/shared/ui';
import { Button } from '@/shared/ui/Button';
import { saveBlockAnswers, resetForm } from '@/app/store/slice';
import { mapValuesToLabels } from '@/shared/lib/mapValuesToLabels';
import type { FormBlock } from './types';
import type { RootState } from '@/app/store';

type FormWizardProps = {
    blocks: FormBlock[];
    onFinish: (data: Record<string, any>) => Promise<void>;
    isLoading?: boolean;
};

export const FormWizard = ({ blocks, onFinish, isLoading }: FormWizardProps) => {
    const dispatch = useDispatch();
    const storedAnswers = useSelector((state: RootState) => state.form.answers);

    const [currentBlock, setCurrentBlock] = useState(0);

    const sectionRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<FormHandle>(null);

    const isFirst = currentBlock === 0;
    const isLast = currentBlock === blocks.length - 1;
    const block = blocks[currentBlock];

    // плоский список всех вопросов для маппинга label/value
    const allQuestions = useMemo(
        () => blocks.flatMap(b => b.questions),
        [blocks]
    );

    // автоскролл к началу секции
    useEffect(() => {
        if(currentBlock !=0){
            sectionRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [currentBlock]);

    // вызывается формой при submit текущего блока
    const handleBlockSubmit = async (data: Record<string, any>) => {
        dispatch(saveBlockAnswers(data));

        const mergedAnswers = {
            ...storedAnswers,
            ...data,
        };

        // переход на следующий блок
        if (!isLast) {
            setCurrentBlock(prev => prev + 1);
            return;
        }

        // финальная отправка
        const humanReadable = mapValuesToLabels(
            mergedAnswers,
            allQuestions
        );

        await onFinish(humanReadable);

        dispatch(resetForm());
        setCurrentBlock(0);
    };

    const handleNext = () => {
        formRef.current?.submit();
    };

    const handleBack = () => {
        if (!isFirst) setCurrentBlock(prev => prev - 1);
    };

    return (
        <Container ref={sectionRef} paddingX={24} maxWidth={600}>
            <Flex align="center" gap={24}>

                {block.title && (
                    <Flex direction="column" align="center" gap={8}>
                        <Title as={'h2'} size={28}>{block.title}</Title>
                        {block.description && <Text align={'start'}>{block.description}</Text>}
                    </Flex>
                )}

                <Form
                    ref={formRef}
                    questions={block.questions}
                    onSubmit={handleBlockSubmit}
                />

                <Flex direction="row" justify="space-between" gap={32}>
                    {!isFirst && !isLoading && (
                        <Button type="button" onClick={handleBack}>
                            Назад
                        </Button>
                    )}

                    <Button type="button" onClick={handleNext} isLoading={isLoading}>
                        {isLast ? 'Отправить' : 'Далее'}
                    </Button>
                </Flex>

            </Flex>
        </Container>
    );
};
