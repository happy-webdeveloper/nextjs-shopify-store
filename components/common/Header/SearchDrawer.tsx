import React from "react";
import { Drawer } from "@material-ui/core";
import { searchIcon, closeIcon } from "components/utils/Icon";
import { SearchBox } from "components/common/SeachBox";

const SearchDrawer = () => {
  const [isOpened, setIsOpened] = React.useState(false);

  const toggleDrawer =
    (isOpened: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpened(isOpened);
    };

  return (
    <>
      <button
        className="search__icon  inline-block p-2 rounded-sm text-gray-700"
        onClick={toggleDrawer(true)}
      >
        {searchIcon}
      </button>
      <Drawer
        className="search__drawer"
        anchor="top"
        open={isOpened}
        onClose={toggleDrawer(false)}
      >
        <div className="search__container container flex justify-center items-center py-4 text-center">
          <div className="search__wrapper flex-grow max-w-screen-md relative">
            <SearchBox />
          </div>
          <button
            className="drawer__close inline-block p-2"
            onClick={toggleDrawer(false)}
          >
            {closeIcon}
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
