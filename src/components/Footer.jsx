import React from 'react';
import { externalLinks as link } from '../utils/content';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; Маршак, 2020.</p>
      <p className="footer__develop">Сделано студентами <a className="footer__link" target="_blank"
        href={link.yandex}>Яндекс.Практикум</a></p>
    </footer>
  )
}

export default Footer;