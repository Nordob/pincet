import './index.sass';
import './index.pug';
import initMenu from './menu/index'
import initPincet from './pincet/index'
import initPopup from './popup/index'
import initContact from './contact/index'

export default function () {
  initMenu()
  initPincet()
  initPopup()
  initContact()

}
