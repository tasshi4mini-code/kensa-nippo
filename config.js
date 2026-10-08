// 検査日報アプリの設定
// syncUrl : Apps Script を「ウェブアプリ」としてデプロイしたときの URL (…/exec)
// token   : Code.gs の TOKEN と同じ合言葉
// adminPin: 検査員の名前・品番マスターを変更するときのパスワード
// ngRateWarn: 不良率がこの % 以上になったら赤で警告（使わないときは null）
window.SUNA_CONFIG = {
  syncUrl: "",
  adminPin: "0726",
  token: "fDhQMbmS0HKI0lCB",
  inspectors: [],
  ngRateWarn: null
};
