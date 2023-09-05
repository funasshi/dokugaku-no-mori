import React, { FC, HTMLProps } from 'react';
import { HeaderItemGroup, HeaderMobileItemGroup } from '.';

export const Header: FC<HTMLProps<HTMLElement>> = props => {
    return (
        <header>
            <HeaderItemGroup session={null} />
            {/* <HeaderMobileItemGroup /> */}
        </header>
    );
};
