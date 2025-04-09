import { method } from "lodash";
import { getAuth, logoutUser } from "../utils";
import axios from 'axios'
import { toast } from 'react-toastify'

const _REQ_METHOD = { GET: 'GET', POST: 'POST', DELETE: 'DELETE' }

const _REQUEST_APP = (url, method, data) => {
    return new Promise((resolve, reject) => {
        // Map HTTP methods to Axios functions
        const axiosMethods = {
            GET: axios.get,
            POST: axios.post,
            PUT: axios.put,
            DELETE: axios.delete,
        };

        // Ensure the method is valid
        if (!axiosMethods[method]) {
            return reject(new Error(`Unsupported HTTP method: ${method}`));
        }

        // Determine the request configuration
        const requestConfig = {
            ...(method === 'GET' ? { params: data } : { ...data }), // Use `params` for GET and `data` for others
        };

        // Make the request using the selected Axios method
        axiosMethods[method](`${window.location.origin}/api/app/${url}`, requestConfig)
            .then(res => resolve(res.data)) // Resolve with the response data
            .catch(err => reject(err)); // Reject with the error
    });
}
const _REQUEST = (url, method, data) => {
    if (!window.navigator.onLine) return Promise.reject("You are offline, Please check your network connection");
    const userInfo = getAuth();

    return new Promise((resolve, reject) => {
        fetch(`${window.location.origin}/api/${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(userInfo?.token && { 'Authorization': `Bearer ${userInfo?.token}` })
            },
            ...(method == _REQ_METHOD.POST && { body: JSON.stringify(data) })
        })
            .then(async res => {
                if (res.status == 404) return reject({ message: 'Page not found, Please upgrade the version', code: 404 });
                else if (res.status != 200 && res.status != 201) return reject({ message: `Something went wrong. ${res.statusText}`, code: res.status })
                res = await res.json();
                if (res?.logout) {
                    if (userInfo?.token) logoutUser();
                } else if (res?.success) {
                    resolve(res)
                } else {
                    reject({ message: res?.message || 'Something went wrong', code: res?.code })
                }
            })
            .catch(err => {
                console.log('888888888888', err)
                reject(err.message || 'Something went wrong')
            })
    })
}
export const uploadApi = (formdata) => {
    if (!window.navigator.onLine) return Promise.reject("You are offline, Please check your network connection");
    const userInfo = getAuth();

    return new Promise((resolve, reject) => {
        fetch(`${window.location.origin}/api/upload-media`, {
            method: _REQ_METHOD.POST,
            headers: {
                ...(userInfo?.token && { 'Authorization': `Bearer ${userInfo?.token}` })
            },
            body: formdata
        })
            .then(res => res.json())
            .then(res => {
                if (res?.logout) logoutUser();
                if (res?.success) return resolve(res)
                reject(res.message || 'Something went wrong')
            })
            .catch(err => reject(err.message || 'Something went wrong'))
    })
}
export const convertToCSV = (data) => {
    // Extract headers from the keys of the first object
    const headers = Object.keys(data[0]).join(',');

    // Convert each row of data into a CSV row
    const rows = data.map(row =>
        Object.values(row).map(value => `"${value}"`).join(',')
    );

    // Combine headers and rows
    return `${headers}\n${rows.join('\n')}`;
};


export const downloadCSV = (data, filename = 'data.csv') => {
    // Convert data to CSV
    const csvContent = convertToCSV(data);

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a link element
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    // Set link attributes
    link.setAttribute('href', url);
    link.setAttribute('download', filename);

    // Append the link to the body (required for Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger download
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

export const downloadCSVByElement = (elemment, filename = 'data.csv') => {
    const table = elemment
    let csv = [];
    for (let row of table.rows) {
        let cols = Array.from(row.cells).map(cell => `"${cell.innerText.replace(/"/g, '""')}"`);
        csv.push(cols.join(','));
    }

    const csvContent = csv.join('\n');
    if(table.rows.length <= 1 || csvContent.indexOf("No results found") >= 0) {
        toast("No results found", {
            type: "warning", // or "error", "info", "warning", "default"
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        return
    }
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const loginApi = (username, password) => _REQUEST('login', _REQ_METHOD.POST, { username, password })
export const getUserApi = () => _REQUEST('user', _REQ_METHOD.GET)
export const getUsersApi = () => _REQUEST('users', _REQ_METHOD.GET)
export const getUsersNumber = () => _REQUEST('userNumber', _REQ_METHOD.GET);
export const updatUserAutoPay = (data) => _REQUEST('updateAutoPay', _REQ_METHOD.POST, data);
export const registerApi = (data) => _REQUEST('register', _REQ_METHOD.POST, data)
export const refCheckApi = (key) => _REQUEST(`referral/${key}`, _REQ_METHOD.GET)
export const pwdCheckApi = (password) => _REQUEST('check-password', _REQ_METHOD.POST, { password })

export const updatePwdApi = (data) => _REQUEST('updatePassword', _REQ_METHOD.POST, data)
export const updateSecPwdApi = (data) => _REQUEST('updateSecPassword', _REQ_METHOD.POST, data)
export const updateProfileApi = (data) => _REQUEST('updateProfile', _REQ_METHOD.POST, data)

export const walletsApi = () => _REQUEST('wallet', _REQ_METHOD.GET)
export const getSupportCreditsApi = (data) => _REQUEST('getSupportCredits', _REQ_METHOD.POST, data)

export const confDepositApi = (data) => _REQUEST('confirmdeposit', _REQ_METHOD.POST, data)
export const confWithdrawApi = (data) => _REQUEST('confirmwithdrawal', _REQ_METHOD.POST, data)
export const confTransferApi = (data) => _REQUEST('conformtranfer', _REQ_METHOD.POST, data)
export const support_confTransferApi = (data) => _REQUEST('support_conformtranfer', _REQ_METHOD.POST, data)
export const confSwapApi = (data) => _REQUEST('confirmswap', _REQ_METHOD.POST, data)
export const confSupportSwapApi = (data) => _REQUEST('confirmsupportswap', _REQ_METHOD.POST, data)
export const confCancelSupportApi = (data) => _REQUEST('confirmcancelsupport', _REQ_METHOD.POST, data)

export const getCryptosApi = () => _REQUEST('cryptos', _REQ_METHOD.GET)

export const stakedApi = () => _REQUEST('staked', _REQ_METHOD.GET)
export const confStakeApi = (data) => _REQUEST('confirmstake', _REQ_METHOD.POST, data)
export const confUnStakeApi = (data) => _REQUEST('confirmunstake', _REQ_METHOD.POST, data)
export const purchasesApi = () => _REQUEST('purchases', _REQ_METHOD.GET)
export const packagesApi = (id = null) => _REQUEST(`packages${id ? `/${id}` : ''}`, _REQ_METHOD.GET)
export const discussionsApi = (id) => _REQUEST(`discussions${id ? `/${id}` : ''}`, _REQ_METHOD.GET);
export const buyPackageApi = (data) => _REQUEST('buy-package', _REQ_METHOD.POST, data)
export const renewPackageApi = (data) => _REQUEST('renew-package', _REQ_METHOD.POST, data)

export const coinPulsesApi = (type) => _REQUEST(`coin-pulses/${type}`, _REQ_METHOD.GET)
export const deleteCoinPulsesApi = (id) => _REQUEST(`coin-pulses/${id}`, _REQ_METHOD.DELETE)

export const transfersApi = () => _REQUEST('transfers', _REQ_METHOD.GET)
export const transferPackageApi = (data) => _REQUEST('transfer', _REQ_METHOD.POST, data)
export const acceptPackageTransfer = (tid) => _REQUEST(`acceptTransfer/${tid}`, _REQ_METHOD.GET)
export const cancelPackageTransfer = (tid) => _REQUEST(`cancelTransfer/${tid}`, _REQ_METHOD.GET)
export const acceptTransaction = (tid) => _REQUEST(`acceptTransaction/${tid}`, _REQ_METHOD.GET)
export const cancelTransaction = (tid) => _REQUEST(`cancelTransaction/${tid}`, _REQ_METHOD.GET)

export const productApi = (id = 0) => _REQUEST(`product/${id}`, _REQ_METHOD.GET)
export const buyProductApi = (data) => _REQUEST(`product`, _REQ_METHOD.POST, data)

export const marketplaceApi = (id = 0) => _REQUEST(`marketplace/${id}`, _REQ_METHOD.GET)
export const allMarketplaceApi = (id = 0) => _REQUEST(`all_marketplace/${id}`, _REQ_METHOD.GET)
export const deleteMarketplaceApi = (id) => _REQUEST(`marketplace/${id}`, _REQ_METHOD.DELETE)
export const createMarketplaceApi = (data) => _REQUEST(`marketplace`, _REQ_METHOD.POST, data)

export const salesLogApi = () => _REQUEST('saleslog', _REQ_METHOD.GET)
export const myOrderApi = () => _REQUEST('myorder', _REQ_METHOD.GET)
export const salesFeedbackApi = () => _REQUEST('salesfeedback', _REQ_METHOD.GET)
export const getRefLinkApi = () => _REQUEST('referralLink', _REQ_METHOD.GET)
export const addRefLinkApi = (data) => _REQUEST('referralLink', _REQ_METHOD.POST, data)
export const updateRefLinkApi = (data) => _REQUEST('referralLink/update', _REQ_METHOD.POST, data)
export const refLinksApi = () => _REQUEST('cryptoreferrallinklog', _REQ_METHOD.GET)

export const cancelRefLinksApi = (id) => _REQUEST(`reflink/${id}`, _REQ_METHOD.DELETE)

export const networkLogApi = () => _REQUEST('networklog', _REQ_METHOD.GET)
export const payoutPercentApi = () => _REQUEST("payoutpercent", _REQ_METHOD.GET);
export const depositLogApi = () => _REQUEST('depositlog', _REQ_METHOD.GET)
export const SponsorLogApi = () => _REQUEST('sponsorlog', _REQ_METHOD.GET)
export const withdraLogApi = () => _REQUEST('withdrawallog', _REQ_METHOD.GET)
export const transferLogApi = () => _REQUEST('transferlog', _REQ_METHOD.GET)
export const swapLogApi = () => _REQUEST('swaplog', _REQ_METHOD.GET)
export const swapFeeLogApi = () => _REQUEST('swapfeecollectedlog', _REQ_METHOD.GET)
export const stakedLogApi = () => _REQUEST('stakedlog', _REQ_METHOD.GET)
export const c2aTransferLogApi = () => _REQUEST('clienttoadmintransferlog', _REQ_METHOD.GET)
export const profileApi = () => _REQUEST('profile', _REQ_METHOD.GET)
export const getSettingsApi = () => _REQUEST('settings', _REQ_METHOD.GET)
export const getNetworkApi = () => _REQUEST('network', _REQ_METHOD.GET)

export const getTransactionApi = () => _REQUEST('transaction', _REQ_METHOD.GET)

export const getAdminApi = () => _REQUEST('admin', _REQ_METHOD.GET)
export const updateAdminApi = (data) => _REQUEST('admin', _REQ_METHOD.POST, data)
export const getContractsApi = () => _REQUEST('admin/contracts', _REQ_METHOD.GET)
export const getAdminWalletsApi = (id) => _REQUEST(`admin/wallets/${id}`, _REQ_METHOD.GET)
export const confPayoutApi = (data) => _REQUEST('admin/payout', _REQ_METHOD.POST, data)
export const transfer2AdminApi = (data) => _REQUEST('admin/transfer', _REQ_METHOD.POST, data)
export const getClientsApi = () => _REQUEST('admin/clients', _REQ_METHOD.GET)

export const updateUserApi = (data) => _REQUEST('admin/user', _REQ_METHOD.POST, data)
export const sendTextApi = (data) => _REQUEST('admin/user/text', _REQ_METHOD.POST, data)
export const deleteUserApi = (userid) => _REQUEST(`admin/user/${userid}`, _REQ_METHOD.DELETE)

export const deletePackageApi = (id) => _REQUEST(`admin/package/${id}`, _REQ_METHOD.DELETE)
export const updatePackageApi = (data) => _REQUEST(`admin/package`, _REQ_METHOD.POST, data)

export const getPurchasesApi = (id) => _REQUEST(`admin/purchases/${id}`, _REQ_METHOD.GET)
export const deletePurchasesApi = (id) => _REQUEST(`admin/purchases/${id}`, _REQ_METHOD.DELETE)
export const updateDiscussionApi = (data) => _REQUEST(`admin/discussion`, _REQ_METHOD.POST, data)
export const deleteDiscussionApi = (id) => _REQUEST(`admin/discussions/${id}`, _REQ_METHOD.DELETE)

export const getCategoriesApi = () => _REQUEST('admin/categories', _REQ_METHOD.GET)
export const updateCategoryApi = (data) => _REQUEST('admin/categories', _REQ_METHOD.POST, data)
export const deleteCategoryApi = (id) => _REQUEST(`admin/categories/${id}`, _REQ_METHOD.DELETE)
export const getTwilioAccountsApi = () => _REQUEST('admin/twilio', _REQ_METHOD.GET)
export const updateTwilioApi = (data) => _REQUEST('admin/twilio', _REQ_METHOD.POST, data)
export const updateNumberApi = (data) => _REQUEST('admin/twilio/number', _REQ_METHOD.POST, data)
export const deleteNumberApi = (id) => _REQUEST(`admin/twilio/number/${id}`, _REQ_METHOD.DELETE)
export const getTwilioLogsApi = () => _REQUEST('admin/twilio-logs', _REQ_METHOD.GET)
export const deleteTwilioLogsApi = (id) => _REQUEST(`admin/twilio-logs/${id}`, _REQ_METHOD.DELETE)
export const getFaqApi = () => _REQUEST('admin/faq', _REQ_METHOD.GET)
export const updateFaqApi = (data) => _REQUEST('admin/faq', _REQ_METHOD.POST, data)
export const deleteFaqApi = (id) => _REQUEST(`admin/faq/${id}`, _REQ_METHOD.DELETE)
export const contractApi = (data) => _REQUEST('admin/contract', _REQ_METHOD.POST, data)
export const updateCryptoApi = (data) => _REQUEST('admin/crypto', _REQ_METHOD.POST, data)
export const updateCryptoOptionsApi = (data) => _REQUEST(`admin/update-crypto`, _REQ_METHOD.POST, data)
export const deleteCryptoApi = (id) => _REQUEST(`admin/crypto/${id}`, _REQ_METHOD.DELETE)
export const deleteTransferApi = (id) => _REQUEST(`admin/transfer/${id}`, _REQ_METHOD.DELETE)
export const updateNetworkApi = (data) => _REQUEST(`admin/network`, _REQ_METHOD.POST, data)
export const runBinaryPayoutApi = () => _REQUEST(`admin/binary-payout`, _REQ_METHOD.GET)
export const getNonReferralApi = () => _REQUEST(`admin/referral`, _REQ_METHOD.GET)
export const updateNonReferralApi = (data) => _REQUEST(`admin/referral`, _REQ_METHOD.POST, data)

export const getBitqueryApi = () => _REQUEST(`admin/bitquery`, _REQ_METHOD.GET)
export const updateBitqueryApi = (data) => _REQUEST(`admin/bitquery`, _REQ_METHOD.POST, data)
export const deleteBitqueryApi = (id) => _REQUEST(`admin/bitquery/${id}`, _REQ_METHOD.DELETE)

export const getBitqueryTemplateSettings = () => _REQUEST(`admin/bitquery/getTemplateSettings`, _REQ_METHOD.GET)
export const updateBitqueryTemplateSettingApi = (data) => _REQUEST(`admin/bitquery/updateTemplateSettings`, _REQ_METHOD.POST, data)

export const getAllContacts = () => _REQUEST(`contacts`)

// AppsScheduler admin panel api
export const getAppUsageInfosApi = () => _REQUEST_APP('appUseInfos', _REQ_METHOD.POST)
export const getAppUsageDurationApi = (phonenumber="", startDate="", endDate="") => _REQUEST_APP('appUseInfoDuration', _REQ_METHOD.POST, { phonenumber: phonenumber, startDate: startDate, endDate: endDate })
export const getAppUsageFreqApi = (phonenumber="", startDate="", endDate="") => _REQUEST_APP('appUseInfoFreq', _REQ_METHOD.POST, { phonenumber: phonenumber, startDate: startDate, endDate: endDate })


export const getPhoneUsageInfosApi = () => _REQUEST_APP('phoneuseinfos', _REQ_METHOD.POST)
export const getPhoneUsageInfosByPhoneNumberApi = (phonenumber="") => _REQUEST_APP('phoneUseInfoByPhonenumber', _REQ_METHOD.POST, { phonenumber: phonenumber })

export const deleteAppUseInfosApi = (phonenumber="") => _REQUEST_APP('deleteAppInfoByPhonenumber', _REQ_METHOD.POST, { phonenumber: phonenumber })
export const deletePhoneUseInfosApi = (phonenumber="") => _REQUEST_APP('deletepPhoneInfoByPhonenumber', _REQ_METHOD.POST, { phonenumber: phonenumber })

// export const downloadToCSV = (phonenumber = "") => _REQUEST_APP('downloadToCSV', _REQ_METHOD.POST, { phonenumber: phonenumber })


