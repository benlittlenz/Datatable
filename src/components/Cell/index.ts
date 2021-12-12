import styled, { css } from "styled-components";
import { TableColumnBase } from "../types";

export const CellBase = styled.div<{
  headCell?: boolean;
  noPadding?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  line-height: normal;
  ${({ noPadding }) => noPadding && "padding: 0"};
`;

export type CellProps = Pick<
  TableColumnBase,
  | "button"
  | "grow"
  | "maxWidth"
  | "minWidth"
  | "width"
  | "right"
  | "center"
  | "compact"
  | "allowOverflow"
>;

// Flex calculations
export const CellExtended = styled(CellBase)<CellProps>`
  flex-grow: ${({ button, grow }) => (grow === 0 || button ? 0 : grow || 1)};
  flex-shrink: 0;
  flex-basis: 0;
  max-width: "100%",
  min-width: "100px",
  ${({ width }) =>
    width &&
    css`
      min-width: ${width};
      max-width: ${width};
    `};
  ${({ right }) => right && "justify-content: flex-end"};
  ${({ button, center }) => (center || button) && "justify-content: center"};
  ${({ compact, button }) => (compact || button) && "padding: 0"};
`;
