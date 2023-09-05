import { FC } from 'react';
import { HeaderItemGroup } from './HeaderItemGroup';
import { User, Session } from 'Domain/Entity';

type Props = {
    user: User;
    session: Session;
    onLogout: () => {};
};

export const HeaderMobileItemGroup: FC<Props> = ({
    session,
    user,
    onLogout,
}) => {
    return <HeaderItemGroup session={session} />;
};
