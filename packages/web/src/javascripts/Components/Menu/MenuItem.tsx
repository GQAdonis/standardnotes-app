import { forwardRef, MouseEventHandler, ReactNode, Ref } from 'react'
import Icon from '@/Components/Icon/Icon'
import Switch from '@/Components/Switch/Switch'
import { SwitchProps } from '@/Components/Switch/SwitchProps'
import { IconType } from '@standardnotes/snjs'
import { FOCUSABLE_BUT_NOT_TABBABLE } from '@/Constants/Constants'
import { MenuItemType } from './MenuItemType'
import RadioIndicator from '../Radio/RadioIndicator'
import { classNames } from '@/Utils/ConcatenateClassNames'

type MenuItemProps = {
  children: ReactNode
  type?: MenuItemType
  onClick?: MouseEventHandler<HTMLButtonElement>
  onChange?: SwitchProps['onChange']
  onBlur?: (event: { relatedTarget: EventTarget | null }) => void
  className?: string
  checked?: boolean
  icon?: IconType
  iconClassName?: string
  tabIndex?: number
  disabled?: boolean
}

const MenuItem = forwardRef(
  (
    {
      children,
      onClick,
      onChange,
      onBlur,
      className = '',
      type = MenuItemType.IconButton,
      checked,
      icon,
      iconClassName,
      tabIndex,
      disabled,
    }: MenuItemProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return type === MenuItemType.SwitchButton && typeof onChange === 'function' ? (
      <li className="list-none" role="none">
        <button
          disabled={disabled}
          ref={ref}
          className={classNames(
            'flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-3 py-1.5',
            'text-left text-text hover:bg-contrast hover:text-foreground focus:bg-info-backdrop focus:shadow-none',
          )}
          onClick={() => {
            onChange(!checked)
          }}
          onBlur={onBlur}
          tabIndex={typeof tabIndex === 'number' ? tabIndex : FOCUSABLE_BUT_NOT_TABBABLE}
          role="menuitemcheckbox"
          aria-checked={checked}
        >
          <span className="flex flex-grow items-center">{children}</span>
          <Switch disabled={disabled} className="px-0" checked={checked} />
        </button>
      </li>
    ) : (
      <li className="list-none" role="none">
        <button
          disabled={disabled}
          ref={ref}
          role={type === MenuItemType.RadioButton ? 'menuitemradio' : 'menuitem'}
          tabIndex={typeof tabIndex === 'number' ? tabIndex : FOCUSABLE_BUT_NOT_TABBABLE}
          className={classNames(
            'flex w-full cursor-pointer items-center border-0 bg-transparent px-3 py-1.5 text-left',
            'text-mobile-menu-item text-text hover:bg-contrast hover:text-foreground',
            'focus:bg-info-backdrop focus:shadow-none md:text-menu-item',
            className,
          )}
          onClick={onClick}
          onBlur={onBlur}
          {...(type === MenuItemType.RadioButton ? { 'aria-checked': checked } : {})}
        >
          {type === MenuItemType.IconButton && icon ? <Icon type={icon} className={iconClassName} /> : null}
          {type === MenuItemType.RadioButton && typeof checked === 'boolean' ? (
            <RadioIndicator disabled={disabled} checked={checked} className="flex-shrink-0" />
          ) : null}
          {children}
        </button>
      </li>
    )
  },
)

export default MenuItem
