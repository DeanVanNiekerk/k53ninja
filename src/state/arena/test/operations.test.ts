import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { QuestionData, QuestionItem } from "@/data";

import { loadQuestionAnswers, recieveQuestionAnswers } from "./";
import { QuestionAnswer } from "./types";

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe("state > arena > test > operations", () => {
    const questions: QuestionItem[] = Array.from(new Array(10), (q, n) => ({
        id: `${n}`,
        answer: "B",
        text: `Question ${n}:`,
        option: [
            {
                id: "A",
                value: "Answer A.",
            },
            {
                id: "B",
                value: "Answer B.",
            },
        ],
    }));

    const questionData: QuestionData = {
        "nav.vehicleControls": [questions[0], questions[1]],
        "nav.rulesOfTheRoad": [questions[2]],
        "nav.rulesOfTheRoad.child1": [questions[3], questions[4], questions[5], questions[6]],
        "nav.roadMarkings": [questions[7], questions[8], questions[9]],
    };

    it("loadQuestionAnswers", () => {
        const store = mockStore({
            questions: {
                questionData: questionData,
            },
            arena: {
                test: { questionAnswers: [] },
            },
        });

        store.dispatch(loadQuestionAnswers());

        const actions = store.getActions();

        expect(actions.length).toEqual(1);

        const questionAnswers: QuestionAnswer[] = [
            {
                section: "A",
                answer: null,
                question: questions[0],
            },
            {
                section: "A",
                answer: null,
                question: questions[1],
            },
            {
                section: "B",
                answer: null,
                question: questions[2],
            },
            {
                section: "B",
                answer: null,
                question: questions[3],
            },
            {
                section: "B",
                answer: null,
                question: questions[4],
            },
            {
                section: "B",
                answer: null,
                question: questions[5],
            },
            {
                section: "B",
                answer: null,
                question: questions[6],
            },
            {
                section: "C",
                answer: null,
                question: questions[7],
            },
            {
                section: "C",
                answer: null,
                question: questions[8],
            },
            {
                section: "C",
                answer: null,
                question: questions[9],
            },
        ];

        expect(actions[0].type).toEqual("ARENA_TEST_RECIEVE_QUESTION_ANSWERS");
        expect(actions[0].payload.length).toEqual(10);

        expect(actions[0].payload).toEqual(
            jasmine.arrayContaining(recieveQuestionAnswers(questionAnswers).payload)
        );
    });
});
