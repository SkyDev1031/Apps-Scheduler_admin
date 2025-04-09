import {
    Autocomplete, Dialog, DialogActions, DialogContent,
    DialogTitle, FormControl, IconButton, InputAdornment,
    InputLabel, OutlinedInput, TextField, FormControlLabel
} from '@mui/material';
import { Button, DataTable, InputMask, InputSwitch, InputText } from 'primereact';
import { FilterMatchMode } from 'primereact/api';
import { Column } from 'primereact/column';
import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUserApi, getAppUsageDurationApi, downloadCSV, getAppUseInfosTotalApi, getAppUsageInfosByDate } from '../../api';
import { _ERROR_CODES } from '../../config';
import { useGlobalContext } from "../../contexts";
import { toast_error, toast_success } from '../../utils';
import SimpleDatePicker from '../../components/SimpleDatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { encryptParam, decryptParam } from '../../utils/cryptoUtils'

const _ACT_TYPE = {
    DEFAULT: -1,
    ADD: 0,
    EDIT: 1,
    TEXT: 2,
    PURCHASES: 3,
    WALLETS: 4,
    DELETE: 5,
    NETWORK: 6
}

const ReportAppDetails = () => {
    const navigate = useNavigate();
    const { encryptedPhoneNumber } = useParams()
    const [phonenumber, setPhonenumber] = useState('')
    const [appUsageInfos, setAppUsageInfos] = useState([])
    const [query, setQuery] = useState('')
    const { setLoading, confirmDialog } = useGlobalContext();
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const isFirstRender = useRef(true); // Create a ref to track the first render

    const getAppUsageInfos = () => {    
        setLoading(true);
        getAppUsageDurationApi(phonenumber, "", "")
            .then(res => { setAppUsageInfos(res.data) })
            .catch(err => { toast_error(err, _ERROR_CODES.NETWORK_ERROR); })
            .finally(() => setLoading(false));
    }
    const getAppUsageByDateInfos = () => {
        setLoading(true);
        getAppUsageDurationApi(phonenumber, startDate, endDate)
            .then(res => { setAppUsageInfos(res.data) })
            .catch(err => { toast_error(err, _ERROR_CODES.NETWORK_ERROR); })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false; // Update the flag after the first render
            return; // Exit the effect without executing further logic
        }
        console.log("detail Get", phonenumber)
        getAppUsageInfos();
    }, [phonenumber])

    useEffect(() => {
        setPhonenumber(decryptParam(encryptedPhoneNumber))
    }, [encryptedPhoneNumber])

    const updateSelectionData = (item) => setSelectedItem(bef => ({ ...bef, data: { ...bef.data, ...item } }));
    const initSelection = (item = {}) => setSelectedItem({ ...item });

    const handleClose = () => {
        initSelection();
    };
    const handleAction = async () => {
        const OnActions = async (data, type) => {
            if (type === _ACT_TYPE.PURCHASES) navigate(`/admin/packages/purchase/${data.id}`);
            else if (type === _ACT_TYPE.WALLETS) navigate(`/admin/wallet/${data.id}`);
            else if (type === _ACT_TYPE.NETWORK) navigate(`/admin/network/${data.id}`);
            else if (type === _ACT_TYPE.DELETE) {
                const isDelete = await confirmDialog();
                if (!isDelete) return;
                const res = await deleteUserApi(data.id)
                    .catch(err => toast_error(err, _ERROR_CODES.NETWORK_ERROR));
                if (res?.success) {
                    toast_success(res?.message)
                    getAppUsageInfos();
                }
            } else {
                initSelection({ data, visible: true, type });
            }
        }
    }
    // Function to calculate duration between 'from' and 'to'
    const addDuration = (array) => {
        return array.map(item => {
            // Parse 'from' and 'to' timestamps into Date objects
            const fromDate = new Date(item.app_last_item_used);
            const toDate = new Date(item.to);

            // Calculate the duration in milliseconds
            const durationMs = toDate - fromDate;

            // Convert duration to hours, minutes, and seconds
            const hours = Math.floor(durationMs / (1000 * 60 * 60));
            const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((durationMs % (1000 * 60)) / 1000);

            // Format each component to have two digits
            const formattedHours = String(hours).padStart(2, '0');
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');

            // Combine into "00:00:00" format
            const duration = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

            // Return the updated object with the new 'duration' property
            return {
                ...item,
                duration
            };
        });
    };
    const handleDownload = () => {
        getAppUsageDurationApi(phonenumber, startDate, endDate)
            .then(res => {
                const cleanedData = res.data.map(({ phonenumber, ...rest }) => rest);
                downloadCSV(cleanedData)
            })
            .catch(err => console.log(err))
    }
    const goFreq = () => {
        navigate(`/admin/reportApp/details2/${encryptParam(phonenumber)}`);
    }
    const onBack = () => {
        navigate(`/admin/reportApp`);
    }
    const viewByDate = () => {
        console.log(startDate)
        console.log(endDate)
        getAppUsageByDateInfos()
    }
    return (
        <>
            <h3>Show Report App Usage Duration Details</h3>
            <DataTable value={appUsageInfos} responsiveLayout="scroll" stripedRows paginator
                resizableColumns columnResizeMode="fit" showGridlines
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
                filters={{ 'global': { value: query, matchMode: FilterMatchMode.CONTAINS } }}
                header={() => (
                    <div className='d-flex'>
                        <div className="me-auto p-2">
                            <button onClick={onBack} className="btn btn-default" ><i className="fas fa-angle-double-left" /> Back</button>
                            <button onClick={getAppUsageInfos} className="btn btn-default" ><i className='fa fa-refresh' /> Reload</button>
                            <button onClick={handleDownload} className='btn btn-default' ><i className='fas fa-download' /> CSV</button>
                            <button onClick={goFreq} className='btn btn-success' ><i className='fas fa-binoculars'></i> View Frequency</button>
                        </div>
                        <div className="p-2">
                            <span className="p-input-icon-left">
                                <i className="pi pi-search" />
                                <InputText value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by keyword" />
                            </span>
                            <SimpleDatePicker
                                onChange={(newDate) => setStartDate(newDate)} // Pass a callback to handle changes
                            />
                            <SimpleDatePicker
                                onChange={(newDate) => setEndDate(newDate)} // Pass a callback to handle changes
                            />
                            <button onClick={viewByDate} className='btn btn-primary' ><i className='fa fa-refresh' /> Search</button>
                        </div>
                    </div>
                )}
            >
                <Column key={'no'} header={'No'} field={'no'} sortable body={(rowData, options) => {
                    // Calculate the index based on the current page and rows per page
                    const index = options.rowIndex + 1; // rowIndex is zero-based, so add 1
                    return <span>{index}</span>;
                }} />
                {/* <Column key={'phonenumber'} header={'PhoneNumber'} field={'phonenumber'} sortable /> */}
                <Column key={'username'} header={'UserName'} field={'username'} sortable />
                <Column key={'app_name'} header={'AppName'} field={'app_name'} sortable />
                <Column key={'app_start_time'} header={'StartTime'} field={'app_start_time'} sortable />
                <Column key={'app_end_time'} header={'EndTime'} field={'app_end_time'} sortable />
                <Column key={'app_duration'} header={'Duration'} field={'app_duration'} sortable />
                <Column key={'app_scheduled_status'} header={'ScheduledStatus'} field={'app_scheduled_status'} sortable />
                <Column key={'saved_time'} header={'SavedTime'} field={'saved_time'} sortable />
            </DataTable>
        </>
    )
}
export default ReportAppDetails;