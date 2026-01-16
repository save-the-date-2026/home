import {
    Left1, Left2, Left3,
    Right1, Right2, Right3
} from '@/shared/assets/images';

import {
    BackgroundRoot,
    PatternBlock,
    SideColumn
} from './styles';

const PATTERN_HEIGHT = 600; // высота одного повторяющегося блока

export const BackgroundGenerator = () => {
    // создаём достаточное количество блоков под любую высоту страницы
    // 10 блоков перекрывают даже длинный лендинг
    const blocks = Array.from({ length: 10 });

    return (
        <BackgroundRoot>
            {blocks.map((_, i) => (
                <PatternBlock key={i} offset={i * PATTERN_HEIGHT}>

                    <SideColumn side="left">
                        <Left1 />
                        <Left2 />
                        <Left3 />
                    </SideColumn>

                    <SideColumn side="right">
                        <Right1 />
                        <Right2 />
                        <Right3 />
                    </SideColumn>

                </PatternBlock>
            ))}
        </BackgroundRoot>
    );
};
