import {Button, Container, Flex, Image, Title} from "@/shared";
import {LocationImage} from "@/shared/assets";

export const Location = () => {
    const handleClick = () => {
        const webUrl = 'https://yandex.ru/maps/?ll=73.034960,55.269228&z=16';

        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        const isAndroid = /Android/i.test(navigator.userAgent);

        if (isIOS) {
            window.location.href = 'maps://?q=55.269228,73.034960';
            return;
        }

        if (isAndroid) {
            window.location.href = 'geo:55.269228,73.034960';
            return;
        }

        // Desktop fallback
        window.open(webUrl, '_blank', 'noopener,noreferrer');
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
