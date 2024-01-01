import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FormattedMessage, getAllLocales, getLocale, setLocale } from 'umi';
import logo from '../assets/logo.png';
import join_bg from '../assets/join_bg.png';
import join_bg_h5 from '../assets/join_bg_h5.png';
import banner_right from '../assets/banner_right.svg';
import rowOne from '../assets/rowOne.svg';
import rowTwo from '../assets/rowTwo.svg';
import rowThree from '../assets/rowThree.svg';
import link1 from '../assets/link1.svg';
import link2 from '../assets/link2.svg';
import link3 from '../assets/link3.svg';
import globeIcon from '../assets/globe.svg';
import globeH5Icon from '../assets/globe-h5.svg';
import globeSmallIcon from '../assets/globe-small-h5.svg';
import expand_open from '../assets/expand_open.svg';
import expand_close from '../assets/expand_close.svg';
import Frame1Icon from '../assets/Frame1.svg';
import Frame2Icon from '../assets/Frame2.svg';
import styles from './BasicLayout.less';
import InfoDialog from '@/components/InfoDialog';

const BasicLayout = (props) => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
    login,
  } = props;

  const [expand, setExpand] = useState(false)
  const [showLanguage, setShowLanguage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);
  const [mainnetInfoH5, setMainnetInfoH5] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showLanguagePanel = (isShow) => {
    setShowLanguage(isShow);
  };
  const changeLocale = (locale) => {
    setLocale(locale, false);
    setExpand(false)
    setIsLanguage(false)
  };

  return (
    <>
      {/* header banner style={{ backgroundImage: `url(${banner_bg})` }} */}
      <div className={styles.banner_main} >

        {/* ${isVisible ? styles.visibleClass : ''} */}
        {/* header   */}
        <div className={`${styles.header_main} ${mainnetInfoH5 ? styles.mainnetInfoH5Class : ''}`}>
          <div className={styles.navs_main}>
            <div className={styles.navs_left}>
              <img src={logo} />
              <div className={styles.h2}>shibchain</div>
            </div>
            <div className={styles.navs_right}>
              <a href='https://etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce' target="_blank" ><FormattedMessage id="home.nav.Token" /></a>
              <a href='https://bridge.shibchain.io/' target="_blank" ><FormattedMessage id="home.nav.Bridge" /></a>
              <a href='https://explorer.shibchain.io/' target="_blank" ><FormattedMessage id="home.nav.Explorer" /></a>
              <a href='https://linktr.ee/shibchainl2' target="_blank" className={styles.Community} ><FormattedMessage id="home.nav.Community" /></a>
              <div className={styles.language}
                onMouseEnter={() => showLanguagePanel(true)}
                onMouseLeave={() => showLanguagePanel(false)}>
                <img src={globeIcon} />
                {showLanguage && (
                  <div className={styles.panelBox}>
                    <ul>
                      <li onClick={() => changeLocale('en-US')}>English</li>
                      <li onClick={() => changeLocale('ja-JP')}>日本語</li>
                      <li onClick={() => changeLocale('tr-TR')}>Türkçe</li>
                      <li onClick={() => changeLocale('hi-IN')}>हिंदी</li>
                      <li onClick={() => changeLocale('zh-CN')}>中文</li>
                      <li onClick={() => changeLocale('ko-KR')}>한국어</li>
                      <li onClick={() => changeLocale('ar-SA')}>العربية</li>
                      <li onClick={() => changeLocale('fa-IR')}>فارسی</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.navs_right_h5}>
              {!expand && !mainnetInfoH5 && <img src={expand_open} onClick={() => setExpand(!expand)} />}
              {(expand || mainnetInfoH5) && <img src={expand_close} onClick={() => {
                setExpand(false)
                setIsLanguage(false)
                setMainnetInfoH5(false)
              }} />}
            </div>
          </div>
          {expand && <div className={styles.navs_menu_h5}>
            {
              !isLanguage ? (
                <>
                  <a href='https://etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce' target="_blank" >Token</a>
                  <a href='https://bridge.shibchain.io/' target="_blank" ><FormattedMessage id="home.nav.Bridge" /></a>
                  <a href='https://explorer.shibchain.io/' target="_blank" ><FormattedMessage id="home.nav.Explorer" /></a>
                  <a href='https://linktr.ee/shibchainl2' target="_blank" ><FormattedMessage id="home.nav.Community" /></a>
                  <div className={styles.languages} onClick={() => setIsLanguage(true)}>
                    <img src={globeH5Icon} />
                  </div>
                </>
              ) : (
                <div className={styles.languageList}>
                  <img src={globeSmallIcon} />
                  <ul>
                    <li onClick={() => changeLocale('en-US')}>English</li>
                    <li onClick={() => changeLocale('ja-JP')}>日本語</li>
                    <li onClick={() => changeLocale('tr-TR')}>Türkçe</li>
                    <li onClick={() => changeLocale('hi-IN')}>हिंदी</li>
                    <li onClick={() => changeLocale('zh-CN')}>中文</li>
                    <li onClick={() => changeLocale('ko-KR')}>한국어</li>
                    <li onClick={() => changeLocale('ar-SA')}>العربية</li>
                    <li onClick={() => changeLocale('fa-IR')}>فارسی</li>
                  </ul>
                </div>
              )
            }
          </div>}

          {
            mainnetInfoH5 && (
              <div className={`${styles.navs_menu_h5} ${styles.mainnetInfo}`}>
                <div className={styles.title}><FormattedMessage id="home.mainnetInfo.title" /></div>
                <div className={styles.content}>
                  <div className={styles.item}>
                    <p><FormattedMessage id="home.mainnetInfo.RPC" /></p>
                    <span>https://zkevm.shibchain.io</span>
                  </div>
                  <div className={styles.item}>
                    <p><FormattedMessage id="home.mainnetInfo.Chain" /></p>
                    <span>117722</span>
                  </div>
                  <div className={styles.item}>
                    <p><FormattedMessage id="home.mainnetInfo.Symbol" /></p>
                    <span>SHIB</span>
                  </div>
                  <div className={styles.item}>
                    <p><FormattedMessage id="home.mainnetInfo.Block" /></p>
                    <span>https://explorer.shibchain.io</span>
                  </div>
                  <div className={styles.item}>
                    <p><FormattedMessage id="home.mainnetInfo.Contract" /></p>
                    <span className={styles.address}>0x6Ab9dF51b1B794f89da427317b5fb1d9Be610F8d</span>
                  </div>
                </div>
                <div className={styles.footer}>
                  <div className={styles.item}>
                    <img src={Frame1Icon} />
                  </div>
                  <div className={styles.item}>
                    <img src={Frame2Icon} />
                  </div>
                </div>
              </div>
            )
          }

        </div>


        {/*  banner  */}
        <div className={styles.banner}>
          <div className={styles.left}>
            <h2><FormattedMessage id="home.banner.title" /></h2>
            <h4><FormattedMessage id="home.banner.Subtitle" /></h4>
            <div className={styles.btns}>
              <a target="_blank" className={styles.btn1} onClick={showModal}><FormattedMessage id="home.banner.btn1" /></a>
              <a href='https://etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce' target="_blank" className={styles.btn2}><FormattedMessage id="home.banner.btn2" /></a>
            </div>
            <div className={styles.btnsH5}>
              <a target="_blank" className={styles.btn1} onClick={() => setMainnetInfoH5(true)}><FormattedMessage id="home.banner.btn1" /></a>
              <a href='https://etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce' target="_blank" className={styles.btn2}><FormattedMessage id="home.banner.btn2" /></a>
            </div>
          </div>
          <img src={banner_right} />
        </div>
      </div>

      {/*  content  */}
      <div className={styles.content_main}>
        <div className={styles.content}>
          <div className={styles.rowOne}>
            <img className={styles.img1} src={rowOne} />
            <div className={styles.right}>
              <h2><FormattedMessage id="home.rowOne.title" /></h2>
              <h5><FormattedMessage id="home.rowOne.Subtitle" /></h5>
            </div>
            <img className={styles.img1_h5} src={rowOne} />
          </div>
          <div className={styles.rowTwo}>
            <div className={styles.left}>
              <h2><FormattedMessage id="home.rowTwo.title" /></h2>
              <h5><FormattedMessage id="home.rowTwo.Subtitle" /></h5>
            </div>
            <img className={styles.img2} src={rowTwo} />
          </div>
          <div className={styles.rowOne}>
            <img className={styles.img3} src={rowThree} />
            <div className={styles.right}>
              <h2><FormattedMessage id="home.rowThree.title" /></h2>
              <h5><FormattedMessage id="home.rowThree.Subtitle" /></h5>
            </div>
            <img className={styles.img3_h5} src={rowThree} />
          </div>
        </div>
      </div>

      {/* Join the shibes style={{ backgroundImage: `url(${join_bg})` }} */}
      <img className={styles.join_main_img} src={join_bg} />
      <img className={styles.join_main_img_h5} src={join_bg_h5} />
      <div className={styles.join_main_div} />
      <div className={styles.join_main} >
        <div className={styles.join_info}>
          <h2><FormattedMessage id="home.join.title" /></h2>
          <h3><FormattedMessage id="home.join.Subtitle" /></h3>
          <div className={styles.btns}>
            <a href='https://explorer.shibchain.io/' target="_blank" className={styles.btn1}><FormattedMessage id="home.join.btn1" /></a>
            <a href='https://explorer.shibchain.io/' target="_blank" className={styles.btn1}><FormattedMessage id="home.join.btn2" /></a>
          </div>
        </div>
      </div>

      {/* Heart of the Shiba Inu builder community */}
      <div className={styles.heart_main}>
        <div className={styles.heart_info}>
          <h2><FormattedMessage id="home.heartInfo.title" /></h2>
          <h3><FormattedMessage id="home.heartInfo.Subtitle" /></h3>
          <div className={styles.heart_list}>
            <div className={styles.cell}>
              <h2>25</h2>
              <h5><FormattedMessage id="home.heartInfo.info1" /></h5>
            </div>
            <div className={styles.cell}>
              <h2>13</h2>
              <h5><FormattedMessage id="home.heartInfo.info2" /></h5>
            </div>
            <div className={styles.cell}>
              <div className={styles.top}>
                <h2>3K</h2>
                <h3>SHIB</h3>
              </div>
              <h5><FormattedMessage id="home.heartInfo.info3" /></h5>
            </div>
            <div className={styles.cell}>
              <h2>2K</h2>
              <h5><FormattedMessage id="home.heartInfo.info4" /></h5>
            </div>
            <div className={styles.cell}>
              <h2>28</h2>
              <h5><FormattedMessage id="home.heartInfo.info5" /></h5>
            </div>
            <div className={styles.cell}>
              <h2>350+</h2>
              <h5><FormattedMessage id="home.heartInfo.info6" /></h5>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className={styles.footer_main}>
        <div className={styles.footer_info}>
          <div className={styles.left}>
            <div className={styles.title}>
              <img src={logo} />
              <div className={styles.h2}>shibchain</div>
            </div>
            <h3><FormattedMessage id="home.footer.title" /></h3>
            <h4><FormattedMessage id="home.footer.version" /></h4>
          </div>
          <div className={styles.right}>
            <a href='https://etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce' target="_blank"><FormattedMessage id="home.footer.Token" /></a>
            <a href='https://bridge.shibchain.io/' target="_blank" ><FormattedMessage id="home.footer.Bridge" /></a>
            <a href='https://explorer.shibchain.io/' target="_blank" ><FormattedMessage id="home.footer.Explorer" /></a>
            <div className={styles.imgs}>
              <a href='https://t.me/ShibChainL2' target="_blank"><img src={link1} /></a>
              <a className={styles.centerImg} href='https://twitter.com/ShibChainL2' target="_blank"><img src={link2} /></a>
              <a href='https://www.instagram.com/shibchain_l2/' target="_blank"><img src={link3} /></a>
            </div>
          </div>
          <div className={styles.left_h5}>
            <div className={styles.title}>
              <img src={logo} />
              <div className={styles.h2}>shibchain</div>
            </div>
            <h3><FormattedMessage id="home.footer.title" /></h3>
            <h4><FormattedMessage id="home.footer.version" /></h4>
          </div>
        </div>
      </div>

      <InfoDialog isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></InfoDialog>
    </>
  );
};

export default BasicLayout;
