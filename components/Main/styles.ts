import styled from "@emotion/styled";

import { BG_COLOR_MAIN } from "@/constpack";

export const ComponentWrapper = styled.div<{ isMenuActive: boolean }>`
  margin-left: ${({ isMenuActive }) => (isMenuActive ? "300px" : 0)};
  transition: margin-left 0.2s;

  .header {
  }

  .body {
  }

  .footer {
  }
`;
