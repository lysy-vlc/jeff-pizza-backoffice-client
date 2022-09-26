export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["CONFIRMED"] = "CONFIRMED";
    OrderStatus["IN_PROCESS"] = "IN_PROCESS";
    OrderStatus["IN_DELIVERY"] = "IN_DELIVERY";
    OrderStatus["CANCEL"] = "CANCEL";
})(OrderStatus || (OrderStatus = {}));
export var OrderBusinessCode;
(function (OrderBusinessCode) {
    OrderBusinessCode["PIZZA"] = "PIZZA";
})(OrderBusinessCode || (OrderBusinessCode = {}));
export var OrderType;
(function (OrderType) {
    OrderType["ASAP"] = "ASAP";
    OrderType["SCHEDULED"] = "SCHEDULED";
})(OrderType || (OrderType = {}));
export var OrderReceptionType;
(function (OrderReceptionType) {
    OrderReceptionType["PICKUP"] = "PICKUP";
    OrderReceptionType["HUB"] = "HUB";
    OrderReceptionType["DELIVER"] = "DELIVER";
    OrderReceptionType["IN_HUB"] = "IN_HUB";
})(OrderReceptionType || (OrderReceptionType = {}));
export var OrderChannel;
(function (OrderChannel) {
    OrderChannel["IOS"] = "IOS";
    OrderChannel["HUB"] = "HUB";
    OrderChannel["ANDROID"] = "ANDROID";
})(OrderChannel || (OrderChannel = {}));
