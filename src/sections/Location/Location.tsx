import {Button, Container, Flex, Image, Title} from "@/shared";
import {LocationImage} from "@/shared/assets";

export const Location = () => {
    const handleClick = () => {
        const url = 'https://yandex.ru/maps/-/CLhUrSPl';

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            // Попытка открыть нативное приложение карт
            window.location.href = `geo:55.269228,73.034960`;
        } else {
            // ПК — открываем в новой вкладке
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <Container>
            <Flex gap={24} align={'center'}>
                <Title as={'h1'} size={36}>Локация</Title>
                <Title as={"h2"}>
                    Парк-отель “Мечта” <br/>
                    Омская область, Лесная, 2
                </Title>
                <Image
                    src={LocationImage}
                    width={'90%'}
                />
                <Button onClick={handleClick}>ПОСМОТРЕТЬ НА КАРТЕ</Button>
            </Flex>
        </Container>
    );
};
