import styled from "@emotion/styled";
import { FLEX_CENTER } from "@/designs";

export const ComponentWrapper = styled.div`
  display: inline-flex;
  height: 50px;

  .menu-icon-wrapper,
  .font-icon-wrapper {
    padding: 10px;
    cursor: pointer;

    svg {
      width: 17px;
      height: 17px;
      fill: #3b3f54;
    }

    &:hover {
      svg {
        fill: #fff;
      }
    }
  }
`;

export const PaletteWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 5px;
    color: #62677f;
    /* border: 1px solid black; */

    span {
      cursor: pointer;
      width: 100%;
      text-align: center;
      padding: 0 10px;

      &.big {
        font-size: 20px;
      }

      &:hover {
        color: #fff;
      }
    }
  }
`;
