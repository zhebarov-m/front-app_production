import { useTranslation } from 'react-i18next'
import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        try {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        } catch (error) {
            console.error('Error during language change:', error)
        }
    }

    return (
        <Button
            className={classNames('ap', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
}
