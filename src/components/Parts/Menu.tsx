import { FormattedMessage } from "react-intl";
import * as React from "react";
import { Flex } from "../Primitives/Flex";
import { Button } from "../Primitives/Button";
import { styled } from "../../../stitches.config";

export const MenuButtons = styled(Flex, {
  gap: "$3",
  mt: "$4",
  textTransform: "capitalize",
  flexDirection: "row",
  overflowX: "auto",
  zIndex: 1000,
  "&::::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none" /* IE and Edge */,
  "scrollbar-width": "none" /* Firefox */,
  "@bp2": { flexDirection: "row", alignItems: "center", gap: "$2" },
});

interface MenuButtonProps {
  isActive: boolean;
  tag: string;
  clickCallback: (event: React.MouseEvent<HTMLElement>) => void;
}
export const MenuButton: React.FC<MenuButtonProps> = ({
  isActive,
  tag,
  clickCallback,
}) => {
  return (
    <Button
      variant={isActive ? "secondary" : "main"}
      size={{ "@initial": "4", "@bp1": "3" }}
      onClick={clickCallback}
    >
      <FormattedMessage id={tag} defaultMessage={tag} />
    </Button>
  );
};
