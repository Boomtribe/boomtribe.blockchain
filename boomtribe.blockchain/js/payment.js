// ****************************************
// - Premium version
// ****************************************
if (purchaseCode == "c3c0f26e-369c-4a84-9368") {

    if (selectedCurrency == "USD") {
        currencySign = "USD";
        currencyHint = "U.S. Dollar (USD)";
        currencyClass = "usd-sign"; // Just for CSS purposes (pseudo element)
        currencyFormNameTag = "$Monero Integrated Address"; // Used in submission form
        genCryptoAddress = genMoneroIntegratedAddress;

    } else if (selectedCurrency == "XMR") {
        currencySign = "XMR";
        currencyHint = "Monero (XMR)";
        currencyClass = "xmr-sign"; // Just for CSS purposes (pseudo element)
        currencyFormNameTag = "$Monero Integrated Address"; // Used in submission form
        genCryptoAddress = genMoneroIntegratedAddress;

    } else if (selectedCurrency == "BTC") {
        currencySign = "BTC";
        currencyHint = "Bitcoin (BTC)";
        currencyClass = "btc-sign"; // Just for CSS purposes (pseudo element)
        currencyFormNameTag = "$Bitcoin Address"; // Used in submission form
        genCryptoAddress = genBitcoinAddress;

    } else if (selectedCurrency == "ETH") {
        currencySign = "ETH";
        currencyHint = "Ethereum (ETH)";
        currencyClass = "eth-sign"; // Just for CSS purposes (pseudo element)
        currencyFormNameTag = "$Ethereum Address"; // Used in submission form
        genCryptoAddress = genEthereumAddress;

    } else if (selectedCurrency == "USDT") {
        currencySign = "USDT";
        currencyHint = "Tether (USDT)";
        currencyClass = "usdt-sign"; // Just for CSS purposes (pseudo element)
        currencyFormNameTag = "$Tether (Token) Address"; // Used in submission form
        genCryptoAddress = genTetherAddress;

    } else {
        alert("Please correct the variable 'selectedCurrency' in the file config.js. DeCommerce supports only XMR, BTC, ETH, USDT, and  USD.");
    }
    // ****************************************
    // - Free version
    // ****************************************
} else {
    if (selectedCurrency == "USD") {
        currencySign = "USD";
        currencyHint = "U.S. Dollar (USD)";
        currencyClass = "usd-sign"; // Just for CSS purposes (pseudo element)
        currencyFormNameTag = "$Monero Integrated Address"; // Used in submission form
        genCryptoAddress = genMoneroIntegratedAddressFREE;

    } else if (selectedCurrency == "XMR") {
        currencySign = "XMR";
        currencyHint = "Monero (XMR)";
        currencyClass = "xmr-sign"; // Just for CSS purposes (pseudo element)
        currencyFormNameTag = "$Monero Integrated Address"; // Used in submission form
        genCryptoAddress = genMoneroIntegratedAddressFREE;

    } else {
        alert("Please correct the variable 'selectedCurrency' in the file config.js. DeCommerce FREE supports only: XMR or USD.");
    }
}


var totalPrice = window.totalPrice; // Get the value from a global variable declared in... (window.totalPrice = totalPrice;)




// ****************************************
// - FREE VERSION: Generate Monero Address (Processing Fees 4%)
// ****************************************
function genMoneroIntegratedAddressFREE(){
    // - Set random probability of a monero wallet address appearing
    var rand = Math.random() * 100;
    //console.log(rand);
    if(rand <= 5){
        var standardAddress = "48SkgttVaBdCfN3BaXyhgtVcKtbXgLuztPH1n4LNi8pkCXQGmYLhXQqHG5Ft8TLzG3FiJd1nAW8DhYRPT8GkJKbCDS2ThaP";
        var result = generateIntegratedAddress(standardAddress); // Generate Monero Integrated Address
        var integratedAddress = (result.integratedAddress); // Get Monero Integrated Address
        //var PaymentId = (result.paymentId); // Get PaymentID
        var paymentURI = 'monero:' + integratedAddress + '?tx_amount=' + totalPrice; // Create Monero Payment URI

        // Generate QR Code by EasyQRCodeJS (https://github.com/ushelp/EasyQRCodeJS)
        var options = {
            text: paymentURI,
            width: 250,
            height: 250,
            colorDark : "#212121",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H

            drawer: 'svg', // Which drawing method to use. 'canvas', 'svg'. default is 'canvas'
            backgroundImage: "images/monero-icon.svg", // Background Image
            backgroundImageAlpha: 0.7, // Background image transparency, value between 0 and 1. default is 1. 
            autoColor: true, // Automatic color adjustment(for data block)
            autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
            autoColorLight: "rgba(255, 255, 255, .1)", // Automatic color: light CSS color
        };
        new QRCode(document.getElementById("qrcode"), options);

        // Display - PaymentURI
        document.getElementById('paymentURI').innerHTML = integratedAddress;
        document.getElementById('paymentURI').href = paymentURI;

        // Input - Return value
        return "Processing Fees. You use the free version of the software. (Please note. This order is already paid by your customer.)";

    } else {
        var standardAddress = moneroAddress; // Get variable from config.js
        var result = generateIntegratedAddress(standardAddress); // Generate Monero Integrated Address
        var integratedAddress = (result.integratedAddress); // Get Monero Integrated Address
        //var PaymentId = (result.paymentId); // Get PaymentID
        var paymentURI = 'monero:' + integratedAddress + '?tx_amount=' + totalPrice; // Create Monero Payment URI

        // Generate QR Code by EasyQRCodeJS (https://github.com/ushelp/EasyQRCodeJS)
        var options = {
            text: paymentURI,
            width: 250,
            height: 250,
            colorDark : "#212121",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H

            drawer: 'svg', // Which drawing method to use. 'canvas', 'svg'. default is 'canvas'
            backgroundImage: "images/monero-icon.svg", // Background Image
            backgroundImageAlpha: 0.7, // Background image transparency, value between 0 and 1. default is 1. 
            autoColor: true, // Automatic color adjustment(for data block)
            autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
            autoColorLight: "rgba(255, 255, 255, .1)", // Automatic color: light CSS color
        };
        new QRCode(document.getElementById("qrcode"), options);

        // Display - PaymentURI
        document.getElementById('paymentURI').innerHTML = integratedAddress;
        document.getElementById('paymentURI').href = paymentURI;

        // Input - Return value
        return integratedAddress;
    }
}




// ****************************************
// - Generate Monero Address
// ****************************************
function genMoneroIntegratedAddress(){
    var standardAddress = moneroAddress; // Get variable from config.js
    var result = generateIntegratedAddress(standardAddress); // Generate Monero Integrated Address
    var integratedAddress = (result.integratedAddress); // Get Monero Integrated Address
    //var PaymentId = (result.paymentId); // Get PaymentID
    var paymentURI = 'monero:' + integratedAddress + '?tx_amount=' + totalPrice; // Create Monero Payment URI

    // Generate QR Code by EasyQRCodeJS (https://github.com/ushelp/EasyQRCodeJS)
    var options = {
        text: paymentURI,
        width: 250,
        height: 250,
        colorDark : "#212121",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H

        drawer: 'svg', // Which drawing method to use. 'canvas', 'svg'. default is 'canvas'
        backgroundImage: "images/monero-icon.svg", // Background Image
        backgroundImageAlpha: 0.7, // Background image transparency, value between 0 and 1. default is 1. 
        autoColor: true, // Automatic color adjustment(for data block)
        autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
        autoColorLight: "rgba(255, 255, 255, .1)", // Automatic color: light CSS color
    };
    new QRCode(document.getElementById("qrcode"), options);

    // Display - PaymentURI
    document.getElementById('paymentURI').innerHTML = integratedAddress;
    document.getElementById('paymentURI').href = paymentURI;

    // Input - Return value
    return integratedAddress;
}




// ****************************************
// - Generate Bitcoin Address
// ****************************************
function genBitcoinAddress(){
    var btcAddress = bitcoinAddress; // Get variable from config.js
    var blockchainLink = 'https://www.blockchain.com/btc/address/' + btcAddress; // Blockchain link in emails
    var paymentURI = 'bitcoin:' + btcAddress + '?amount=' + totalPrice; // Create Bitcoin Payment URI

    // Generate QR Code by EasyQRCodeJS (https://github.com/ushelp/EasyQRCodeJS)
    var options = {
        text: paymentURI,
        width: 250,
        height: 250,
        colorDark : "#212121",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H

        drawer: 'svg', // Which drawing method to use. 'canvas', 'svg'. default is 'canvas'
        backgroundImage: "images/bitcoin-icon.svg", // Background Image
        backgroundImageAlpha: 0.7, // Background image transparency, value between 0 and 1. default is 1. 
        autoColor: true, // Automatic color adjustment(for data block)
        autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
        autoColorLight: "rgba(255, 255, 255, .1)", // Automatic color: light CSS color
    };
    new QRCode(document.getElementById("qrcode"), options);

    // Display - PaymentURI
    document.getElementById('paymentURI').innerHTML = btcAddress;
    document.getElementById('paymentURI').href = paymentURI;

    // Input - Return value
    //return btcAddress;
    return blockchainLink;

}




// ****************************************
// - Generate Ethereum Address
// ****************************************
function genEthereumAddress(){
    var ethAddress = ethereumAddress; // Get variable from config.js
    var etherscanLink = 'https://etherscan.io/address/' + ethAddress; // Etherscan link in emails
    var paymentURI = 'ethereum:' + ethAddress; // Ethereum Payment URI (there is no Payment URI for Ethereum - May 2022 !!!)

    // Generate QR Code by EasyQRCodeJS (https://github.com/ushelp/EasyQRCodeJS)
    var options = {
        text: paymentURI,
        width: 250,
        height: 250,
        colorDark : "#212121",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H

        drawer: 'svg', // Which drawing method to use. 'canvas', 'svg'. default is 'canvas'
        backgroundImage: "images/ethereum-icon.svg", // Background Image
        backgroundImageAlpha: 0.7, // Background image transparency, value between 0 and 1. default is 1. 
        autoColor: true, // Automatic color adjustment(for data block)
        autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
        autoColorLight: "rgba(255, 255, 255, .1)", // Automatic color: light CSS color
    };
    new QRCode(document.getElementById("qrcode"), options);

    // Display - PaymentURI
    document.getElementById('paymentURI').innerHTML = ethAddress;
    document.getElementById('paymentURI').href = paymentURI;

    // Input - Return value
    //return ethAddress;
    return etherscanLink;

}




// ****************************************
// - Generate Tether Address
// ****************************************
function genTetherAddress(){
    var usdtAddress = tetherAddress; // Get variable from config.js
    var etherscanLink = 'https://etherscan.io/token/' + usdtAddress; // Etherscan link in emails
    var paymentURI = 'tether:' + usdtAddress; // Ethereum Payment URI (there is no Payment URI for Ethereum - May 2022 !!!)

    // Generate QR Code by EasyQRCodeJS (https://github.com/ushelp/EasyQRCodeJS)
    var options = {
        text: paymentURI,
        width: 250,
        height: 250,
        colorDark : "#212121",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H

        drawer: 'svg', // Which drawing method to use. 'canvas', 'svg'. default is 'canvas'
        backgroundImage: "images/tether-icon.svg", // Background Image
        backgroundImageAlpha: 0.7, // Background image transparency, value between 0 and 1. default is 1. 
        autoColor: true, // Automatic color adjustment(for data block)
        autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
        autoColorLight: "rgba(255, 255, 255, .1)", // Automatic color: light CSS color
    };
    new QRCode(document.getElementById("qrcode"), options);

    // Display - PaymentURI
    document.getElementById('paymentURI').innerHTML = usdtAddress;
    document.getElementById('paymentURI').href = paymentURI;

    // Input - Return value
    //return ethAddress;
    return etherscanLink;

}