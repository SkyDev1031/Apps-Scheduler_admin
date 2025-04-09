<?php

use App\Http\Controllers\AppController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("login", 'ApiController@login');
Route::post("register", 'ApiController@register');
Route::get("referral/{key}", 'ApiController@checkRefLink');
Route::get("admin/bitquery/getTemplateSettings", 'ApiController@getBitqueryTemplateSettings');

// Update the Purchase Log
Route::post("/v1/purchaselog", 'ApiController@insert_PurchaseLog');


Route::middleware('auth:api')->group(function () {
    Route::get("user", 'ApiController@user');
    Route::get("users", 'ApiController@users');
    
    Route::get("userNumber", 'ApiController@userNumber');
    Route::post("updateAutoPay", 'ApiController@updateAutoPay');

    Route::get("cryptos", 'ApiController@getAllCryptos');
    Route::get("settings", 'ApiController@getSettings');

    Route::post("check-password", 'ApiController@checkPassword');
    Route::post("updatePassword", 'ApiController@updatePassword');
    Route::post("updateSecPassword", 'ApiController@updateSecPassword');
    Route::post("updateProfile", 'ApiController@updateProfile');

    Route::get("wallet", 'ApiController@wallet');
    Route::post("getSupportCredits", 'ApiController@getSupportCredits');
    Route::post("confirmdeposit", 'ApiController@confirmdeposit');
    Route::post("confirmwithdrawal", 'ApiController@confirmwithdrawal');
    Route::post("conformtranfer", 'ApiController@conformtranfer');
    Route::post("support_conformtranfer", 'ApiController@support_conformtranfer');
    Route::post("confirmswap", 'ApiController@confirmswap');
    Route::post("confirmsupportswap", 'ApiController@confirmsupportswap');
    Route::post("confirmcancelsupport", 'ApiController@confirmcancelsupport');

    Route::get("staked", 'ApiController@staked');
    Route::post("confirmstake", 'ApiController@confirmstake');
    Route::post("confirmunstake", 'ApiController@confirmunstake');

    Route::get("packages", 'ApiController@packages');
    Route::post("buy-package", 'ApiController@buyPackage');
    Route::get("coin-pulses/{type}", 'ApiController@getCoinPulses');
    Route::delete('coin-pulses/{id}', 'ApiController@deleteCoinPulses');

    Route::get("purchases", 'ApiController@purchases');
    Route::post("renew-package", 'ApiController@renewPackage');
    Route::get("packages/{id}", 'ApiController@getPackages');
    Route::get("discussions", 'ApiController@discussions');
    Route::get("discussions/{id}", 'ApiController@getDiscussions');
    
    Route::get("transfers", 'ApiController@transfers');
    Route::post("transfer", 'ApiController@transferPackage');
    Route::get("acceptTransfer/{TID}", 'ApiController@acceptTransfer');
    Route::get("cancelTransfer/{TID}", 'ApiController@cancelTransfer');
    Route::get("acceptTransaction/{TID}", 'ApiController@acceptTransaction');
    Route::get("cancelTransaction/{TID}", 'ApiController@cancelTransaction');

    Route::get("product/{id}", 'ApiController@ads');
    Route::post("product", 'ApiController@buyProduct');

    Route::get("marketplace/{id}", 'ApiController@marketplace');
    Route::get("all_marketplace/{id}", 'ApiController@all_marketplace');
    Route::post("marketplace", 'ApiController@marketPlaceForm');
    Route::delete("marketplace/{id}", 'ApiController@deletemarketplace');

    Route::get("saleslog", 'ApiController@saleslog');
    Route::get("myorder", 'ApiController@myorder');
    Route::get("salesfeedback", 'ApiController@salesfeedback');
    Route::get("referralLink", 'ApiController@getReferralLink');
    Route::post("referralLink", 'ApiController@saveRefLink');
    Route::post("referralLink/update", 'ApiController@updateRefPlace');
    Route::get("cryptoreferrallinklog", 'ApiController@cryptoreferrallinklog');
    Route::delete("reflink/{id}", 'ApiController@cancelRefLink');
    Route::get("networklog", 'ApiController@networklog');
    Route::get("payoutpercent", 'ApiController@getpayoutpercent');
    Route::get("depositlog", 'ApiController@depositlog');
    Route::get("sponsorlog", 'ApiController@sponsorlog');
    Route::get("withdrawallog", 'ApiController@withdrawallog');
    Route::get("transferlog", 'ApiController@transferlog');
    Route::get("swaplog", 'ApiController@swaplog');
    Route::get("swapfeecollectedlog", 'ApiController@swapfeecollectedlog');
    Route::get("stakedlog", 'ApiController@stakedlog');
    Route::get("clienttoadmintransferlog", 'ApiController@clienttoadmintransferlog');

    Route::get("profile", 'ApiController@profile');
    Route::post("upload-media", 'ApiController@uploadMedia');
    Route::get("network", 'ApiController@network');

    Route::get("transaction", 'ApiController@getTransactions');

    // admin
    Route::get("admin", 'ApiController@getAdminData');
    Route::post("admin", 'ApiController@updateAdminData');

    Route::get("admin/contracts", 'ApiController@getContracts');
    Route::get("admin/wallets/{id}", 'ApiController@adminWallets');
    Route::post("admin/payout", 'ApiController@confirmPayout');
    Route::post("admin/transfer", 'ApiController@transfer2Admin');
    Route::delete("admin/transfer/{id}", 'ApiController@deleteTransfer');
    Route::get("admin/clients", 'ApiController@getClients');
    Route::post("admin/user", 'ApiController@updateUser');
    Route::post("admin/user/text", 'ApiController@sendText');
    Route::delete("admin/user/{id}", 'ApiController@deleteUser');
    Route::post("admin/package", 'ApiController@updatePackage');
    Route::delete("admin/package/{id}", 'ApiController@deletePackage');
    Route::get("admin/purchases/{id}", 'ApiController@getPurchases');
    Route::delete("admin/purchases/{id}", 'ApiController@deletePurchase');
    Route::post("admin/discussion", 'ApiController@updateDiscussion');
    Route::delete("admin/discussions/{id}", 'ApiController@deleteDiscussion');
    
    Route::get("admin/categories", 'ApiController@getCategories');
    Route::post("admin/categories", 'ApiController@updateCategory');
    Route::delete("admin/categories/{id}", 'ApiController@deleteCategory');

    Route::get("admin/twilio", 'ApiController@getTwilioAccounts');
    Route::post("admin/twilio", 'ApiController@saveTwilioAccounts');
    Route::post("admin/twilio/number", 'ApiController@saveTwilioNumbers');
    Route::delete("admin/twilio/number/{id}", 'ApiController@deleteTwilioNumber');
    Route::get("admin/twilio-logs", 'ApiController@getTwilioLogs');
    Route::delete("admin/twilio-logs/{id}", 'ApiController@deleteTwilioLog');

    Route::get("admin/faq", 'ApiController@getFaqs');
    Route::post("admin/faq", 'ApiController@updateFaq');
    Route::delete("admin/faq/{id}", 'ApiController@deleteFaq');

    Route::post("admin/sms-callback", 'ApiController@saveTextStatus');
    Route::post("admin/contract", 'ApiController@contractAction');

    Route::post("admin/crypto", 'ApiController@updateCrypto');
    Route::post("admin/update-crypto", 'ApiController@updateShowCrypto');

    Route::delete("admin/crypto/{id}", 'ApiController@deleteCrypto');

    Route::post("admin/network", 'ApiController@updateNetworkSettings');
    Route::get("admin/binary-payout", 'ApiController@runBinaryPayout');
    Route::get("admin/referral", 'ApiController@getReferralSettings');
    Route::post("admin/referral", 'ApiController@updateReferralSettings');

    Route::get("admin/bitquery", 'ApiController@getBitquerySettings');
    Route::post("admin/bitquery", 'ApiController@updateBitquerySettings');
    Route::delete("admin/bitquery/{id}", 'ApiController@deleteBitquerySettings');
    Route::post("admin/bitquery/updateTemplateSettings", 'ApiController@updateBitqueryTemplateSettings');

    Route::get("contacts", 'ApiController@getContacts');


});

// App Api Router
Route::get("/app", [AppController::class, 'index']);
Route::post("/app/checkonlinestate", [AppController::class, 'checkOnlineState']);
Route::post("/app/login", [AppController::class, 'login']);
Route::post("/app/signup", [AppController::class, 'signup']);
Route::post("/app/registerAppUser", [AppController::class, 'registerAppUser']);
Route::post("/app/phonecheckCreate", [AppController::class, 'phonecheckCreate']);
Route::post("/app/phonecheckValidate", [AppController::class, 'phonecheckValidate']);
Route::post("/app/alreadyexist", [AppController::class, 'isAlreadyExist']);
Route::post("/app/insertAppUserInfo", [AppController::class, 'insertAppUserInfo']);
Route::post("/app/insertPhoneUseInfo", [AppController::class, 'insertPhoneUseInfo']);
Route::post('/app/deleteAppInfoByPhonenumber', [AppController::class, 'deleteAppInfoByPhonenumber']);
Route::post('/app/removeall', [AppController::class, 'truncateAppInfo']);
Route::post('/app/deletepPhoneInfoByPhonenumber', [AppController::class, 'deletePhoneInfoByPhonenumber']);
Route::post('/app/removeallphoneinfo', [AppController::class, 'truncatePhoneInfo']);
Route::post("/app/downloadToCSV", [AppController::class, 'downloadToCSV']);
Route::post('/app/export-csv', [AppController::class, 'exportToCSV']);

Route::post('/app/appUseInfos', [AppController::class, 'appUseInfos']);
Route::post('/app/appUseInfoDuration', [AppController::class, 'appUseInfoDuration']);
Route::post('/app/appUseInfoFreq', [AppController::class, 'appUseInfoFreq']);
Route::post('/app/phoneuseinfos', [AppController::class, 'phoneuseinfos']);
Route::post('/app/phoneUseInfoByPhonenumber', [AppController::class, 'phoneUseInfoByPhonenumber']);
