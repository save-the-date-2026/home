import { FormWizard } from '@/widget/FormWizard';
import type { FormBlock } from '@/widget/FormWizard';
import formConfig from '@/shared/config/questions.json'
import {Container, Flex, Title, Text} from "@/shared";
import {useState} from "react";

const formBlocks: FormBlock[] = formConfig as FormBlock[];

export const Questionnaire = () => {

    const [finished, setFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleFinish = async (data: Record<string, any>) => {
        setIsLoading(true)
        await fetch('https://script.google.com/macros/s/AKfycbzw2zbL80YQ9LeczWVgYVnY7bnmpRFrQSG3MSm4BlhN8Nm6MvXZ4JucAu4PmD244GC1nA/exec', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        setFinished(true)
        setIsLoading(false)
        console.log(data)
    };



    return (
        <Flex>
            {
                finished ?
                    <Container marginY={40}>
                        <Flex justify={'center'} gap={20}>
                            <Text>Данные успешно отправлены</Text>
                            <Title>ЖДЕМ ВАС!</Title>
                        </Flex>
                    </Container>
                    :
                    <FormWizard
                        blocks={formBlocks}
                        onFinish={handleFinish}
                        isLoading={isLoading}
                    />
            }
        </Flex>
    );
};
