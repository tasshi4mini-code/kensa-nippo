// 検査日報アプリの設定
// syncUrl : Apps Script を「ウェブアプリ」としてデプロイしたときの URL (…/exec)
// token   : Code.gs の TOKEN と同じ合言葉
// adminPin: 検査員の名前・品番マスターを変更するときのパスワード
// ngRateWarn: 不良率がこの % 以上になったら赤で警告（使わないときは null）
window.SUNA_CONFIG = {
  syncUrl: "https://script.google.com/macros/s/AKfycbzz_u8ZPOx7KNphfs_nKJA3FjGZAZBxywmleNTjTb4SgSTtE_mN4B8aHEu3B3SU6ucc/exec",
  adminPin: "0726",
  token: "fDhQMbmS0HKI0lCB",
  inspectors: [],
  ngRateWarn: null
};
