import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from './Components/TabMenu.js';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import RecommendedFriends from './Components/RecommendedFriends';


class App extends Component {
  render() {
    return (
      <div className="App">
        <RecommendedFriends friends={[
          {
            username: 'phong0908',
            avatar: 'https://lh3.googleusercontent.com/UqyCGfgK9XdQSKjUZrhzLLtMR9D9t28UAUqyvafizw7XFTb_GaOTdiFL67pxPpFUqcjvzcRuWV0rbBqSRUeCo4sLccH7x0a-VLYSGC0gxKUraZPQvJ74yiLusx8UIa22WA80qW4RMl7d4SEyx3PDEPEB-lLpOIir6Hpw2U2DKvy61kTtG6BOfjek4e0K74gxc9sBUBFQRHrAzeKfPXYrGCzvTM_9U4ib84Q6uXs3oq7huUGQY3sXukIiXFcf5LX2emztfPO8br0Lweo47w5a-5F25TN1vFVpsnONDdOnhJQXM1eTKKeRj9WFyuFmmfm_cbE67HmOjtAzQ7Iq_xlKvpn2ZBHd1qo_RP9HB2AzZPDzrcv_8CAhlNWW-POXTrgj9vs9KY0GRZF4Dks2rXuDfyL-bj_yxKjPLZ67fxGvGgjKw4UZuXAPxiqzUyoyqla-as-TV6R8NeXGqScGVKFNnWmEOIJ0vr1pEEOYjC8trxMZqcUAgADzuTq-EpOccvFEJZmFlgcYQIU1Fjhb1gfT85e89snDd7tCmy6D9LqsBnokACkB6ePcJjbFlRFTKcDguQCuXQrqAP-Ihs0D4t0_x42kzz4NPNKZt9-W4d9VQCoACnwvbGDiKhKpRotHbAc5RLPAeM_0NTBwug4ZaHm6dS-FbMoDiBJRohZSE0_uf3ldJXzFVj5gWkVn2Aqs=w686-h914-no?authuser=0'
          },
          {
            username: 'phong0908',
            avatar: 'https://lh3.googleusercontent.com/UqyCGfgK9XdQSKjUZrhzLLtMR9D9t28UAUqyvafizw7XFTb_GaOTdiFL67pxPpFUqcjvzcRuWV0rbBqSRUeCo4sLccH7x0a-VLYSGC0gxKUraZPQvJ74yiLusx8UIa22WA80qW4RMl7d4SEyx3PDEPEB-lLpOIir6Hpw2U2DKvy61kTtG6BOfjek4e0K74gxc9sBUBFQRHrAzeKfPXYrGCzvTM_9U4ib84Q6uXs3oq7huUGQY3sXukIiXFcf5LX2emztfPO8br0Lweo47w5a-5F25TN1vFVpsnONDdOnhJQXM1eTKKeRj9WFyuFmmfm_cbE67HmOjtAzQ7Iq_xlKvpn2ZBHd1qo_RP9HB2AzZPDzrcv_8CAhlNWW-POXTrgj9vs9KY0GRZF4Dks2rXuDfyL-bj_yxKjPLZ67fxGvGgjKw4UZuXAPxiqzUyoyqla-as-TV6R8NeXGqScGVKFNnWmEOIJ0vr1pEEOYjC8trxMZqcUAgADzuTq-EpOccvFEJZmFlgcYQIU1Fjhb1gfT85e89snDd7tCmy6D9LqsBnokACkB6ePcJjbFlRFTKcDguQCuXQrqAP-Ihs0D4t0_x42kzz4NPNKZt9-W4d9VQCoACnwvbGDiKhKpRotHbAc5RLPAeM_0NTBwug4ZaHm6dS-FbMoDiBJRohZSE0_uf3ldJXzFVj5gWkVn2Aqs=w686-h914-no?authuser=0'
          },
          {
            username: 'phong0908',
            avatar: 'https://lh3.googleusercontent.com/UqyCGfgK9XdQSKjUZrhzLLtMR9D9t28UAUqyvafizw7XFTb_GaOTdiFL67pxPpFUqcjvzcRuWV0rbBqSRUeCo4sLccH7x0a-VLYSGC0gxKUraZPQvJ74yiLusx8UIa22WA80qW4RMl7d4SEyx3PDEPEB-lLpOIir6Hpw2U2DKvy61kTtG6BOfjek4e0K74gxc9sBUBFQRHrAzeKfPXYrGCzvTM_9U4ib84Q6uXs3oq7huUGQY3sXukIiXFcf5LX2emztfPO8br0Lweo47w5a-5F25TN1vFVpsnONDdOnhJQXM1eTKKeRj9WFyuFmmfm_cbE67HmOjtAzQ7Iq_xlKvpn2ZBHd1qo_RP9HB2AzZPDzrcv_8CAhlNWW-POXTrgj9vs9KY0GRZF4Dks2rXuDfyL-bj_yxKjPLZ67fxGvGgjKw4UZuXAPxiqzUyoyqla-as-TV6R8NeXGqScGVKFNnWmEOIJ0vr1pEEOYjC8trxMZqcUAgADzuTq-EpOccvFEJZmFlgcYQIU1Fjhb1gfT85e89snDd7tCmy6D9LqsBnokACkB6ePcJjbFlRFTKcDguQCuXQrqAP-Ihs0D4t0_x42kzz4NPNKZt9-W4d9VQCoACnwvbGDiKhKpRotHbAc5RLPAeM_0NTBwug4ZaHm6dS-FbMoDiBJRohZSE0_uf3ldJXzFVj5gWkVn2Aqs=w686-h914-no?authuser=0'
          }
        ]} />
      </div>
    );
  }
}

export default App;
