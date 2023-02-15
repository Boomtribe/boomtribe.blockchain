// ********************
// - Main elements
// ********************

// If you own a purchase code for DeCommerce Premium. Enter it here:
// For Free version, leave the variable empty.
// Learn More: https://www.ivyca.com/decommerce/download.html
var purchaseCode = "";

// https://www.staticforms.xyz/ - Access Key: replace here
var emailAccessKey = "c3c0f26e-369c-4a84-9368-cfb04234b485";

// Redirect users to a specific url after payment
var redirectTo = "https://www.ivyca.com/decommerce/success.html";




// ********************
// - Payments: Monero, Bitcoin, Ethereum, Tether
// ********************

// Prices displayed in the currency. Supported currencies: "XMR", "BTC", "ETH", "USDT", and "USD".
// Please note: if you select "USD", you have to set your Monero address as receiving address. Your customers are asked to pay for goods in Monero with current conversion rate (USD to XMR), which is displayed in their wallet (Digital dollar not exist yet). E.g send 10 USD = 0.0789 XMR.
var selectedCurrency = "USD";

// Setting number of decimal places for rounding prices. E.g. 3 for "0.001".
var numberOfDecimal = 2;

// Shipping Costs in the currency selected above. E.g. "0.005" or "0" for free shipping.
var shippingCosts = 10;

// Your Monero public address where you get paid (Standard address).
// We use this Monero Standard address to generate Monero Integrated Address: https://monerodocs.org/public-address/integrated-address/
// Address Test: https://xmr.llcoins.net/addresstests.html
var moneroAddress = "44J1eG83mrNYyNQzR5QkCwAPkPMVVqAZ4eH2sRZuwpFSMvCHW1m24PmSxodG8TVdk3DENGuzLq7muABLM1RtYmRfLpT3TYB";

// Your Bitcoin public address where you get paid.
// Only Premium. Learn More: https://www.ivyca.com/decommerce/download.html
var bitcoinAddress = "bc1qvu9y6xr22wlakdy3e7ck5encd5plgajemmup7z";

// Your Ethereum public address where you get paid.
// Only Premium. Learn More: https://www.ivyca.com/decommerce/download.html
var ethereumAddress = "0x8E74eda2453d206628Ca10b51E660F70298705Ce";

// Your Tether public address where you get paid.
// Tether USD (USDT) is an ERC20 token. You can receive tokens directly on an Ethereum account (You can use your Ethereum Address).
// Only Premium. Learn More: https://www.ivyca.com/decommerce/download.html
var tetherAddress = "0x8E74eda2453d206628Ca10b51E660F70298705Ce";




// ********************
// - Design elements
// ********************

// A page title.
var pageTitle = "Boom Tribe";

// A page description.
var pageDescription = "Decentralized ecommerce platform for Web3";

// Logo Source
var logoSrc = "images/logo.svg";

// A link & text for the customers support.
var customerSupportText = "Customer Support";
var customerSupportLink = "https://discord.gg/NXprWnwA";

// Banners top
// to hide add "hidden" as a class in the file index.html (class="top-banners hidden ...")
var banner_1_Img = "images/banner1.png";
var banner_1_Link = "help.html#decentralized";

var banner_2_Img = "images/banner2.png";
var banner_2_Link = "help.html#censorship";

var banner_3_Img = "images/banner3.png";
var banner_3_Link = "help.html#ipfs";

var banner_4_Img = "images/banner4.png";
var banner_4_Link = "help.html#payments";

// Processes (4 Steps)
// to hide add "hidden" as a class in the file index.html (class="processes hidden ...")
var processes_1_Title = "Peer-to-peer payments";
var processes_1_Desc = "Payments straight to your wallet. No middleman, No bank included in the transaction.";

var processes_2_Title = "Peer-to-peer web";
var processes_2_Desc = "The website is duplicated on hundreds of ipfs nodes across the world. 100% Availability Guarantee.";

var processes_3_Title = "Can't be shut down";
var processes_3_Desc = "An ecommerce designed way that no individual, state, or corporation can control its use.";

var processes_4_Title = "No DDoS attacks";
var processes_4_Desc = "The more users accessing a website, the less bandwidth you are consuming (and the more bandwidth available).";

// Banner bottom
var bannerBottomImg = "images/banner-bottom.jpg";
var bannerBottomLink = "help.html#nftdomains";




// ********************
// - Details page of the product
// ********************

// Attribute Names on the product page: Details 
// Leave it "" (empty) for "display: none". 
// Attribute itself comes from the JSON code on the index.html. Leave it empty ("attribute1": "",) for None.
var nameOfAttribute1 = "Attribute 1";
var nameOfAttribute2 = "Attribute 2";
var nameOfAttribute3 = "Attribute 3";
var nameOfAttribute4 = "Attribute 4";




// ********************
// - Menu links
// ********************

// Hyperlinks used to point to other static html pages on the same website
var text_Link1 = "Decentralized ecommerce platform";
var href_Link1 = "help.html#decentralized";

var text_Link2 = "Censorship resistant ecommerce";
var href_Link2 = "help.html#censorship";

var text_Link3 = "Hosted on IPFS (Distributed web)";
var href_Link3 = "help.html#ipfs";

var text_Link4 = "Crypto payments";
var href_Link4 = "help.html#payments";

var text_Link5 = "NFT domains";
var href_Link5 = "help.html#nftdomains";

var text_Link6 = "Components";
var href_Link6 = "components.html";

var text_Link7 = "Empty page";
var href_Link7 = "empty.html";

var text_Link8 = "";
var href_Link8 = "";

var text_Link9 = "";
var href_Link9 = "";

var text_Link10 = "";
var href_Link10 = "";

var text_Link11 = "";
var href_Link11 = "";

var text_Link12 = "";
var href_Link12 = "";
