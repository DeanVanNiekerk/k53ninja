import { PurchaseState, reducer } from "./reducer";

describe("state > purchase > reducer", () => {
    const defaultState: PurchaseState = {
        owned: false,
        purchaseDate: null,
        canPurchase: false,
        status: "",
        price: "",
        title: "",
        description: "",
        orderStatus: "ready",
    };

    it("should handle PURCHASE_RECIEVE_STATUS", () => {
        const actualState = reducer(defaultState, {
            type: "PURCHASE_RECIEVE_STATUS",
            payload: {
                canPurchase: true,
                status: "wow",
            },
        });

        const expectedState = {
            ...defaultState,
            canPurchase: true,
            status: "wow",
        };

        expect(actualState).toEqual(expectedState);
    });

    it("should handle PURCHASE_RECIEVE_PRODUCT", () => {
        const actualState = reducer(defaultState, {
            type: "PURCHASE_RECIEVE_PRODUCT",
            payload: {
                price: "R25",
                title: "title",
                description: "description",
            },
        });

        const expectedState = {
            ...defaultState,
            price: "R25",
            title: "title",
            description: "description",
        };

        expect(actualState).toEqual(expectedState);
    });

    it("should handle PURCHASE_RECIEVE_OWNED", () => {
        const actualState = reducer(defaultState, {
            type: "PURCHASE_RECIEVE_OWNED",
            payload: {
                owned: true,
            },
        });

        const expectedState = {
            ...defaultState,
            owned: true,
        };

        expect(actualState).toEqual(expectedState);
    });

    it("should handle PURCHASE_RECIEVE_ORDER_STATUS", () => {
        const actualState = reducer(defaultState, {
            type: "PURCHASE_RECIEVE_ORDER_STATUS",
            payload: "cancelled",
        });

        const expectedState = {
            ...defaultState,
            orderStatus: "cancelled",
        };

        expect(actualState).toEqual(expectedState);
    });
});
