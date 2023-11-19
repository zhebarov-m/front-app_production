import {classNames} from "shared/lib/classNames/classNames";
import styles from './AppLink.module.scss'
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props

    return (
        <Link
            to={to}

            className={classNames(styles.AppLink, {theme}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};