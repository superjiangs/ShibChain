import { Modal } from 'antd';
import React, { useState } from 'react';
import close from '@/assets/close.svg';
import './index.less';
import logo from '@/assets/logo.png';
import ShibChainIcon from '@/assets/ShibChain.svg';
import { FormattedMessage } from 'umi';
import Frame1Icon from '../../assets/Frame1.svg';
import Frame2Icon from '../../assets/Frame2.svg';

const InfoDialog = (props) => {
    const { isModalOpen, handleOk, handleCancel } = props;

    const addNetwork = () => {
        const chainIdDecimal = 117722;
        const chainIdHex = '0x' + chainIdDecimal.toString(16);
        window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: chainIdHex,
                chainName: "SHIBCHAIN",
                rpcUrls: [
                    'https://zkevm.shibchain.io',
                ],
                // iconUrls: [
                //     'https://testnet.hecoinfo.com/favicon.png'
                // ],
                blockExplorerUrls: [
                    'https://explorer.shibchain.io'
                ],
                nativeCurrency: {
                    name: 'SHIB',
                    symbol: 'SHIB',
                    decimals: 18
                }
            }]
        })
    }

    const CustomCloseIcon = () => (
        <img src={close} alt="Close Icon" />
    );

    return (
        <>
            <Modal title=""
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer=""
                closeIcon={<CustomCloseIcon />}
                wrapClassName={'build-modal'}
                width='631px'>
                <div className='main'>
                    <div className='top'>
                        <img src={logo} />
                        <img src={ShibChainIcon} />
                    </div>
                    <div className='title'>
                        <span><FormattedMessage id="home.mainnetInfo.title" /></span>
                    </div>
                    <div className='box'>
                        <div className='item'>
                            <p><FormattedMessage id="home.mainnetInfo.RPC" /></p>
                            <span>https://zkevm.shibchain.io</span>
                        </div>
                        <div className='item'>
                            <p><FormattedMessage id="home.mainnetInfo.Chain" /></p>
                            <span>117722</span>
                        </div>
                        <div className='item'>
                            <p><FormattedMessage id="home.mainnetInfo.Symbol" /></p>
                            <span>SHIB</span>
                        </div>
                        <div className='item'>
                            <p><FormattedMessage id="home.mainnetInfo.Block" /></p>
                            <span>https://explorer.shibchain.io</span>
                        </div>
                        <div className='item'>
                            <p><FormattedMessage id="home.mainnetInfo.Contract" /></p>
                            <span>0x6Ab9dF51b1B794f89da427317b5fb1d9Be610F8d</span>
                        </div>
                    </div>
                    <div className='footer'>
                        <div className="item">
                            <img src={Frame1Icon} className='hand' onClick={() => addNetwork()} />
                        </div>
                        <div className="item">
                            <img src={Frame2Icon} />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default InfoDialog;