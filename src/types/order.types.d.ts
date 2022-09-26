import type { Product } from '@/types/product.types';
import type { Customer } from '@/types/customer.types';
import type { Hub } from '@/types/hub.types';
export declare enum OrderStatus {
    CONFIRMED = "CONFIRMED",
    IN_PROCESS = "IN_PROCESS",
    IN_DELIVERY = "IN_DELIVERY",
    CANCEL = "CANCEL"
}
export declare enum OrderBusinessCode {
    PIZZA = "PIZZA"
}
export declare enum OrderType {
    ASAP = "ASAP",
    SCHEDULED = "SCHEDULED"
}
export declare enum OrderReceptionType {
    PICKUP = "PICKUP",
    HUB = "HUB",
    DELIVER = "DELIVER",
    IN_HUB = "IN_HUB"
}
export declare enum OrderChannel {
    IOS = "IOS",
    HUB = "HUB",
    ANDROID = "ANDROID"
}
export declare type Order = {
    id: number;
    businessCode: OrderBusinessCode;
    number: number;
    type: OrderType;
    receptionType: OrderReceptionType;
    status: OrderStatus;
    requestedDate: string;
    scheduledDate: string;
    confirmedDate: string;
    channel: OrderChannel;
    products: Product[];
    customer: Customer;
    hub: Hub;
};
