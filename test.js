import { dataToEnum } from '@/libs/create-enum.js';

/**
 * 0: '活动',
  1: '售后',
  2: '新人',
  3: '权益',
  4: '客情',
  5: '用户召回',
  6: '新品',
  7: '消费返券',
  8: '员工福利'
 */
export const COUPON_GROUP = dataToEnum([
  { value: 0, label: '活动', name: 'ACTIVITY' },
  { value: 1, label: '售后', name: 'AFTER_SALE' },
  { value: 2, label: '新人', name: 'NEW_COMER' },
  { value: 3, label: '权益', name: 'DISCOUNT' },
  { value: 4, label: '客情', name: 'CUSTOMER' },
  { value: 5, label: '用户召回', name: 'RECALL' },
  { value: 6, label: '新品', name: 'NEW_GOODS' },
  { value: 7, label: '消费返券', name: 'REBATE' },
  { value: 8, label: '员工福利', name: 'BENEFITS' }
]);

export const AGIO_TYPES = dataToEnum([
  { value: 1, label: '商品优惠券', name: 'GOODS' },
  { value: 2, label: '普通运费优惠券', name: 'FREIGHT' },
  { value: 3, label: '精准送运费优惠券', name: 'ACCURATE_DELIVERY' },
  { value: 4, label: '商品红包', name: 'RED_ENVELOPE' }
]);
export const SEND_MODE = dataToEnum([
  { value: 1, label: '需用户领券', name: 'RECEIVE' },
  { value: 2, label: '新人注册后立即发送', name: 'REGISTER' },
  { value: 3, label: '推荐好友下单，确认收货后立即发送', name: 'RECOMMEND' }
]);

// 预付单管理
export const PREPAID_ORDER_STATUS = dataToEnum([
  { value: 1, label: '预付审核中', name: 'AUDIT' },
  { value: 4, label: '付款审核中', name: 'APPROVAL' },
  { value: 5, label: '待付款', name: 'FOR_PAY' },
  { value: 6, label: '已完成', name: 'HAS_PAY' },
  { value: 7, label: '已作废', name: 'INVALID' }
]);
//对账单管理
export const STATEMENT_ORDER_STATUS = dataToEnum([
  { value: 1, label: '账单审核中', name: 'AUDIT' },
  { value: 6, label: '待开票', name: 'FOR_MATCH' },
  { value: 7, label: '待复核发票 ', name: 'HAS_CHECK' },
  { value: 0, label: '付款审核中', name: 'FOR_PAY_CHECK' },
  { value: 5, label: '待付款', name: 'FOR_PAY' },
  { value: 8, label: '已完成', name: 'HAS_PAY' },
  { value: 9, label: '已作废', name: 'INVALID' }
]);
//作废原因
export const STATEMENT_INVALID_STATUS = dataToEnum([


  { value: 0, label: '审核失败', name: 'HAS_CHECK' },
  { value: 1, label: '供应商驳回', name: 'FOR_PAY_CHECK' },
  { value: 2, label: '账单审核失败', name: 'FOR_PAY' },
  { value: 3, label: '撤回申请', name: 'HAS_PAY' },
  { value: 4, label: '付款审核失败', name: 'INVALID' }
]);
export const STATEMENT_PREPAID_STATUS = dataToEnum([
  { value: 0, label: '预付审核失败', name: 'HAS_CHECK' },
  { value: 1, label: '撤回申请', name: 'FOR_PAY_CHECK' },
  { value: 2, label: '付款审核失败', name: 'FOR_PAY' },
]);
//供应商确认
export const STATEMENT_SUPPLIER_STATUS = dataToEnum([
  { value: 1, label: '已通过', name: 'APPROVAL' },
  { value: 2, label: '已拒绝', name: 'FAIL' },
  { value: 3, label: '未确认', name: 'NOCOFIMER' },
]);
//预付池
export const ORIGIN_TYPE = dataToEnum([
  { value: 1, label: '预付单', name: 'PAY_ORDER' },
  { value: 2, label: '对账单', name: 'CHECK_BILL' },
  { value: 3, label: '退款单', name: 'REFUND_BILL' }
]);
// 供应商支付方式
export const PAY_TYPE = dataToEnum([
  { value: 1, label: '银行卡', name: 'BANK_CARD' },
  { value: 2, label: '现金', name: 'CASH' }
]);

// 对账单管理
export const PURCHASE_STATEMENT_STATUS = dataToEnum([
  { value: 1, label: '待审核', name: 'AUDIT' },
  { value: 2, label: '审核失败', name: 'FIL' },
  { value: 3, label: '待审批', name: 'APPROVAL' },
  { value: 4, label: '审批失败', name: 'INVOICE_MATCHED' },
  { value: 5, label: '待付款', name: 'FOR_PAY' },
  { value: 6, label: '待匹配发票', name: 'FOR_MATCH' },
  { value: 7, label: '已付款', name: 'HAS_PAY' },
  { value: 8, label: '作废', name: 'DEL' }
]);

//预付对账审核方案设置
export const PURCHASE_AUDIT = dataToEnum([
  { value: 1, label: '生鲜采购', name: 'FRESH' },
  { value: 2, label: '品牌采购', name: 'BRAND' }
]);

//应付管理
export const PAYMENT_STATUS = dataToEnum([
  { value: 3, label: '待审批', name: 'FOR_APPROVAL' },
  { value: 0, label: '已驳回', name: 'HAS_FIIL' },
  { value: 1, label: '待付款', name: 'FOR_PAY' },
  { value: 2, label: '已付款', name: 'HAS_PAY' }
]);

export const PAYMENT_TYPE = dataToEnum([
  { value: 1, label: '预付单', name: 'PAY_ORDER' },
  { value: 2, label: '对账单', name: 'CHECK_BILL' }
]);

export const REFUND_STATUS = dataToEnum([
  { value: 1, label: '待退款', name: 'FOR_REFUND' },
  { value: 2, label: '已退款', name: 'HAS_REFUND' },
  { value: 3, label: '作废', name: 'INVALID' }
]);

export const FUND_TYPE = dataToEnum([
  { value: 0, label: '消费', name: 'Consumption' },
  { value: 1, label: '订单退款', name: 'Order_Refund' },
  { value: 2, label: '充值', name: 'Recharge' },
  { value: 3, label: '余额退还', name: 'Balance' },
  { value: 4, label: '购卡', name: 'Buy_Card' }
]);

//成本变更记录
export const COST_CHANGE_STATUS = dataToEnum([
  { value: 0, label: '待审核', name: 'AUDIT' },
  { value: 1, label: '失败', name: 'FAILL' },
  { value: 2, label: '成功', name: 'SUCCESS' }
]);

//供应商管理
export const SUPPLIER_SETTLE = dataToEnum([
  { value: 0, label: '账期结算', name: 'SETTLEMENT' },
  { value: 1, label: '备用金结算', name: 'STANDBY' },
  { value: 2, label: '公对公现结', name: 'PUBLIC' },
  { value: 3, label: '私对私现结', name: 'PRIVATE' }
]);

export const SUPPLIER_FILE_STATUS = dataToEnum([
  { value: 0, label: '启用', name: 'OPEN' },
  { value: 1, label: '停用', name: 'CLOSE' }
]);
//
export const SUPPLIER_REVIEW_STATUS = dataToEnum([
  { value: 2, label: '审核中', name: 'UNDER_REVIEW' },
  { value: 3, label: '已关闭', name: 'CLOSE' }
]);
export const SUPPLIER_CONTRACT_STATUS = dataToEnum([
  { value: 0, label: '审核中', name: 'UNDER_REVIEW' },
  { value: 1, label: '待上传合同', name: 'BE_UPLOADED' },
  { value: 2, label: '已关闭', name: 'CLOSE' }
]);
export const SUPPLIER_REVIEW_TYPE = dataToEnum([
  { value: 1, label: '供应商申请', name: 'SUPPLIER_APPLICATION' },
  { value: 2, label: '合同签订', name: 'CONTRACT_SIGNED' }
]);
//供应商类型
export const SUPPLIER_TYPE = dataToEnum([
  { value: 0, label: '企业（生产商）', name: 'MANUFACTURERS' },
  { value: 1, label: '个人', name: 'PERSONAL' },
  { value: 2, label: '企业（经销商）', name: 'DEALER' }
]);

export const SUPPLIER_FILE_TYPE = dataToEnum([
  { value: 1, label: '营业执照', name: 'UNDER_REVIEW' },
  { value: 2, label: '生产许可证', name: 'BE_UPLOADED' },
  { value: 3, label: '经营许可证', name: 'CLOSE' },
  { value: 4, label: '开户许可证', name: 'CLOSE' },
  { value: 5, label: '身份证', name: 'CLOSE' }
]);

//wms-退货入库
// 入库类型
export const RETURN_WAREHOUSE_TYPE = dataToEnum([
  { value: 19, label: '退货入库', name: 'RETURN_WAREHOUSE' },
  { value: 13, label: '拒收入库', name: 'REJECT_WAREHOUSE' }
]);
// 任务类型
export const RETURN_INDEX_STATUS = dataToEnum([
  { value: 1, label: '退货', name: 'RETURN_TASK_STATUS' },
  { value: 2, label: '拒收', name: 'REJECT_TASK_STATUS' },
  { value: 3, label: '拦截', name: 'LANJIE_TASK_STATUS' }
]);
// 入库进度
export const RETURN_WAREHOUSE_PROGRESS = dataToEnum([
  { value: 0, label: '全未入库', name: 'NOT_WAREHOUSE' },
  { value: 1, label: '部分入库', name: 'PART_WAREHOUSE' },
  { value: 2, label: '全部入库', name: 'ALL_WAREHOUSE' }
]);
// 任务状态
export const RETURN_TASK_STATUS = dataToEnum([
  { value: 0, label: '正常', name: 'NORMAL' },
  { value: 2, label: '已完成', name: 'CLOSE' }
]);
// 合作模式
export const DIRECT_MODE = dataToEnum([
  { value: 1, label: '账期门店', name: 'ZHANGEQI' },
  { value: 2, label: '现结门店', name: 'XIANJIE' }
]);

//门店类型  搜索栏
export const SHOP_TYPE = dataToEnum([
  { value: 1, label: '单店', name: 'SINGLE' },
  { value: 2, label: '连锁-加盟店', name: 'CHAIN_UNION' },
  { value: 3, label: '连锁-直营店', name: 'CHAIN_DIRECT' },
  { value: 4, label: '连锁-托管店', name: 'CHAIN_CARE' },
  { value: 5, label: '连锁-未知', name: 'CHAIN_UNKNOWN' }
]);

//门店类型 表格数据
export const ENTERPRISE_SCALE = dataToEnum([
  { value: '加盟店', label: '连锁-加盟店', name: 2 },
  { value: '直营店', label: '连锁-直营店', name: 3 },
  { value: '托管店', label: '连锁-托管店', name: 4 },
  { value: '未知', label: '连锁-未知', name: 5 }
]);

//客户类型
export const CUSTOMER_TYPE = dataToEnum([
  { value: 0, label: '大客户', name: 'BIG' },
  { value: 1, label: '普通客户', name: 'COMMON' },
  { value: 2, label: '批发客户', name: 'WHOLESALER' }
]);

//门店审核类型
export const EXAMINE_TYPE = dataToEnum([
  { value: 0, label: '人工', name: 'ARTIFICIAL' },
  { value: 1, label: '系统', name: 'SYSTEM' }
]);

// 客户标签
export const CUSTOMER_LABEL = dataToEnum([
  // { value: 0, label: '月活老客户', name: 'MONTHLY_ACTIVE_OLD_CUSTOMERS' },
  // { value: 1, label: '羊场客户（月活不发券）', name: 'SHEEP_FARM_CUSTOMERS' },
  // { value: 2, label: '月活新客户', name: 'MONTHLY_ACTIVE_NEW_CUSTOMERS' },
  { value: 3, label: '619省心送目标客户', name: 'WORRY_FREE_DELIVERY_TO_TARGET_CUSTOMERS' },
  { value: 4, label: '619已付订金', name: 'DEPOSIT_PAID' },
  { value: 5, label: '619未付尾款', name: 'OUTSTANDING_BALANCES' },
  { value: 6, label: '619部分付尾款', name: 'PARTIAL_PAYMENT_OF_THE_BALANCE' },
  { value: 7, label: '619全部付尾款', name: 'PAY_THE_BALANCE_IN_FULL' },
  { value: 8, label: '售后D类客户', name: 'AFTER_SALES_CLASS_D_CUSTOMERS' }
]);

// 主营类型
export const BUSINESS_TYPE = dataToEnum([
  { value: '咖啡', label: '咖啡', name: 'COFFEE' },
  { value: '面包蛋糕', label: '面包蛋糕', name: 'BREAD_CAKE' },
  { value: '甜品冰淇淋', label: '甜品冰淇淋', name: 'DESSERT_ICE' },
  { value: '茶饮', label: '茶饮', name: 'TEA' },
  { value: '西餐', label: '西餐', name: 'WESTERN_FOOD' },
  { value: '其它', label: '其它', name: 'OTHER' }
]);

//品牌等级
export const ADMIN_GRADE = dataToEnum([
  { value: 0, label: '普通', name: 'ORDINARY' },
  { value: 1, label: 'KA', name: 'KA' }
]);

//连锁规模
export const ADMIN_CHAIN = dataToEnum([
  { value: 0, label: 'NKA(全国连锁)', name: 'NKA' },
  { value: 1, label: 'LKA(区域连锁)', name: 'LKA' },
  { value: 2, label: '其他连锁', name: 'OTHER' }
]);

// 预约状态
export const SUBSCRIBE_STATE = dataToEnum([
  { value: 0, label: '待收货', name: 'NORMAL' },
  { value: 1, label: '已完成', name: 'COMPLETED' },
  { value: 2, label: '已取消', name: 'CANCELED' },
  { value: 3, label: '已关闭', name: 'SCRAP' }
]);
export const PROCESS_STATE = dataToEnum([
  { value: 0, label: '全未入库', name: 'NOT' },
  { value: 1, label: '部分入库', name: 'PART' },
  { value: 2, label: '全部入库', name: 'WHOLE' }
]);

export const PURCHASE_STATE = dataToEnum([
  { value: 0, label: '计划制定', name: 'PLAN' },
  { value: 2, label: '待供应商确认', name: 'BE_CONFIRMED_BY_SUPPLIER' },
  { value: 1, label: '已发布', name: 'READY' },
  { value: -1, label: '作废', name: 'VOID' }
]);
export const PURCHASE_TYPE = dataToEnum([
  { value: 0, label: '普通采购', name: 'NORMAL' },
  { value: 1, label: '直发采购', name: 'QUICK' }
]);
// 采购供应商确认状态
export const SUPPLIER_CONFIRMED_STATE = dataToEnum([
  { value: 0, label: '已拒绝', name: 'REJECTED' },
  { value: 1, label: '已通过', name: 'PASSED' },
  { value: 2, label: '未确认', name: 'NOT_CONFIRMED' }
]);
// 采购价格形式
export const PURCHASE_PRICE_FORM = dataToEnum([
  { value: 0, label: '指定价', name: 'SPECIFY_THE_PRICE' },
  { value: 1, label: '报价单', name: 'QUOTATION' }
]);
//调拨单状态
export const ALLOCATION_STATUS = dataToEnum([
  { value: 0, label: '我的草稿', name: 'DRAFT' },
  { value: 1, label: '备货中', name: 'PREPARATION' },
  { value: 2, label: '待销售确认', name: 'WAIT_SALE' },
  { value: 3, label: '待运营确认', name: 'WAIT_OPERATE' },
  { value: 4, label: '待出库', name: 'WAIT_OUT_STORAGE' },
  { value: 5, label: '待入库', name: 'WAIT_IN_STORAGE' },
  { value: 6, label: '已入库', name: 'IN_STORAGE' },
  { value: 7, label: '已关闭', name: 'NOT_ALLOCATION' }
]);

//调拨单状态
export const MEMBER_GRADE = dataToEnum([
  { value: 0, label: 'V0', name: 'MEMBER_GRADE_0' },
  { value: 1, label: 'V1', name: 'MEMBER_GRADE_1' },
  { value: 2, label: 'V2', name: 'MEMBER_GRADE_2' },
  { value: 3, label: 'V3', name: 'MEMBER_GRADE_3' },
  { value: 100, label: '无', name: 'MEMBER_GRADE_NOT' }
]);

//配送星期
export const DELIVERY_FREQUENT_DATE = dataToEnum([
  { value: '0', label: '每天', name: 'EVERY_DAY' },
  { value: '1', label: '星期一', name: 'MON' },
  { value: '2', label: '星期二', name: 'TUE' },
  { value: '3', label: '星期三', name: 'WED' },
  { value: '4', label: '星期四', name: 'THU' },
  { value: '5', label: '星期五', name: 'FRI' },
  { value: '6', label: '星期六', name: 'SAT' },
  { value: '7', label: '星期天', name: 'SUN' }
]);
export const UNFINISHED_TYPE = dataToEnum([
  { value: 10, label: '调拨入库', name: 'ALLOCATE_IN_STORAGE' },
  { value: 11, label: '采购入库', name: 'PURCHASE_IN_STORAGE' },
  { value: 12, label: '退货入库', name: 'RETURN_IN_STORAGE' },
  { value: 19, label: '退货入库', name: 'TUIHUO_IN_STORAGE' },
  { value: 20, label: '缺货入库', name: 'TUIHUO_IN_QUEHUO' },
  { value: 13, label: '拒收入库', name: 'JUSHOU_IN_STORAGE' },
  { value: 56, label: '采购退货出库', name: 'CAIGOUTUOHUO_IN_STORAGE' },
  { value: 82, label: '库存转换', name: 'INVENTORY_CONVERSION' },
  { value: 50, label: '调拨出库', name: 'ALLOCATE_OUT_STORAGE' },
  { value: 51, label: '销售出库', name: 'SALE_OUT_STORAGE' },
  { value: 53, label: '货损出库', name: 'DAMAGE_OUT_STORAGE' },
  { value: 80, label: '全盘', name: 'OVERALL' },
  { value: 7, label: '循环盘点', name: 'CYCLE_INVENTORY' }
]);
// 缺货核准
export const DRIVER_LACK_TYPE = dataToEnum([
  { value: 1, label: '总仓-少发', name: 'DRIVER_LACK_SHAOFA' },
  { value: 2, label: '总仓-库存不足', name: 'DRIVER_LACK_KUCUN' },
  { value: 3, label: '总仓-发错货', name: 'DRIVER_LACK_CUOHUO' },
  { value: 4, label: '司机-误操作', name: 'DRIVER_LACK_CAOZUO' },
  { value: 5, label: '司机-配送丢失', name: 'DRIVER_LACK_DIUSHI' },
  { value: 6, label: '干线运输破损', name: 'DRIVER_LACK_GANXIAN' },
  { value: 7, label: '其它', name: 'DRIVER_LACK_QITA' }
]);

export const DRIVER_STATE_TYPE = dataToEnum([
  { value: 1, label: '待核准', name: 'DRIVER_STATE_BEFORE' },
  { value: 2, label: '待判责', name: 'DRIVER_STATE_ORDER' },
  { value: 3, label: '已完成', name: 'DRIVER_STATE_AFTER' }
]);

export const RESPONSIBLE_TYPE = dataToEnum([
  { value: 1, label: '库存仓', name: 'DRIVER_STATE_BEFORE' },
  { value: 2, label: '司机', name: 'DRIVER_STATE_ORDER' },
  { value: 3, label: '无法判责', name: 'DRIVER_STATE_AFTER' }
]);
// responsible
// 订单异常 类型

export const OPERATION_IN_STATE = dataToEnum([
  { value: 0, label: '待确认', name: 'OPERATION_IN_ONE' },
  { value: 2, label: '已确认', name: 'OPERATION_IN_STEE' }
]);

//客户类型
export const ORDER_CUSTOMER_TYPE = dataToEnum([
  { value: '大客户', label: '大客户', name: 'ORDER_BIG' },
  { value: '单店', label: '单店', name: 'ORDER_COMMON' }
]);
//补货状态
export const REPLENISH_STATUS = dataToEnum([
  { value: 1, label: '待确认', name: 'TO_BE_CONFIRMED' },
  { value: 2, label: '已发起', name: 'INITIATED' },
  { value: 3, label: '已关闭', name: 'CLOSED' }
]);
//补货类型
export const REPLENISH_TYPE = dataToEnum([
  { value: 1, label: '常规', name: 'ROUTINE' },
  { value: 2, label: '紧急', name: 'URGENT' }
]);
//SPU状态
export const SPU_STATUS = dataToEnum([
  { value: '-1', label: '全部', name: 'ALL' },
  { value: 0, label: '使用中', name: 'IN_USE' },
  { value: 1, label: '回收站', name: 'RECYCLE_BIN' }
]);
//上架状态
export const SHELVES_STATUS = dataToEnum([
  { value: 0, label: '全部', name: 'ALL' },
  { value: 1, label: '上架中', name: 'SHELVES' },
  { value: 2, label: '下架中', name: 'TAKE_IT_DOWN' }
]);

export const REPLENISHMENT_MODE = dataToEnum([
  { value: 1, label: '不定期不定量', name: 'IRREGULAR_NOT_QUANTITATIVE' },
  { value: 2, label: '定期不定量', name: 'REGULAR_NOT_QUANTITATIVE' },
  { value: 3, label: '不定期定量', name: 'IRREGULAR_QUANTITATION' },
  { value: 4, label: '定期定量', name: 'REGULAR_QUANTIFICATION' }
]);

export const PERIODIC_TIME = dataToEnum([
  { value: 1, label: '每周一', name: 'EVERY_MONDAY' },
  { value: 2, label: '每周二', name: 'EVERY_TUESDAY' },
  { value: 3, label: '每周三', name: 'EVERY_WEDNESDAY' },
  { value: 4, label: '每周四', name: 'EVERY_THURSDAY' },
  { value: 5, label: '每周五', name: 'EVERY_FRIDAY' },
  { value: 6, label: '每周六', name: 'EVERY_SATURDAY' },
  { value: 7, label: '每周日', name: 'EVERY_SUNDAY' }
]);

export const PERIODIC_TIME1 = dataToEnum([
  { value: 1, label: '周一', name: 'EVERY_MONDAY' },
  { value: 2, label: '周二', name: 'EVERY_TUESDAY' },
  { value: 3, label: '周三', name: 'EVERY_WEDNESDAY' },
  { value: 4, label: '周四', name: 'EVERY_THURSDAY' },
  { value: 5, label: '周五', name: 'EVERY_FRIDAY' },
  { value: 6, label: '周六', name: 'EVERY_SATURDAY' },
  { value: 7, label: '周日', name: 'EVERY_SUNDAY' }
]);
// 截单任务查看配送状态
export const PATHSTATUS_TYPE = dataToEnum([
  { value: 0, label: '待捡货', name: 'PATHSTATUS_PICK' },
  { value: 1, label: '配送中', name: 'PATHSTATUS_IN_DELIVERY' },
  { value: 2, label: '完成配送', name: 'PATHSTATUS_OVER_DELIVERY' },
  { value: 3, label: '待回收', name: 'PATHSTATUS_IN_RECYCLE' },
  { value: 4, label: '回收完成', name: 'PATHSTATUS_OVER_RECYCLE' },
  { value: 5, label: '拦截关闭', name: 'PATHSTATUS_OFF_INTERCEPT' }
]);

export const CYCLE_TYPE = dataToEnum([
  { value: 1, label: '每周', name: 'EVERY_MONDAY' },
  { value: 2, label: '每两周', name: 'EVERY_TUESDAY' }
]);
// 签收围栏状态
export const SIGN_FOR_STATE = dataToEnum([
  { value: 0, label: '正常', name: 'NORMAL' },
  { value: 1, label: '暂停', name: 'PAUSE' }
]);

// 签收围栏距离
export const SIGN_FOR_DISTANCE = dataToEnum([
  { value: 1, label: '1公里', name: 'ONE' },
  { value: 1.5, label: '1.5公里', name: 'ONE1' },
  { value: 2, label: '2公里', name: 'TOW' },
  { value: 2.5, label: '2.5公里', name: 'TOW1' },
  { value: 3, label: '3公里', name: 'THREE' }
]);
// MONITOR_STATUS
export const MONITOR_STATUS = dataToEnum([
  { value: 0, label: '正常', name: 'MONITOR_STATUS_FIRST' },
  { value: 1, label: '预警', name: 'MONITOR_STATUS_SEACT' },
]);

// 团购

export const GROUP_BUY_STATUS = dataToEnum([
  { value: 0, label: '已结束', name: 'END' },
  { value: 1, label: '生效中', name: 'IN_EFFECT' },
  { value: 2, label: '待生效', name: 'ON_READY' }
]);

export const COPY_SERVICE_STATUS = dataToEnum([
  { value: 0, label: '确认中', name: 'CONFIRM' },
  { value: 1, label: '执行中', name: 'EXECUTE' },
  { value: 2, label: '已生效', name: 'IN_EFFECT' }
])

// 圈人2.0

export const CIRCLE_DATA_STATUS = dataToEnum([
  { value: 0, label: '数据初始化', name: 'DATA_INIT' },
  { value: 1, label: '数据更新成功', name: 'DATA_SUCCESS' },
  { value: 2, label: '数据更新失败', name: 'DATA_FAILED' },
  { value: 3, label: '数据初始化失败', name: 'INIT_FAILED' }
])

export const CIRCLE_UPDATE_WAY = dataToEnum([
  { label: '不支持', value: 0, name: 'NOT_SUPPORT' },
  { label: '自动', value: 1, name: 'AUTO' },
  { label: '手动', value: 2, name: 'MANUAL' },
])

export const CIRCLE_CREATE_WAY = dataToEnum([
  { label: '在线圈选', value: 0, name: 'ONLINE' },
  { label: 'EXCEL导入', value: 1, name: 'EXCEL' }
])
// 城配管理 开放状态

export const LOGISTICS_STATUS = dataToEnum([
  { value: 0, label: '未开放', name: 'NO_STATUS' },
  { value: 1, label: '开放', name: 'YES_STATUS' },
  { value: 1, label: '设置', name: 'YSEETING' },
]);

export const STOP_DELIVERY_STATUS = dataToEnum([
  { value: 0, label: '未设置', name: 'NO_SEETING' },
  { value: 2, label: '已完成', name: 'OVER_SEETING' }
]);

// 车型
export const VEHICLE_CAR_TYPE = dataToEnum([
  { value: 0, label: '小面包车', name: 'CAR_SAM' },
  { value: 1, label: '中面包车', name: 'CAR_MAP' },
  { value: 2, label: '依', name: 'CAR_BIG' },
  { value: 3, label: '小型货车', name: 'CAR_YI' },
  { value: 4, label: '4.2米', name: 'CAR_MALL' },
  { value: 5, label: '6.8米', name: 'CAR_CAN' },
  { value: 6, label: '7.6米', name: 'CAR_HEI' },
  { value: 7, label: '9.6米', name: 'CAR_LIN' },
  { value: 8, label: '13.5米', name: 'CAR_SCM' },
  { value: 9, label: '17.5米', name: 'CAR_CAT' },
]);
// 车辆状态
export const VEHICLE_CAR_STATUS = dataToEnum([
  { value: 0, label: '有效', name: 'CAR_STATUS_NEED' },
  { value: 1, label: '无效', name: 'CAR_STATUS_NONEED' }
]);
// 车辆归属
export const VEHICLE_CAR_ADDRESS = dataToEnum([
  { value: 0, label: '京', name: 'CAR_ADDRESS_JING' },
  { value: 1, label: '津', name: 'CAR_ADDRESS_JIN' },
  { value: 2, label: '沪', name: 'CAR_ADDRESS_HU' },
  { value: 3, label: '渝', name: 'CAR_ADDRESS_YU' },
  { value: 4, label: '宁', name: 'CAR_ADDRESS_NING' },
  { value: 5, label: '新', name: 'CAR_ADDRESS_XIN' },
  { value: 6, label: '藏', name: 'CAR_ADDRESS_ZANG' },
  { value: 7, label: '桂', name: 'CAR_ADDRESS_GUI' },
  { value: 8, label: '蒙', name: 'CAR_ADDRESS_MENG' },
  { value: 9, label: '辽', name: 'CAR_ADDRESS_NING' },
  { value: 10, label: '吉', name: 'CAR_ADDRESS_JI' },
  { value: 11, label: '黑', name: 'CAR_ADDRESS_HEI' },
  { value: 12, label: '冀', name: 'CAR_ADDRESS_JI' },
  { value: 13, label: '晋', name: 'CAR_ADDRESS_JINS' },
  { value: 14, label: '苏', name: 'CAR_ADDRESS_SU' },
  { value: 15, label: '浙', name: 'CAR_ADDRESS_ZHE' },
  { value: 16, label: '皖', name: 'CAR_ADDRESS_WAN' },
  { value: 17, label: '闽', name: 'CAR_ADDRESS_MIN' },
  { value: 18, label: '赣', name: 'CAR_ADDRESS_GAN' },
  { value: 19, label: '鲁', name: 'CAR_ADDRESS_LU' },
  { value: 20, label: '豫', name: 'CAR_ADDRESS_YUS' },
  { value: 21, label: '鄂', name: 'CAR_ADDRESS_E' },
  { value: 22, label: '湘', name: 'CAR_ADDRESS_XIANG' },
  { value: 23, label: '粵', name: 'CAR_ADDRESS_YU' },
  { value: 24, label: '琼', name: 'CAR_ADDRESS_QIONG' },
  { value: 25, label: '川', name: 'CAR_ADDRESS_CHUAN' },
  { value: 26, label: '贵', name: 'CAR_ADDRESS_GUIS' },
  { value: 27, label: '云', name: 'CAR_ADDRESS_YUN' },
  { value: 28, label: '陕', name: 'CAR_ADDRESS_SANG' },
  { value: 29, label: '甘', name: 'CAR_ADDRESS_GANS' },
  { value: 30, label: '青', name: 'CAR_ADDRESS_QING' }
]);

// 合作周期
export const COOPERATION_CYCLE = dataToEnum([
  { value: 1, label: '长期', name: 'DRIVER_PERIOD_LONG' },
  { value: 0, label: '临时', name: 'DRIVER_PERIOD_LINE' }
]);
export const DRIVER_STATE = dataToEnum([
  { value: 0, label: '有效', name: 'DRIVER_STATE_LONG' },
  { value: 1, label: '无效', name: 'DRIVER_STATE_LINE' }
]);

// Business type
export const BUSINESS_TMS_TYPE = dataToEnum([
  { value: 0, label: '干线', name: 'BUSINESS_TMS_TYPE_VEHICLE' },
  { value: 1, label: '城配', name: 'BUSINESS_TMS_TYPE_DRIVER' }
]);


// businessType
export const BUSINESS_TYPE_TMS = dataToEnum([
  { value: 0, label: '干线', name: 'BUSINESS_TYPE_TMS_ONE' },
  { value: 1, label: '城配', name: 'BUSINESS_TYPE_TMS_TWO' },
  { value: 2, label: '干线，城配', name: 'BUSINESS_TYPE_TMS_TREE' }
]);
// 打卡城配仓
export const PUNCHSTATE_TYPE = dataToEnum([
  { value: 0, label: '关闭', name: 'PUNCHSTATE_TYPE_ONE' },
  { value: 1, label: '开启', name: 'PUNCHSTATE_TYPE_TWO' },
]);


// 售后
export const AFTER_SALE_HANDLE_TYPE = dataToEnum([
  { label: '录入账单', value: 3 },
  { label: '返券', value: 0 },
  { label: '退款', value: 2 },
  { label: '退货退款', value: 4 },
  { label: '换货', value: 6 },
  { label: '补发', value: 7 },
  { label: '退货录入账单', value: 5 },
  { label: '拒收退款', value: 9 },
  { label: '拒收录入账单', value: 10 }
])
