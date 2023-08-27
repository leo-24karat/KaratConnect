"use strict";
class KaratConnect {
  constructor(cliendId) {
    this.userData = {};
    this.clientId = cliendId;
    this.oAuthUrl = "http://localhost:4003";
    this.redirectUrl = window.location.origin;
  }
  showLoginModal(onLoginSuccess) {
    const oAuthUrl = "http://localhost:4003";
    const redirectUrl = window.location.origin;
    const popup = window.open(
      `${oAuthUrl}/oauth?redirect=${redirectUrl}`,
      "oauth-popup",
      "width=600,height=600"
    );
    window.addEventListener("message", (event) => {
      if (event.origin === oAuthUrl) {
        const userData = event.data;
        this.userData = userData;
        onLoginSuccess(userData);
        popup === null || popup === void 0 ? void 0 : popup.close();
      }
    });
  }
  isLogin() {
    var _a;
    return !!((_a = this.userData) === null || _a === void 0 ? void 0 : _a.uid);
  }
  getUserData() {
    return this === null || this === void 0 ? void 0 : this.userData;
  }
}
