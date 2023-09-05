import { FC } from 'react';
import { Button, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { User, Session } from 'Domain/Entity';
import styles from './Header.module.css';

type Props = {
    session: Session | null;
};

export const HeaderItemGroup: FC<Props> = ({ session }) => {
    const navDropdownOrLoginButton = () => {
        if (session) {
            return (
                <>
                    <NavDropdown
                        align='end'
                        title={
                            <FA
                                icon={faUserCircle}
                                style={{ fontSize: 30 }}
                                className='text-indigo mt-2'
                            />
                        }
                    >
                        <Link href='/home'>
                            <Nav.Link>
                                {session.user.avatar ? (
                                    <Image
                                        src={session.user.avatar}
                                        alt='アバター'
                                        width={32}
                                        height={32}
                                        className='rounded-circle'
                                        loading='lazy'
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                ) : (
                                    <FA
                                        icon={faUserCircle}
                                        style={{ fontSize: 30 }}
                                        className='text-indigo mt-2'
                                    />
                                )}
                                <span className='fw-bold ms-2'>user.name</span>
                                <div
                                    className='text-gray overflow-hidden'
                                    style={{
                                        textOverflow: 'ellipsis',
                                        maxWidth: '150px',
                                    }}
                                >
                                    {session.user.email}
                                </div>
                            </Nav.Link>
                        </Link>
                        <Link
                            href='/home'
                            className='text-indigo d-block ps-3 py-2 border-bottom dropdown-item'
                        >
                            マイページ
                        </Link>
                        <Link
                            href='/home/account'
                            className='text-indigo d-block ps-3 py-2 border-bottom dropdown-item'
                        >
                            アカウント設定
                        </Link>
                        <a
                            // onClick={onLogout}
                            className='text-muted d-block ps-3 py-2 dropdown-item'
                        >
                            ログアウト
                        </a>
                    </NavDropdown>
                </>
            );
        }
        return (
            <div>
                <Link href={{ pathname: '/signin' }}>
                    <Button>ログイン</Button>
                </Link>
                <Link href={{ pathname: '/signup' }}>
                    <Button>新規会員登録</Button>
                </Link>
            </div>
        );
    };

    return (
        <Container>
            <Navbar>
                <Link href=''>
                    <Navbar.Brand as='a' style={{ width: 152 }}>
                        <Image
                            src='/images/logo.png'
                            alt='独学の森'
                            width={140}
                            height={20}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                {session === null ? (
                    <></>
                ) : (
                    <Navbar.Collapse>
                        <Nav className='ms-auto'>
                            {navDropdownOrLoginButton()}
                        </Nav>
                    </Navbar.Collapse>
                )}
            </Navbar>
        </Container>
    );
};
