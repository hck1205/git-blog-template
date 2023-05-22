"use client";

import { Popover } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";
import { PALLETE_KEY, PALLETE_VALUE } from "@/constpack";

import { ComponentWrapper, PaletteWrapper } from "./styles";

type Props = {
  toggleMenu: () => void;
  isMenuActive: boolean;
};

function Header({ toggleMenu, isMenuActive }: Props) {
  return (
    <ComponentWrapper>
      <div className="menu-icon-wrapper" onClick={toggleMenu}>
        {isMenuActive ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </div>

      <Popover
        overlayClassName="text-style-pop-over"
        placement="bottomLeft"
        content={
          <Palette
            onUpdate={({ type, value }) => {
              console.log({ type, value });
            }}
          />
        }
        trigger="click"
      >
        <div className="font-icon-wrapper">
          <FontSizeOutlined />
        </div>
      </Popover>
    </ComponentWrapper>
  );
}

const Palette = ({
  onUpdate,
}: {
  onUpdate: ({ type, value }: { type: string; value: string }) => void;
}) => {
  return (
    <PaletteWrapper>
      <li className="row first">
        <span
          className="small"
          onClick={() =>
            onUpdate({
              type: PALLETE_KEY.FONT_SIZE,
              value: PALLETE_VALUE.SMALL,
            })
          }
        >
          A
        </span>
        <span
          className="big"
          onClick={() =>
            onUpdate({ type: PALLETE_KEY.FONT_SIZE, value: PALLETE_VALUE.BIG })
          }
        >
          A
        </span>
      </li>
      <li className="row second">
        <span
          className="serif"
          onClick={() =>
            onUpdate({
              type: PALLETE_KEY.FONT_STYLE,
              value: PALLETE_VALUE.SERIF,
            })
          }
        >
          Serif
        </span>
        <span
          className="sans"
          onClick={() =>
            onUpdate({
              type: PALLETE_KEY.FONT_STYLE,
              value: PALLETE_VALUE.SANS,
            })
          }
        >
          Sans
        </span>
      </li>
      <li className="row third">
        <span
          className="White"
          onClick={() =>
            onUpdate({
              type: PALLETE_KEY.THEME_TYPE,
              value: PALLETE_VALUE.WHITE,
            })
          }
        >
          White
        </span>
        <span
          className="Sepia"
          onClick={() =>
            onUpdate({
              type: PALLETE_KEY.THEME_TYPE,
              value: PALLETE_VALUE.SERIF,
            })
          }
        >
          Sepia
        </span>
        <span
          className="Night"
          onClick={() =>
            onUpdate({
              type: PALLETE_KEY.THEME_TYPE,
              value: PALLETE_VALUE.NIGHT,
            })
          }
        >
          Night
        </span>
      </li>
    </PaletteWrapper>
  );
};

export default Header;
