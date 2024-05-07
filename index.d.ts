/// <reference types="react" />

type Component<TProps> = (props: TProps) => JSX.Element;

interface ActionCardProps {
  className?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  description?: string;
}

type AlertType = "success" | "info" | "warning" | "danger" | "wait" | "loader";

type AlertSize = "x-small" | "small" | "large";

interface AlertProps {
  type?: AlertType;
  size?: AlertSize;
  isInline?: boolean;
  withBackground?: boolean;
  withCurrentColor?: boolean;
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

interface AutocompleteProps {
  initialValue?: string;
  inputRef?: any;
  items?: string[];
  label: string;
  maximum?: number;
  onBlur?: React.FocusEvent<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: React.FocusEvent<HTMLInputElement>;
  onKeyUp?: React.KeyboardEvent<HTMLInputElement>;
  onKeyDown?: React.KeyboardEvent<HTMLInputElement>;
  onSelect?: (value: string) => void;
  renderInput?: (
    getInputProps: (userProps?: any) => React.HTMLAttributes<HTMLInputElement>
  ) => React.ReactNode;
  shouldOpen?: (value: string) => boolean;
}

interface AutocompleteContainerProps extends Partial<DropdownProps> {
  children: React.ReactNode;
  open?: boolean;
  className?: string;
}

interface AutocompleteInputProps extends FormFieldProps {
  children: React.ReactNode;
}

interface AutocompleteListProps {
  children: React.ReactNode;
  className?: string;
}

interface AutocompleteItemProps {
  children: React.ReactNode;
  selected?: boolean;
  className?: string;
}

interface AvatarProps {
  className?: string;
  name?: string;
  src?: string;
  alt?: string;
}

interface BaseChartDataProps {
  labels: string[];
  datasets: { backgroundColor?: string; data: number[] }[];
}

interface BaseChartProps {
  data?: BaseChartDataProps;
  options?: any;
  plugins?: any[];
  type?: string;
  scrollOnMobile?: boolean;
  mobileResolution?: number;
  className?: string;
  renderTooltipContainer?: any;
  width?: number;
  height?: number;
}

type ButtonSize = "small" | "x-small" | "100pct-mobile";

type ButtonAppearance =
  | "alt"
  | "alt-negative"
  | "link"
  | "link-negative"
  | Array<string>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  size?: ButtonSize;
  active?: boolean;
  disabled?: boolean;
  appearance?: ButtonAppearance;
  mobileView?: boolean;
  onClick?: () => void;
  theme?: any;
  href?: string;
  icon?: React.ReactNode;
  iconAlign?: "left" | "right";
  [key: string]: any;
}

interface CalendarProps {
  onChange?: (selected: Date | Date[]) => void;
  range?: boolean;
  locale?: string;
  minDate?: Date;
  maxDate?: Date;
  defaultSelected?: Date | Date[];
  selected?: Date | Date[];
  className?: string;
  weekDaysLabels?: Array<string>;
}

interface CardboardProps {
  title?: React.ReactNode;
  footer?: React.ReactNode;
  footerAlign?: "center" | "right";
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  containerClassName?: string;
  titleClassName?: string;
  highlight?: boolean | "top";
  removeContainerPadding?: boolean;
  beforeContainer?: React.ReactNode;
  titleAppearance?: number;
  clip?: boolean;
  ref?: any;
}

interface ChartCaptionProps {
  className?: string;
  children: React.ReactNode;
  isBottomPosition?: boolean;
}

interface ChartCaptionItemProps {
  className?: string;
  children: React.ReactNode;
  support?: string;
  color: string;
  upperPlaceholder?: React.ReactNode;
}

interface ChartTooltipData {
  label: React.ReactNode;
  color: string;
  value: React.ReactNode;
}

interface ChartTooltipProps {
  className?: string;
  data?: ChartTooltipData[];
}

interface CoachMarkStep {
  title:
    | string
    | {
        id: string;
        label: string;
      };
  complementaryText?:
    | string
    | {
        id: string;
        label: string;
      };
  selector?: string;
  position?: any;
  breakpoints?: {
    media: any;
    selector: string;
    position: any;
  }[];
}

interface StepChangeHandler {
  currentStep: any;
  nextStepToShow: any;
  changeStep: () => void;
}

interface CoachMarkProps {
  selector?: string;
  open?: boolean;
  steps: CoachMarkStep[];
  initialStep?: number;
  closeOnOutsideClick?: boolean;
  closeLabel?: string;
  closeHandler?: (currentStep: any, close: () => void) => void;
  changeStepHandler?: (props: StepChangeHandler) => void;
  prevStepHandler?: (props: StepChangeHandler) => void;
  nextStepHandler?: (props: StepChangeHandler) => void;
  className?: string;
}

interface CollapseProps {
  className?: string;
  children: React.ReactNode;
  invert?: boolean;
  openedLabel?: React.ReactNode;
  closedLabel: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  displayContentsFromMediumScreen?: boolean;
}

interface CopyableFieldProps {
  value: string;
  triggerText?: string;
  alertSuccessMessage?: string;
  alertFailMessage?: string;
  className?: string;
}

interface DropdownCalendarProps {
  onChange?: (selected: Date | Date[]) => void;
  placeholder?: string;
  calendarProps?: Partial<CalendarProps>;
  dropdownProps?: Partial<DropdownProps>;
  dateFormatter?: Intl.DateTimeFormat;
  formatDate?: (date: Date | Date[]) => string;
  dateSeparator?: string;
  closeOnChange?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

type DropwdownAppearance = "error" | "warning" | "success";

interface DropdownProps {
  loading?: boolean;
  disabled?: boolean;
  appearance?: DropwdownAppearance;
  label: React.ReactNode;
  filter?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  containerNoPadding?: boolean;
  children: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  noIcon?: boolean;
  allowLabelClick?: boolean;
  nonFocusable?: boolean;
  open?: boolean;
  controlled?: boolean;
  noShadow?: boolean;
}

interface RetryHandler {
  retries?: number;
  maxRetries?: number;
}

interface ActionRetry {
  maxRetries: number;
  onRetry: () => void;
  retries: number;
}

interface EmptyStateMaxRetriesProps {
  action?: (props?: ActionRetry) => void;
  retry: (props?: RetryHandler) => void;
  retries?: number;
  maxRetries?: number;
  primaryMessage?: React.ReactNode;
  secondaryMessage?: React.ReactNode;
}

interface EmptyStateProps {
  description: string;
  title?: string;
  image?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

interface FeaturedCardProps {
  title?: React.ReactNode;
  image?: React.ReactNode;
  list?: string[];
  actions?: React.ReactNode;
  text?: string;
  stacked?: boolean;
  className?: string;
}

interface FooterProps {
  children?: React.ReactNode;
  currentYear?: number;
  theme?: any;
  className?: string;
  logo?: React.ReactNode;
}

interface FooterAsideProps {
  className?: string;
  children?: React.ReactNode;
}

interface FooterContainerProps {
  className?: string;
  children: React.ReactNode;
}

interface FooterGridProps {
  className?: string;
  children: React.ReactNode;
}

interface FooterHelpProps {
  href?: string;
  className?: string;
}

interface FooterListedLinkProps {
  linkName?: string;
  href?: string;
  className?: string;
  linkProps?: any;
}

interface FooterNavItemProps {
  collapseNavigation?: boolean;
  itemName?: string;
  itemClassName?: string;
  navigationClassName?: string;
  children?: React.ReactNode;
}

interface FooterNavListProps {
  className?: string;
  children: React.ReactNode;
}

interface FooterSocialProps {
  className?: string;
  children?: React.ReactNode;
}

type FooterSocialType =
  | "Blog"
  | "Facebook"
  | "Instagram"
  | "Linkedin"
  | "Youtube";

interface FooterSocialItemProps {
  type?: FooterSocialType;
  title?: string;
  href?: string;
  linkProps?: any;
}

interface FormCheckProps {
  className?: string;
  labelClassName?: string;
  label?: React.ReactNode;
  children: React.ReactElement;
  guideText?: string;
}

type FormFieldAppearance = "error" | "warning" | "success";

interface FormFieldProps {
  loading?: boolean;
  className?: string;
  label?: any;
  appearance?: FormFieldAppearance;
  underline?: boolean;
  noBorder?: boolean;
  noLabel?: boolean;
  guideText?: HTMLElement | React.FC | React.ReactNode;
  inputLength?: number;
  inputMaxLength?: number;
  prefix?: HTMLElement | React.FC | React.ReactNode;
  suffix?: HTMLElement | React.FC | React.ReactNode;
  action?: HTMLElement | React.FC | React.ReactNode;
  children: HTMLElement | React.FC | React.ReactNode;
}

interface HashMatchListenerProps {
  children: any;
  matches: any;
  reverseMatch?: boolean;
}

interface HeaderMenuProps {
  theme?: any;
  className?: string;
}

interface HeaderUserMenuProps {
  email?: string;
  name?: string;
  children?: React.ReactNode;
  className?: string;
  theme?: any;
}

interface HeaderProps {
  subtitle?: string;
  logoHref?: string;
  menuToggleElement?: HTMLElement | React.ReactNode;
  className?: string;
  theme?: any;
  children?: React.ReactNode;
}

interface HeroMessageProps {
  image?: React.ReactNode;
  title: string;
  footer?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

type IconButtonSize = "default" | "large" | "x-large" | "xx-large";

interface IconButtonProps {
  active?: boolean;
  noBorder?: boolean;
  noBackground?: boolean;
  transparent?: boolean;
  rounded?: boolean;
  icon?: React.ReactNode;
  ariaLabel: string;
  size?: IconButtonSize;
  className?: string;
}

interface IconButtonGroupProps {
  children?: React.ReactNode;
  className?: string;
}

interface IconButtonTooltipProps {
  ariaLabel?: string;
  icon?: React.ReactNode;
  largeScreenEnlarge?: boolean;
  className?: string;
  iconButtonClassName?: string;
  iconButtonActive?: boolean;
  iconButtonNoBorder?: boolean;
  iconButtonNoBackground?: boolean;
  iconButtonRounded?: boolean;
  iconButtonSize?: IconButtonSize;
  iconButtonTransparent?: boolean;
  iconButtonTrigger?: React.ReactNode;
  tooltipContainerClassName?: string;
  children?: React.ReactNode;
  mobileLeft?: boolean;
}

type SocialMedia =
  | "email"
  | "facebook"
  | "instagram"
  | "messenger"
  | "whatsapp"
  | "youtube";

interface IconButtonSocialMediaProps {
  socialMedia?: SocialMedia;
  active?: boolean;
  noBorder?: boolean;
  noBackground?: boolean;
  transparent?: boolean;
  rounded?: boolean;
  ariaLabel: string;
  className?: string;
}

type ColorIlineBadge =
  | "light"
  | "dark"
  | "success"
  | "error"
  | "warning"
  | "new"
  | "promotion";

interface InlineBadgeProps {
  className?: string;
  color: ColorIlineBadge;
}

interface InternalTableContainerColumns<T> {
  label: string;
  id?: string;
  render?: (props?: any) => React.ReactNode | Element;
}

interface InternalTableContainerProps {
  columns: InternalTableContainerColumns<any>[];
  className?: string;
  data: any[];
  collapsible?: boolean;
  stack?: boolean;
  rowClass?: string;
  renderHeader?: () => any;
  middleAlign?: boolean;
}

interface InternalTableProps {
  className?: string;
  striped?: boolean;
  leftAlign?: boolean;
  children?: React.ReactNode;
  collapsible?: boolean;
  columnAutoWidth?: boolean;
}

interface InternalTableCellProps {
  className?: string;
  role?: "cell" | "columnheader";
  nopadding?: boolean;
  bold?: boolean;
  smallText?: boolean;
  withImage?: boolean;
  children?: React.ReactNode;
  collapsible?: boolean;
  onCollapse?: React.MouseEventHandler;
  right?: boolean;
  left?: boolean;
  center?: boolean;
}

interface InternalTableRowProps {
  className?: string;
  middleAlign?: boolean;
  stack?: boolean;
  nopadding?: boolean;
  collapsible?: boolean;
  children?: React.ReactNode;
}

interface InternalTableBodyProps {
  children?: React.ReactNode;
}

interface InternalTableHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

interface KeyValueProps {
  className?: string;
  inline?: boolean;
  list?: boolean;
  table?: boolean;
  children?: React.ReactNode;
}

interface KeyValueItemProps {
  title?: React.ReactNode;
  className?: string;
  row?: boolean;
  children: React.ReactNode;
}

interface LastUpdateProps {
  time?: Date;
  loading?: boolean;
}

interface LayoutProps {
  className?: string;
  classNameMain?: string;
  classNameContainer?: string;
  classNameAside?: string;
  classNameContent?: string;
  children: React.ReactNode;
  theme?: any;
  aside?: React.ReactNode;
  titleBar?: string;
  withContentWrapper?: boolean;
  renderHeader?: (item?: any) => React.ReactNode | Element;
  renderFooter?: (item?: any) => React.ReactNode | Element;
}

interface ListDetailedProps {
  className?: string;
  children?: React.ReactNode;
}

interface ListDetailedItemProps {
  className?: string;
  children?: React.ReactNode;
  classNameTitle?: string;
  classNameDescription?: string;
  border?: boolean;
  titleUppercase?: boolean;
  title?: React.ReactNode;
}

interface ListSimpleProps {
  className?: string;
  children?: React.ReactNode;
  right?: boolean;
  left?: boolean;
  center?: boolean;
}

interface ListSimpleItemProps {
  className?: string;
  children?: React.ReactNode;
}

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  condensed?: boolean;
  expanded?: boolean;
  disc?: boolean;
}

interface ListItemProps {
  className?: string;
  children?: React.ReactNode;
  avatar?: React.ReactNode;
  icon?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  href?: string;
  condensed?: boolean;
  expanded?: boolean;
  clickable?: boolean;
  alignItems?: "flex-start";
  itemProps?: any;
  highlight?: boolean;
}

interface ListItemIconProps {
  className?: string;
  children?: React.ReactNode;
}

interface ListItemAvatarProps {
  className?: string;
  children?: React.ReactNode;
}

interface ListItemTextProps {
  className?: string;
  children?: React.ReactNode;
  overline?: React.ReactNode;
  overlineProps?: any;
  primary?: React.ReactNode;
  primaryProps?: any;
  primaryUppercase?: boolean;
  primaryBold?: boolean;
  primaryActive?: boolean;
  secondary?: React.ReactNode;
  secondaryProps?: any;
  complementary?: React.ReactNode;
  complementaryProps?: any;
}

interface ListAfterTextAreaProps {
  className?: string;
  children?: React.ReactNode;
}

interface ListSecondaryActionProps {
  className?: string;
  children?: React.ReactNode;
}

interface LoadingPlaceholderProps {
  loading: boolean;
  children: () => React.ReactNode;
  renderPlaceholder: () => React.ReactNode;
}

interface MenuToggleProps {
  openTitle?: string;
  closeTitle?: string;
  theme?: any;
  className?: string;
}

interface MenuData {
  id: string;
  label: string;
  iconSVG: React.ReactNode;
  href?: string;
  children?: any[];
}

interface MenuProps {
  aboveMenuArea?: React.ReactNode;
  activeId?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
  className?: string;
  getClasses?: () => string;
  isActive?: (id: string) => boolean;
  menu: MenuData[];
}

interface ModalPortalProps {
  selector?: string;
  children: React.ReactNode;
}

interface ModalProps {
  open?: boolean;
  children: React.ReactNode;
  title?: React.ReactNode;
  closeButton?: boolean;
  closeLabel?: string;
  closeOnOutsideClick?: boolean;
  closeHandler?: () => void;
  boxClassName?: string;
  className?: string;
}

type MultiSelectAppearance = "error" | "warning" | "success";

interface MultiSelectContentProps {
  zero: () => string;
  one: () => string;
  many: (n: number) => string;
  all: () => string;
}

interface MultiSelectOptionProps {
  label: string;
  value: string;
  checked?: boolean;
  badges?: { color: string; text: string }[];
  additionalFilters?: string[];
  uolAudienceEvent?: string;
}

interface MultiSelectProps {
  appearance?: MultiSelectAppearance;
  name: string;
  label?: string;
  filter?: string;
  className?: string;
  onChange?: (selected: string[], state: MultiSelectOptionProps[]) => any;
  content?: MultiSelectContentProps;
  options: MultiSelectOptionProps[];
  uolAudienceEventSelectAll?: string;
  clearSearchIconTitle?: string;
  searchIconTitle?: string;
  searchResetFilter?: boolean;
  loading?: boolean;
  disabled?: boolean;
  open?: boolean;
  onClick?: (e) => void;
  controlled?: boolean;
  ref?: any;
}

interface NavInlineProps {
  className?: string;
  children?: React.ReactNode;
}

interface NavInlineItemProps {
  active?: boolean;
  className?: string;
  theme?: any;
}

interface NavInlineSubProps {
  className?: string;
  children?: React.ReactNode;
  item?: React.ReactNode;
  triggerType?: "click" | "hover";
}

interface NavInlineSubItemProps {
  className?: string;
  children?: React.ReactNode;
}

interface MessagesNotifications {
  id: number;
  unread: boolean;
  title: string;
  message: React.ReactNode;
  link?: {
    url: string;
    text: string;
  };
}

interface NotificationsProps {
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  messages?: MessagesNotifications[];
  onOpen?: () => void;
  onClose?: () => void;
  theme?: any;
}

interface NumberBlockProps {
  className?: string;
  value?: number;
  format?: boolean;
  formatter?: any;
  currency?: boolean | string;
  inline?: boolean;
  appearance?: "bold" | "gray-40";
  size?: "small";
}

interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onChange: (selected: number) => void;
  totalItems?: number;
  totalItemsText?: string | { singular: string; plural: string };
}

interface PortalsProps {
  selector?: string;
  children: React.ReactNode;
}

interface ProgressBarProps {
  className?: string;
  square?: boolean;
  size?: "small" | "large";
  value: number;
  max: number;
}

interface ReleaseProps {
  weekDay?: string;
  day?: number;
  month?: string;
  value?: number;
  status?: string;
  active?: boolean;
  className?: string;
  theme?: any;
}

interface SecretBoxProps {
  className?: string;
  feedback?: "error" | "warning";
  hideFeedback?: "onChange" | "onComplete";
  boxes?: any;
  hint?: string;
  otp?: boolean;
  autoFocus?: boolean;
  onChange?: (code: any) => void;
  onComplete?: (code: any) => void;
  inputLabel?: "Campo" | "Field";
  hideNumbersLabel?: "Ocultar números" | "Hide numbers";
  showNumbersLabel?: "Mostrar números" | "Show numbers";
  type?: "code" | "password";
}

interface CloseHandler {
  close: () => void;
}

interface SideSheetProps {
  selector?: string;
  open?: boolean;
  closeButton?: boolean;
  closeLabel?: string;
  closeOnOutsideClick?: boolean;
  closeHandler?: (props: CloseHandler) => void;
  actions?: React.ReactNode;
  title?: string | { id: string; label: string };
  complementaryText?: string | { id: string; label: string };
  children?: React.ReactNode;
  className?: string;
}

interface SkeletonLineProps {
  className?: string;
  size?: "thin";
}

interface SkipToContentProps {
  buttons?: { href: string; label: string; hideMobile: boolean }[];
  className?: string;
  children?: React.ReactNode;
  theme?: any;
}

interface SliderFreeProps {
  className?: string;
  step?: number;
  initialOffset?: number;
  relayoutDelay?: number;
  nav?: boolean;
  slideLeftCallback?: any;
  slideRightCallback?: any;
  frameNoPadding?: boolean;
  frameHideShadowLeft?: boolean;
  frameHideShadowRight?: boolean;
  theme?: any;
  children: React.ReactNode;
}

interface StampCardProps {
  text: string;
  href?: string;
  onClick?: any;
  inlineBadge?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

interface StatusTrackingData {
  date: string;
  statusName: string;
  status: string;
  legend?: () => any | React.ReactNode;
}

interface StatusTrackingProps {
  className?: string;
  children?: React.ReactNode;
  data?: StatusTrackingData[];
  stack?: boolean;
}

type StatusStep = "success" | "pending" | "warning" | "error" | "active";

interface StatusTrackingStepProps {
  children: React.ReactNode;
  status?: StatusStep;
}

interface SwitchProps {
  id: string;
  activeLabel?: string;
  inactiveLabel?: string;
  checked?: boolean;
  onChange?: (checked: boolean, disabled: boolean) => void;
  className?: string;
  name?: string;
  disabled?: boolean;
  inputProps?: object;
}

interface TabsProps {
  className?: string;
  children?: React.ReactNode;
  onChange?: any;
  align?: "left" | "right";
  mobileScroll?: boolean;
}

type TitleNumbers = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps {
  className?: string;
  level?: TitleNumbers;
  appearance?: boolean | TitleNumbers;
}

interface TooltipProps {
  clickable?: React.ReactNode;
  trigger: React.ReactNode;
  triggerType?: "hover" | "click";
  info?: boolean;
  containerClassName?: string;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
  children?: React.ReactNode;
  position?:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right"
    | "left-center"
    | "right-center";
}

interface UserInfoAvatarProps {
  className?: string;
  name: string;
  email: string;
  image?: string;
}

interface UserInfoProps {
  className?: string;
  name: string;
  email: string;
}

declare module "ps-react-bootstrap-wrapper" {
  export const ActionCard: Component<ActionCardProps>;
  export const Alert: Component<AlertProps>;
  export const Autocomplete: Component<AutocompleteProps> & {
    Container: Component<AutocompleteContainerProps>;
    Input: Component<AutocompleteInputProps>;
    List: Component<AutocompleteListProps>;
    Item: Component<AutocompleteItemProps>;
  };
  export const Avatar: Component<AvatarProps>;
  export const BaseChart: Component<BaseChartProps>;
  export const Button: Component<ButtonProps> & {
    Grouper: Component<any>;
  };
  export const Calendar: Component<CalendarProps>;
  export const Cardboard: Component<CardboardProps>;
  export const ChartCaption: Component<ChartCaptionProps> & {
    Item: Component<ChartCaptionItemProps>;
  };
  export const ChartTooltip: Component<ChartTooltipProps>;
  export const CoachMark: Component<CoachMarkProps>;
  export const Collapse: Component<CollapseProps>;
  export const CopyableField: Component<CopyableFieldProps>;
  export const DropdownCalendar: Component<DropdownCalendarProps>;
  export const Dropdown: Component<DropdownProps>;
  export const EmptyStateMaxRetries: Component<EmptyStateMaxRetriesProps>;
  export const EmptyState: Component<EmptyStateProps>;
  export const FeaturedCard: Component<FeaturedCardProps>;
  export const Footer: Component<FooterProps>;
  export const FooterAside: Component<FooterAsideProps>;
  export const FooterContainer: Component<FooterContainerProps>;
  export const FooterGrid: Component<FooterGridProps>;
  export const FooterHelp: Component<FooterHelpProps>;
  export const FooterListedLink: Component<FooterListedLinkProps>;
  export const FooterNavItem: Component<FooterNavItemProps>;
  export const FooterNavList: Component<FooterNavListProps>;
  export const FooterPCI: Component<any>;
  export const FooterSocial: Component<FooterSocialProps>;
  export const FooterSocialItem: Component<FooterSocialItemProps>;
  export const FormCheck: Component<FormCheckProps>;
  export const FormField: Component<FormFieldProps>;
  export const HashMatchListener: Component<HashMatchListenerProps>;
  export const HeaderMenu: Component<HeaderMenuProps>;
  export const HeaderUserMenu: Component<HeaderUserMenuProps>;
  export const Header: Component<HeaderProps>;
  export const HeroMessage: Component<HeroMessageProps>;
  export const IconButton: Component<IconButtonProps>;
  export const IconButtonGroup: Component<IconButtonGroupProps>;
  export const IconButtonTooltip: Component<IconButtonTooltipProps>;
  export const IconButtonInfoTooltip: Component<any>;
  export const IconButtonMenu: Component<any>;
  export const IconButtonSocialMedia: Component<IconButtonSocialMediaProps>;
  export const InlineBadge: Component<InlineBadgeProps>;
  export const InternalTableContainer: Component<InternalTableContainerProps>;
  export const InternalTable: Component<InternalTableProps> & {
    Cell: Component<InternalTableCellProps>;
    Row: Component<InternalTableRowProps>;
    Body: Component<InternalTableBodyProps>;
    Header: Component<InternalTableHeaderProps>;
  };
  export const KeyValue: Component<KeyValueProps> & {
    Item: Component<KeyValueItemProps>;
  };
  export const LastUpdate: Component<LastUpdateProps>;
  export const Layout: Component<LayoutProps>;
  export const ListDetailed: Component<ListDetailedProps>;
  export const ListDetailedItem: Component<ListDetailedItemProps>;
  export const ListSimple: Component<ListSimpleProps>;
  export const ListSimpleItem: Component<ListSimpleItemProps>;
  export const List: Component<ListProps> & {
    Item: Component<ListItemProps>;
    ItemIcon: Component<ListItemIconProps>;
    ItemAvatar: Component<ListItemAvatarProps>;
    ItemText: Component<ListItemTextProps>;
    AfterTextArea: Component<ListAfterTextAreaProps>;
    SecondaryAction: Component<ListSecondaryActionProps>;
  };
  export const LoadingPlaceholder: Component<LoadingPlaceholderProps>;
  export const MenuToggle: Component<MenuToggleProps>;
  export const Menu: Component<MenuProps>;
  export const ModalPortal: Component<ModalPortalProps>;
  export const Modal: Component<ModalProps>;
  export const MultiSelect: Component<MultiSelectProps>;
  export const NavInline: Component<NavInlineProps>;
  export const NavInlineItem: Component<NavInlineItemProps>;
  export const NavInlineSub: Component<NavInlineSubProps>;
  export const NavInlineSubItem: Component<NavInlineSubItemProps>;
  export const Notifications: Component<NotificationsProps>;
  export const NumberBlock: Component<NumberBlockProps>;
  export const Pagination: Component<PaginationProps>;
  export const Portals: Component<PortalsProps>;
  export const ProgressBar: Component<ProgressBarProps>;
  export const Release: Component<ReleaseProps>;
  export const SecretBox: Component<SecretBoxProps>;
  export const SideSheet: Component<SideSheetProps>;
  export const SkeletonCircle: Component<any>;
  export const SkeletonLine: Component<SkeletonLineProps>;
  export const SkeletonListItem: Component<any>;
  export const SkeletonMedia: Component<any>;
  export const SkeletonMenu: Component<any>;
  export const SkeletonSquare: Component<any>;
  export const SkipToContent: Component<SkipToContentProps>;
  export const SliderFree: Component<SliderFreeProps>;
  export const StampCard: Component<StampCardProps>;
  export const StatusTracking: Component<StatusTrackingProps> & {
    Step: Component<StatusTrackingStepProps>;
  };
  export const Switch: Component<SwitchProps>;
  export const Tabs: Component<TabsProps>;
  export const Title: Component<TitleProps>;
  export const Tooltip: Component<TooltipProps>;
  export const UserInfoAvatar: Component<UserInfoAvatarProps>;
  export const UserInfo: Component<UserInfoProps>;
}
