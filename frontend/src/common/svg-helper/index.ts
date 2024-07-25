import nameLogo from '@/common/svg-helper/icons/logo-icons/name-logo.svg?react';
import lightCapLogo from '@/common/svg-helper/icons/logo-icons/light-cap-logo.svg?react';
import lightLogo from '@/common/svg-helper/icons/logo-icons/light-logo.svg?react';
import darkLogo from '@/common/svg-helper/icons/logo-icons/dark-logo.svg?react';
import search from '@/common/svg-helper/icons/search.svg?react';
import bell from '@/common/svg-helper/icons/bell.svg?react';
import create from '@/common/svg-helper/icons/create.svg?react';
import profile from '@/common/svg-helper/icons/nav-icons/profile.svg?react';
import home from '@/common/svg-helper/icons/nav-icons/home.svg?react';
import saved from '@/common/svg-helper/icons/nav-icons/saved.svg?react';
import messenger from '@/common/svg-helper/icons/nav-icons/messenger.svg?react';
import shorts from '@/common/svg-helper/icons/nav-icons/shorts.svg?react';
import qrcode from '@/common/svg-helper/icons/nav-icons/qrcode.svg?react';
import settings from '@/common/svg-helper/icons/nav-icons/settings.svg?react';
import help from '@/common/svg-helper/icons/nav-icons/help.svg?react';
import arrowLeft from '@/common/svg-helper/icons/arrow-left.svg?react';
import arrowRight from '@/common/svg-helper/icons/arrow-right.svg?react';
import arrowUp from '@/common/svg-helper/icons/arrow-up.svg?react';
import arrowDown from '@/common/svg-helper/icons/arrow-down.svg?react';
import close from '@/common/svg-helper/icons/close.svg?react';
import trash from '@/common/svg-helper/icons/trash.svg?react';
import plus from '@/common/svg-helper/icons/plus.svg?react';
import edit from '@/common/svg-helper/icons/edit.svg?react';
import post from '@/common/svg-helper/icons/post.svg?react';
import auto from '@/common/svg-helper/icons/auto.svg?react';
import like from '@/common/svg-helper/icons/like.svg?react';
import garage from '@/common/svg-helper/icons/garage.svg?react';
import comment from '@/common/svg-helper/icons/comment.svg?react';
import share from '@/common/svg-helper/icons/share.svg?react';
import more from '@/common/svg-helper/icons/more.svg?react';
import detailing from '@/common/svg-helper/icons/category-icons/detailing.svg?react';
import engine from '@/common/svg-helper/icons/category-icons/engine.svg?react';
import audio from '@/common/svg-helper/icons/category-icons/audio.svg?react';
import exhaust from '@/common/svg-helper/icons/category-icons/exhaust.svg?react';
import wheel from '@/common/svg-helper/icons/category-icons/wheel.svg?react';
import chipTuning from '@/common/svg-helper/icons/category-icons/chip-tuning.svg?react';
import light from '@/common/svg-helper/icons/category-icons/light.svg?react';
import tuning from '@/common/svg-helper/icons/category-icons/tuning.svg?react';
import other from '@/common/svg-helper/icons/category-icons/other.svg?react';
import adder from '@/common/svg-helper/icons/adder.svg?react';
import burger from '@/common/svg-helper/icons/burger.svg?react';
import subscribe from '@/common/svg-helper/icons/dropdown-icons/subscribe.svg?react';
import unsubscribe from '@/common/svg-helper/icons/dropdown-icons/unsubscribe.svg?react';
import hide from '@/common/svg-helper/icons/dropdown-icons/hide.svg?react';
import report from '@/common/svg-helper/icons/dropdown-icons/report.svg?react';
import editProfile from '@/common/svg-helper/icons/dropdown-icons/edit-profile.svg?react';
import info from '@/common/svg-helper/icons/dropdown-icons/info.svg?react';
import quit from '@/common/svg-helper/icons/dropdown-icons/quit.svg?react';
import privacy from '@/common/svg-helper/icons/privacy.svg?react';
import blockedProfile from '@/common/svg-helper/icons/blocked-profile.svg?react';
import block from '@/common/svg-helper/icons/block.svg?react';
import ublock from '@/common/svg-helper/icons/unblock.svg?react';
import view from '@/common/svg-helper/icons/view.svg?react';
import checkMark from '@/common/svg-helper/icons/check-mark.svg?react';
import fone from '@/common/svg-helper/icons/fone.svg?react';
import color from '@/common/svg-helper/icons/color.svg?react';




import createChat from '@/common/svg-helper/icons/createChat.svg?react';
import mute from '@/common/svg-helper/icons/mute.svg?react';
import pin from '@/common/svg-helper/icons/pin.svg?react';
import sent from '@/common/svg-helper/icons/sent.svg?react';
import read from '@/common/svg-helper/icons/read.svg?react';
import clip from '@/common/svg-helper/icons/clip.svg?react';
import emoticon from '@/common/svg-helper/icons/emoticon.svg?react';
import sender from '@/common/svg-helper/icons/sender.svg?react';
import answer from '@/common/svg-helper/icons/message-dropdown/answer.svg?react';
import copy from '@/common/svg-helper/icons/message-dropdown/copy.svg?react';
import editer from '@/common/svg-helper/icons/message-dropdown/editer.svg?react';
import forward from '@/common/svg-helper/icons/message-dropdown/forward.svg?react';
import pinMenu from '@/common/svg-helper/icons/message-dropdown/pin-menu.svg?react';
import call from '@/common/svg-helper/icons/chat-dropdown/call.svg?react';
import clear from '@/common/svg-helper/icons/chat-dropdown/clear.svg?react';
import image from '@/common/svg-helper/icons/chat-dropdown/image.svg?react';
import speaker from '@/common/svg-helper/icons/chat-dropdown/speaker.svg?react';



export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

// type here name of icon.
// in SvgHelper iconType prop you can see ts help with names from this union type
export type ImageComponentsTypes =
  | 'nameLogo'
  | 'lightCapLogo'
  | 'lightLogo'
  | 'darkLogo'
  | 'search'
  | 'bell'
  | 'create'
  | 'profile'
  | 'home'
  | 'saved'
  | 'messenger'
  | 'shorts'
  | 'qrcode'
  | 'settings'
  | 'help'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'arrowDown'
  | 'plus'
  | 'edit'
  | 'like'
  | 'garage'
  | 'comment'
  | 'share'
  | 'more'
  | 'close'
  | 'trash'
  | 'plus'
  | 'post'
  | 'auto'
  | 'adder'
  | 'detailing'
  | 'engine'
  | 'audio'
  | 'exhaust'
  | 'wheel'
  | 'chipTuning'
  | 'light'
  | 'tuning'
  | 'other'
  | 'burger'
  | 'subscribe'
  | 'unsubscribe'
  | 'hide'
  | 'report'
  | 'editProfile'
  | 'info'
  | 'quit'
  | 'privacy'
  | 'blockedProfile'
  | 'block'
  | 'ublock'
  | 'view'
  | 'checkMark'
  | 'fone'
  | 'color';
  | 'quit'
  | 'createChat'
  | 'mute'
  | 'pin'
  | 'read'
  | 'sent'
  | 'clip'
  | 'emoticon'
  | 'sender'
  | 'forward'
  | 'editer'
  | 'copy'
  | 'answer'
  | 'pinMenu'
  | 'speaker'
  | 'image'
  | 'clear'
  | 'call';

export const ImageComponents: Record<ImageComponentsTypes, IconType> = {
  nameLogo, 
  lightCapLogo,
  lightLogo,
  darkLogo,
  search, 
  bell,
  create,
  profile,
  home,
  saved,
  messenger,
  shorts,
  qrcode,
  settings,
  help,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowDown,
  plus,
  edit,
  like,
  garage,
  comment,
  share,
  more,
  detailing,
  engine,
  audio,
  exhaust,
  wheel,
  chipTuning,
  light,
  tuning,
  other,
  close,
  trash,
  post,
  auto,
  adder,
  burger,
  subscribe,
  unsubscribe,
  hide,
  report,
  editProfile,
  info,
  quit,
  privacy,
  blockedProfile,
  block,
  ublock,
  view,
  checkMark,
  fone,
  color,
  createChat,
  mute,
  pin,
  read,
  sent,
  clip,
  emoticon,
  sender,
  forward,
  editer,
  copy,
  answer,
  pinMenu,
  call,
  speaker,
  image,
  clear,
};
