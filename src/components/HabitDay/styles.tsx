import styled from 'styled-components/native';
import { fifth, first, fourth, roseQuartz, second, sixth, third } from '../../constants/colors';

interface HabitDayHolderProps {
  theme?: 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth' | 'today';
  hideBorder?: boolean;
}

export const Container = styled.TouchableOpacity`
  padding: 2px;
`;

export const Content = styled.View<HabitDayHolderProps>`
  border-radius: 8px;
  opacity: 1;
  transition: opacity 0.7s ease-in-out;

  ${({theme}) =>
    theme === 'first' &&
    `
    background-color: ${first};
  `}

  ${({theme}) =>
    theme === 'second' &&
    `
    background-color: ${second};
  `}

${({theme}) =>
    theme === 'third' &&
    `
    background-color: ${third};
  `}

${({theme}) =>
    theme === 'fourth' &&
    `
    background-color: ${fourth};
  `}

${({theme}) =>
    theme === 'fifth' &&
    `
    background-color: ${fifth};
  `}

${({theme}) =>
    theme === 'sixth' &&
    `
    background-color: ${sixth};
  `}

${({hideBorder}) =>
    !hideBorder &&
    `
    border-width: 2px;
    border-color: ${roseQuartz};
  `}
`;
