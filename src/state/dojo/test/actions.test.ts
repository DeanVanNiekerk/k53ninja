import * as actions from "./actions";

describe("state > dojo > test > actions", () => {
    it("recieveCurrentNavigationKey", () => {
        const expectedAction = {
            type: "DOJO_TEST_RECIEVE_QUESTION_ANSWERS",
            payload: [
                {
                    answer: null,
                    question: {
                        id: "1",
                        answer: "C",
                        text: "When you only have a learner's licence you are not allowed to:",
                        option: [
                            {
                                id: "A",
                                value: "Carry passengers in your car.",
                            },
                            {
                                id: "B",
                                value: "Drive faster than 100km/h.",
                            },
                            {
                                id: "C",
                                value: "Drive without having your licence with you.",
                            },
                        ],
                    },
                },
            ],
        };

        expect(actions.recieveQuestionAnswers(expectedAction.payload)).toEqual(expectedAction);
    });
});
