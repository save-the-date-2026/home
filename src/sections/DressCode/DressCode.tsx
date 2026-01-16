import {Container, Flex, Text, Title, Image} from "@/shared";
import {Brown, DarkBeige, Green, LightBeige, LightGreen} from "@/shared/assets";

export const DressCode = () => {
    return (
        <Container marginY={24}>
            <Flex gap={16}>
                <Title size={36}>ДРЕСС КОД</Title>
                <Text>
                    Нам хочется сохранить атмосферу природы,<br/>
                    поэтому будем рады видеть вас в мягких <br/>
                    натуральных цветах.
                </Text>
                <Flex
                    direction={'row'}
                    justify={'space-between'}
                    gap={10}
                >
                    <Image
                        src={LightGreen}
                        width={54}
                    />
                    <Image
                        src={Green}
                        width={54}
                    />
                    <Image
                        src={LightBeige}
                        width={54}
                    />
                    <Image
                        src={DarkBeige}
                        width={54}
                    />
                    <Image
                        src={Brown}
                        width={54}
                    />
                </Flex>
            </Flex>
        </Container>
    );
};

