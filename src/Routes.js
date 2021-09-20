import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Loader from './component/Loader/Loader';
import NavMotion from './layout/NavMotion';
import MainLayout from './layout/MainLayout';
import GuestGuard from './component/Auth/GuestGuard';
import AuthGuard from './component/Auth/AuthGuard';
import MinimalLayout from './layout/MinimalLayout';

const AuthLogin = lazy(() => import('./views/Login'));
const AuthRegister = lazy(() => import('./views/Register'));
const AuthForgotPassword = lazy(() => import('./views/ForgotPassword'));


const DashboardDefault = lazy(() => import('./views/Dashboard/Default'));

const WidgetStatistic = lazy(() => import('./views/Widget/Statistic'));
const WidgetData = lazy(() => import('./views/Widget/Data'));
const WidgetChart = lazy(() => import('./views/Widget/Chart'));

const RtlLayout = lazy(() => import('./views/RtlLayout'));

const UserCard = lazy(() => import('./views/User/Card'));
const UserAccount = lazy(() => import('./views/User/Account'));

const UserList = lazy(() => import('./views/User/List'));
const UserProfile = lazy(() => import('./views/User/Profile'));
const UserSocialProfile = lazy(() => import('./views/User/Socialprofile'));

const EcommerceAccount = lazy(() => import('./views/Application/Ecommerce/Account'));
const EcommerceProduct = lazy(() => import('./views/Application/Ecommerce/Product'));
const EcommerceCustomerlist = lazy(() => import('./views/Application/Ecommerce/Customerlist'));
const EcommerceOrderlist = lazy(() => import('./views/Application/Ecommerce/Orderlist'));
const EcommerceOrderdetails = lazy(() => import('./views/Application/Ecommerce/Orderdetails'));
const EcommerceAddProduct = lazy(() => import('./views/Application/Ecommerce/Addproduct'));
const EcommerceProductReview = lazy(() => import('./views/Application/Ecommerce/Productreview'));

const ContactsList = lazy(() => import('./views/Application/Contacts/List'));
const ContactsCard = lazy(() => import('./views/Application/Contacts/Card'));

const Error1 = lazy(() => import('./views/Pages/Error/Error1'));
const Error2 = lazy(() => import('./views/Pages/Error/Error2'));
const Comingsoon = lazy(() => import('./views/Pages/Comingsoon'));

const Mail = lazy(() => import('./views/Application/Mail'));
const Chat = lazy(() => import('./views/Application/Chat'));

const FullCalendar = lazy(() => import('./views/Application/FullCalendar'));

const Price1 = lazy(() => import('./views/Application/Price/Price1'));
const Price2 = lazy(() => import('./views/Application/Price/Price2'));
const Price3 = lazy(() => import('./views/Application/Price/Price3'));

const BasicUIAccordion = lazy(() => import('./views/Elements/Basic/UIAccordion'));
const BasicUIAvatar = lazy(() => import('./views/Elements/Basic/UIAvatar'));
const BasicUIBadges = lazy(() => import('./views/Elements/Basic/UIBadges'));
const BasicUIBreadcrumb = lazy(() => import('./views/Elements/Basic/UIBreadcrumb'));
const BasicUICards = lazy(() => import('./views/Elements/Basic/UICards'));
const BasicUIChip = lazy(() => import('./views/Elements/Basic/UIChip'));
const BasicUIList = lazy(() => import('./views/Elements/Basic/UIList'));
const BasicUITabs = lazy(() => import('./views/Elements/Basic/UITabs'));

const AdvanceUIAlert = lazy(() => import('./views/Elements/Advance/UIAlert'));
const AdvanceUIDialog = lazy(() => import('./views/Elements/Advance/UIDialog'));
const AdvanceUIPagination = lazy(() => import('./views/Elements/Advance/UIPagination'));
const AdvanceUIProgress = lazy(() => import('./views/Elements/Advance/UIProgress'));
const AdvanceUIRating = lazy(() => import('./views/Elements/Advance/UIRating'));
const AdvanceUISnackbar = lazy(() => import('./views/Elements/Advance/UISnackbar'));
const AdvanceUISpeeddial = lazy(() => import('./views/Elements/Advance/UISpeeddial'));
const AdvanceUITimeline = lazy(() => import('./views/Elements/Advance/UITimeline'));
const AdvanceUIToggleButton = lazy(() => import('./views/Elements/Advance/UIToggleButton'));
const AdvanceUITreeview = lazy(() => import('./views/Elements/Advance/UITreeview'));

const FrmAutocomplete = lazy(() => import('./views/Forms/FrmAutocomplete'));
const FrmButton = lazy(() => import('./views/Forms/FrmButton'));
const FrmCheckbox = lazy(() => import('./views/Forms/FrmCheckbox'));
const FrmDatetime = lazy(() => import('./views/Forms/FrmDatetime'));
const FrmListbox = lazy(() => import('./views/Forms/FrmListbox'));
const FrmRadio = lazy(() => import('./views/Forms/FrmRadio'));
const FrmSelect = lazy(() => import('./views/Forms/FrmSelect'));
const FrmSlider = lazy(() => import('./views/Forms/FrmSlider'));
const FrmSwitch = lazy(() => import('./views/Forms/FrmSwitch'));
const FrmTextField = lazy(() => import('./views/Forms/FrmTextField'));

const TableBasic = lazy(() => import('./views/Tables/TableBasic'));
const DenseTable = lazy(() => import('./views/Tables/DenseTable'));
const EnhancedTable = lazy(() => import('./views/Tables/EnhancedTable'));
const DataTable = lazy(() => import('./views/Tables/DataTable'));
const CustomizedTables = lazy(() => import('./views/Tables/CustomizedTables'));
const StickyHeadTable = lazy(() => import('./views/Tables/StickyHeadTable'));
const CollapsibleTable = lazy(() => import('./views/Tables/CollapsibleTable'));

const MUITableSimple = lazy(() => import('./views/MUIDatatables/simple'));
const MUITableColumnFilters = lazy(() => import('./views/MUIDatatables/column-filters'));
const MUITableColumnOptionsUpdate = lazy(() => import('./views/MUIDatatables/column-options-update'));
const MUITableColumnSort = lazy(() => import('./views/MUIDatatables/column-sort'));
const MUITableColumnComponent = lazy(() => import('./views/MUIDatatables/component'));
const MUITableCSVExport = lazy(() => import('./views/MUIDatatables/csv-export'));
const MUITableCustomActionColumn = lazy(() => import('./views/MUIDatatables/custom-action-columns'));
const MUITableCustomComponents = lazy(() => import('./views/MUIDatatables/custom-components'));
const MUITableCustomizeColumns = lazy(() => import('./views/MUIDatatables/customize-columns'));
const MUITableCustomizeFilter = lazy(() => import('./views/MUIDatatables/customize-filter'));
const MUITableDraggableColumns = lazy(() => import('./views/MUIDatatables/draggable-columns'));
const MUITableExpandableRows = lazy(() => import('./views/MUIDatatables/expandable-rows'));
const MUITableFixedHeader = lazy(() => import('./views/MUIDatatables/fixed-header'));
const MUITableResizableColumns = lazy(() => import('./views/MUIDatatables/resizable-columns'));
const MUITableSelectableRows = lazy(() => import('./views/MUIDatatables/selectable-rows'));

const UtilsModal = lazy(() => import('./views/Utils/Modal'));
const UtilsTooltip = lazy(() => import('./views/Utils/Tooltip'));
const UtilsPopover = lazy(() => import('./views/Utils/Popover'));
const UtilsPopper = lazy(() => import('./views/Utils/Popper'));
const UtilsTransitions = lazy(() => import('./views/Utils/Transitions'));
const UtilsIcons = lazy(() => import('./views/Utils/Icons'));
const UtilsTypography = lazy(() => import('./views/Utils/Typography'));

const SamplePage = lazy(() => import('./views/SamplePage'));
const MultiLanguage = lazy(() => import('./views/MultiLanguage'));

const Routes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Redirect exact from="/" to="/dashboard/default" />
                    <Route path={['/register', '/application/register', '/forgot-password', '/application/forgot-password', '/application/login', '/pages/error/error1', '/pages/error/error2', '/pages/comingsoon']}>
                        <MinimalLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion>
                                    <Route path="/application/login" component={AuthLogin} />
                                    <Route path="/application/register" component={AuthRegister} />
                                    <Route path="/register" component={AuthRegister} />
                                    <Route path="/application/forgot-password" component={AuthForgotPassword} />
                                    <Route path="/forgot-password" component={AuthForgotPassword} />
                                    <Route path="/pages/error/error1" component={Error1} />
                                    <Route path="/pages/error/error2" component={Error2} />
                                    <Route path="/pages/comingsoon" component={Comingsoon} />
                                </NavMotion>
                            </Switch>
                        </MinimalLayout>
                    </Route>
                    <Route path={['/login']}>
                        <MinimalLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion>
                                    <GuestGuard>
                                        <Route path="/login" component={AuthLogin} />
                                    </GuestGuard>
                                </NavMotion>
                            </Switch>
                        </MinimalLayout>
                    </Route>
                    <Route
                        path={[
                            '/dashboard/default',
                            '/widget/statistic',
                            '/widget/data',
                            '/widget/chart',
                            '/rtl',
                            '/user/account',
                            '/user/card',
                            '/user/list',
                            '/user/profile',
                            '/user/socialprofile',
                            '/application/ecommerce/account',
                            '/application/ecommerce/addproduct',
                            '/application/ecommerce/product',
                            '/application/ecommerce/customerlist',
                            '/application/ecommerce/orderlist',
                            '/application/ecommerce/orderdetails',
                            '/application/ecommerce/productreview',
                            '/application/contacts/list',
                            '/application/contacts/card',
                            '/application/price/price1',
                            '/application/price/price2',
                            '/application/price/price3',
                            '/application/mail',
                            '/application/chat',
                            '/application/full-calendar',
                            '/basic/accordion',
                            '/basic/avatar',
                            '/basic/badges',
                            '/basic/breadcrumb',
                            '/basic/cards',
                            '/basic/chip',
                            '/basic/list',
                            '/basic/tabs',
                            '/advance/alert',
                            '/advance/dialog',
                            '/advance/pagination',
                            '/advance/progress',
                            '/advance/rating',
                            '/advance/snackbar',
                            '/advance/speeddial',
                            '/advance/timeline',
                            '/advance/toggle-button',
                            '/advance/treeview',
                            '/forms/frm-autocomplete',
                            '/forms/frm-button',
                            '/forms/frm-checkbox',
                            '/forms/frm-datetime',
                            '/forms/frm-listbox',
                            '/forms/frm-radio',
                            '/forms/frm-select',
                            '/forms/frm-slider',
                            '/forms/frm-switch',
                            '/forms/frm-text-field',
                            '/tables/table-basic',
                            '/tables/dense-table',
                            '/tables/enhanced-table',
                            '/tables/data-table',
                            '/tables/customized-table',
                            '/tables/sticky-header-table',
                            '/tables/collapse-table',
                            '/mui-datatables/mui-simple',
                            '/mui-datatables/mui-column-filters',
                            '/mui-datatables/mui-column-options-update',
                            '/mui-datatables/mui-column-sort',
                            '/mui-datatables/mui-component-edit',
                            '/mui-datatables/mui-csv-export',
                            '/mui-datatables/mui-custom-action-button',
                            '/mui-datatables/mui-custom-components',
                            '/mui-datatables/mui-customize-columns',
                            '/mui-datatables/mui-customize-filter',
                            '/mui-datatables/mui-draggable-columns',
                            '/mui-datatables/mui-expandable-rows',
                            '/mui-datatables/mui-fixed-header',
                            '/mui-datatables/mui-resizable-columns',
                            '/mui-datatables/mui-selectable-rows',
                            '/utils/util-modal',
                            '/utils/util-tooltip',
                            '/utils/util-popover',
                            '/utils/util-popper',
                            '/utils/util-transitions',
                            '/utils/util-icons',
                            '/utils/util-typography',
                            '/sample-page',
                            '/multi-language',
                        ]}
                    >
                        <MainLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion>
                                    <AuthGuard>
                                        <Route path="/dashboard/default" component={DashboardDefault} />
                                        <Route path="/widget/statistic" component={WidgetStatistic} />
                                        <Route path="/widget/data" component={WidgetData} />
                                        <Route path="/widget/chart" component={WidgetChart} />
                                        <Route path="/rtl" component={RtlLayout} />
                                        <Route path="/user/account" component={UserAccount} />
                                        <Route path="/user/card" component={UserCard} />
                                        <Route path="/user/list" component={UserList} />
                                        <Route path="/user/profile" component={UserProfile} />
                                        <Route path="/user/socialprofile" component={UserSocialProfile} />
                                        <Route path="/application/ecommerce/account" component={EcommerceAccount} />
                                        <Route path="/application/ecommerce/product" component={EcommerceProduct} />
                                        <Route path="/application/ecommerce/customerlist" component={EcommerceCustomerlist} />
                                        <Route path="/application/ecommerce/orderlist" component={EcommerceOrderlist} />
                                        <Route path="/application/ecommerce/orderdetails" component={EcommerceOrderdetails} />
                                        <Route path="/application/ecommerce/addproduct" component={EcommerceAddProduct} />
                                        <Route path="/application/ecommerce/productreview" component={EcommerceProductReview} />
                                        <Route path="/application/contacts/list" component={ContactsList} />
                                        <Route path="/application/contacts/card" component={ContactsCard} />
                                        <Route path="/application/mail" component={Mail} />
                                        <Route path="/application/chat" component={Chat} />
                                        <Route path="/application/full-calendar" component={FullCalendar} />
                                        <Route path="/application/price/price1" component={Price1} />
                                        <Route path="/application/price/price2" component={Price2} />
                                        <Route path="/application/price/price3" component={Price3} />
                                        <Route path="/basic/accordion" component={BasicUIAccordion} />
                                        <Route path="/basic/avatar" component={BasicUIAvatar} />
                                        <Route path="/basic/badges" component={BasicUIBadges} />
                                        <Route path="/basic/breadcrumb" component={BasicUIBreadcrumb} />
                                        <Route path="/basic/cards" component={BasicUICards} />
                                        <Route path="/basic/chip" component={BasicUIChip} />
                                        <Route path="/basic/list" component={BasicUIList} />
                                        <Route path="/basic/tabs" component={BasicUITabs} />
                                        <Route path="/advance/alert" component={AdvanceUIAlert} />
                                        <Route path="/advance/dialog" component={AdvanceUIDialog} />
                                        <Route path="/advance/pagination" component={AdvanceUIPagination} />
                                        <Route path="/advance/progress" component={AdvanceUIProgress} />
                                        <Route path="/advance/rating" component={AdvanceUIRating} />
                                        <Route path="/advance/snackbar" component={AdvanceUISnackbar} />
                                        <Route path="/advance/speeddial" component={AdvanceUISpeeddial} />
                                        <Route path="/advance/timeline" component={AdvanceUITimeline} />
                                        <Route path="/advance/toggle-button" component={AdvanceUIToggleButton} />
                                        <Route path="/advance/treeview" component={AdvanceUITreeview} />
                                        <Route path="/forms/frm-autocomplete" component={FrmAutocomplete} />
                                        <Route path="/forms/frm-button" component={FrmButton} />
                                        <Route path="/forms/frm-checkbox" component={FrmCheckbox} />
                                        <Route path="/forms/frm-datetime" component={FrmDatetime} />
                                        <Route path="/forms/frm-listbox" component={FrmListbox} />
                                        <Route path="/forms/frm-radio" component={FrmRadio} />
                                        <Route path="/forms/frm-select" component={FrmSelect} />
                                        <Route path="/forms/frm-slider" component={FrmSlider} />
                                        <Route path="/forms/frm-switch" component={FrmSwitch} />
                                        <Route path="/forms/frm-text-field" component={FrmTextField} />
                                        <Route path="/tables/table-basic" component={TableBasic} />
                                        <Route path="/tables/dense-table" component={DenseTable} />
                                        <Route path="/tables/enhanced-table" component={EnhancedTable} />
                                        <Route path="/tables/data-table" component={DataTable} />
                                        <Route path="/tables/customized-table" component={CustomizedTables} />
                                        <Route path="/tables/sticky-header-table" component={StickyHeadTable} />
                                        <Route path="/tables/collapse-table" component={CollapsibleTable} />
                                        <Route path="/mui-datatables/mui-simple" component={MUITableSimple} />
                                        <Route path="/mui-datatables/mui-column-filters" component={MUITableColumnFilters} />
                                        <Route path="/mui-datatables/mui-column-options-update" component={MUITableColumnOptionsUpdate} />
                                        <Route path="/mui-datatables/mui-component-edit" component={MUITableColumnComponent} />
                                        <Route path="/mui-datatables/mui-column-sort" component={MUITableColumnSort} />
                                        <Route path="/mui-datatables/mui-csv-export" component={MUITableCSVExport} />
                                        <Route path="/mui-datatables/mui-custom-action-button" component={MUITableCustomActionColumn} />
                                        <Route path="/mui-datatables/mui-custom-components" component={MUITableCustomComponents} />
                                        <Route path="/mui-datatables/mui-customize-columns" component={MUITableCustomizeColumns} />
                                        <Route path="/mui-datatables/mui-customize-filter" component={MUITableCustomizeFilter} />
                                        <Route path="/mui-datatables/mui-draggable-columns" component={MUITableDraggableColumns} />
                                        <Route path="/mui-datatables/mui-expandable-rows" component={MUITableExpandableRows} />
                                        <Route path="/mui-datatables/mui-fixed-header" component={MUITableFixedHeader} />
                                        <Route path="/mui-datatables/mui-resizable-columns" component={MUITableResizableColumns} />
                                        <Route path="/mui-datatables/mui-selectable-rows" component={MUITableSelectableRows} />
                                        <Route path="/utils/util-modal" component={UtilsModal} />
                                        <Route path="/utils/util-tooltip" component={UtilsTooltip} />
                                        <Route path="/utils/util-popover" component={UtilsPopover} />
                                        <Route path="/utils/util-popper" component={UtilsPopper} />
                                        <Route path="/utils/util-transitions" component={UtilsTransitions} />
                                        <Route path="/utils/util-icons" component={UtilsIcons} />
                                        <Route path="/utils/util-typography" component={UtilsTypography} />
                                        <Route path="/sample-page" component={SamplePage} />
                                        <Route path="/multi-language" component={MultiLanguage} />
                                    </AuthGuard>
                                </NavMotion>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
