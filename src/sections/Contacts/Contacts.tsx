import {Container, Title, Text, Button, Flex, Toast} from "@/shared";
import {useState} from "react";

export const Contacts = () => {
    const [showToast, setShowToast] = useState(false);
    const handleClick = async () => {
        const phoneNumber = '+79080349610'; // номер в международном формате

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            try {
                await navigator.clipboard.writeText(phoneNumber);
            } catch {
                // fallback для старых браузеров
                const textarea = document.createElement('textarea');
                textarea.value = phoneNumber;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                textarea.remove();
            }
            setShowToast(true);
        }
    }

    return (
        <Container marginY={24}>
            <Flex gap={24} align={'center'}>
                <Title as={'h1'} size={36}>КОНТАКТЫ</Title>
                <Text>
                    Если хотите сделать творческий подарок или у вас возникнут вопросы, можете обращаться к нашему свадебному организатору.
                </Text>
                <Button onClick={handleClick}>+7 (908) 034-96-10 <br/>Людмила</Button>

                {showToast && (
                    <Toast
                        message="Номер скопирован в буфер обмена"
                        onClose={() => setShowToast(false)}
                    />
                )}
            </Flex>
        </Container>
    );
};
