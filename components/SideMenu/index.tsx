"use client";

import { Key, ReactNode, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Menu } from "antd";

import { MdFileContent } from "@/utils";
import { PURPLE } from "@/designs";
import { CATEGORY_TITLE } from "constpack/common";

import { ComponentWrapper } from "./styles";

import type { MenuProps } from "antd/es/menu";

type MenuItem = Required<MenuProps>["items"][number];

const EMPTY_CATEGORY = CATEGORY_TITLE.EMPTY_CATEGORY;

const getItem = (
  label: ReactNode,
  key?: Key | null,
  icon?: ReactNode,
  children?: MenuItem[],
  path?: string
) =>
  ({
    label,
    key,
    icon,
    children,
    path,
  } as MenuItem);

type Props = {
  isActive: boolean;
  allFrontMatter: MdFileContent;
};

const customMenu = [
  {
    key: "Home",
    label: "Home",
    icon: undefined,
    children: undefined, // or Array to make sub-fodlers
    path: "/home", // path to next/route
  },
];

function SlideMenu({ isActive, allFrontMatter }: Props) {
  const router = useRouter();

  const menuItems = useMemo(() => {
    // categorized menu
    let categorizedItems = Object.entries(allFrontMatter)
      .sort(([key]) => (key === EMPTY_CATEGORY ? 1 : -1))
      .filter(([key]) => key !== EMPTY_CATEGORY)
      .map(([key, listOfMDNames], index) => {
        const isEmptyCategory = key === EMPTY_CATEGORY;

        const subOptions = isEmptyCategory
          ? undefined
          : listOfMDNames.map(({ slug }, index) =>
              getItem(
                slug,
                `${slug}-${index}`,
                undefined,
                undefined,
                `/posts/${key}/${slug}`
              )
            );

        return getItem(key, `${key}-${index}`, undefined, subOptions);
      });

    // non-category menu
    if (allFrontMatter[EMPTY_CATEGORY]) {
      const emptyCategoriezedItems = allFrontMatter[EMPTY_CATEGORY].map(
        ({ slug = "" }, index) => ({
          key: `${slug}-${index}`,
          label: slug,
          icon: undefined,
          path: `/posts/${slug}`,
        })
      );

      categorizedItems = [...categorizedItems, ...emptyCategoriezedItems];
    }

    return categorizedItems;
  }, [allFrontMatter]);

  console.log("menuItems", menuItems);

  return (
    <ComponentWrapper isActive={isActive}>
      <Menu
        style={{ backgroundColor: PURPLE(10), color: "#fff" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={[...customMenu, ...menuItems]}
        mode={"inline"}
        onClick={({ item }) => {
          const path = (item as any)?.props?.path;
          if (path) {
            router.push(`${path}`);
          }
        }}
      />
    </ComponentWrapper>
  );
}

export default SlideMenu;
