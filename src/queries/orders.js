import { gql } from 'graphql-tag';
export const orderCreated = `
  subscription orderCreated {
    orderCreated {
      id
      businessCode
      number
      type
      receptionType
      status
      requestedDate
      scheduledDate
      confirmedDate
      channel
      customer {
        email
        id
        name
        lastName
        phoneNumber
        locale
        elegibleCoupon
        coupon
      }
      hub {
        id
        name
        code
        address
        addressNumber
        addressLocationLatitude
        addressLocationLongitude
      }
      products {
        id
        code
        reservationType
        name
        description
      }
    }
  }
`;
export const OrderStatusChanged = `
  subscription orderStatusChanged {
    orderStatusChanged {
      id
      businessCode
      number
      type
      receptionType
      status
      requestedDate
      scheduledDate
      confirmedDate
      channel
      customer {
        email
        id
        name
        lastName
        phoneNumber
        locale
        elegibleCoupon
        coupon
      }
      hub {
        id
        name
        code
        address
        addressNumber
        addressLocationLatitude
        addressLocationLongitude
      }
      products {
        id
        code
        reservationType
        name
        description
      }
    }
  }
`;
export const UpdateOrderStatus = gql `
  mutation UpdateOrderStatus (
    $id: Int!
    $status: String!
  ) { 
    updateOrderStatus(updateOrderStatusInput: {
      id: $id
      status: $status
    }) {
      id
      businessCode
      number
      type
      receptionType
      status
      requestedDate
      scheduledDate
      confirmedDate
      channel
      customer {
        email
        id
        name
        lastName
        phoneNumber
        locale
        elegibleCoupon
        coupon
      }
      hub {
        id
        name
        code
        address
        addressNumber
        addressLocationLatitude
        addressLocationLongitude
      }
      products {
        id
        code
        reservationType
        name
        description
      }
    }
  }
`;
export const UpdateOrder = gql `
  mutation UpdateOrder (
    $id: Int!
    $businessCode: OrderBusinessCode!
    $type: OrderType!
    $receptionType: OrderReceptionType!
    $status: OrderStatus!
    $requestedDate: DateTime!
    $scheduledDate: DateTime!
    $confirmedDate: DateTime!
    $channel: OrderChannel!
    $customer: Int!
    $hub: Int!
    $products: [Int!]!
  ) {
    updateOrder(updateOrderInput: {
      id: $id
      businessCode: $businessCode,
      type: $type,
      receptionType: $receptionType,
      status: $status,
      requestedDate: $requestedDate,
      scheduledDate: $scheduledDate,
      confirmedDate: $confirmedDate,
      channel: $channel,
      customer: $customer,
      hub: $hub,
      products: $products
    }) {
      id
      businessCode
      number
      type
      receptionType
      status
      requestedDate
      scheduledDate
      confirmedDate
      channel
      customer {
        email
        id
        name
        lastName
        phoneNumber
        locale
        elegibleCoupon
        coupon
      }
      hub {
        id
        name
        code
        address
        addressNumber
        addressLocationLatitude
        addressLocationLongitude
      }
      products {
        id
        code
        reservationType
        name
        description
      }
    }
  }
`;
export const GetOrders = gql `
  query {
    orders {
      id
      businessCode
      number
      type
      receptionType
      status
      requestedDate
      scheduledDate
      confirmedDate
      channel
      customer {
        email
        id
        name
        lastName
        phoneNumber
        locale
        elegibleCoupon
        coupon
      }
      hub {
        id
        name
        code
        address
        addressNumber
        addressLocationLatitude
        addressLocationLongitude
      }
      products {
        id
        code
        reservationType
        name
        description
      }
    }
  }
`;
