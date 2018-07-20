ToQR = {};

ToQR.common = {
  generateQrCode: function(selector, textfield, target){
    $(selector).click(function(){
      new QRCode($(target)[0], $(textfield).val());
    });
  },
  clearQrCode: function(selector, target, textfield){
    $(selector).click(function(){
      $(target).html('');
      $(textfield).val('');
    });
  },
  documentReady: function(){
    this.generateQrCode('#generateQR', '#qrcode_text', '#qrcode');
    this.clearQrCode('#clearQR', '#qrcode', '#qrcode_text');
  }
}

$(document).ready(function(){
  ToQR.common.documentReady();
});