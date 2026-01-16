import styled from '@emotion/styled';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from '@/shared/ui/Table';
import { Image } from '@/shared/ui/Image';
import { DateHighlighter } from '@/shared/assets/images';
import {Title} from "@/shared";

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// Июль 2026 начинается с четверга → смещение 3
const START_OFFSET = 0;
const DAYS_IN_MONTH = 31;
const HIGHLIGHT_DAY = 20;

export const Calendar = () => {
    const cells = Array.from({ length: START_OFFSET + DAYS_IN_MONTH }, (_, i) =>
        i < START_OFFSET ? null : i - START_OFFSET + 1
    );

    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) {
        weeks.push(cells.slice(i, i + 7));
    }

    return (
        <Wrapper>
            <Header>
                <Title>Июнь</Title>
                <Title>2026</Title>
            </Header>

            <Table>
                <TableHead>
                    <TableRow>
                        {DAYS.map(day => (
                            <TableHeaderCell key={day}>{day}</TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {weeks.map((week, i) => (
                        <TableRow key={i}>
                            {week.map((day, j) => (
                                <TableCell key={j}>
                                    {day && (
                                        <DayWrapper>
                                            {day === HIGHLIGHT_DAY && (
                                                <Highlight>
                                                    <Image SvgComponent={DateHighlighter} width={54} height={54} />
                                                </Highlight>
                                            )}
                                            <span>{day}</span>
                                        </DayWrapper>
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: 600;
`;

const DayWrapper = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Highlight = styled.div`
    position: absolute;
    top: -12px;    /* смещение вверх */
    left: -6px;   /* смещение влево */
    z-index: 1;    /* чтобы SVG был поверх цифры */

    svg {
        display: block;
    }
`;

