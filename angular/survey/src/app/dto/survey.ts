type SurveyQuestion = {
    question: string;
}

export type SurveyDto = {
    title: string;
    description: string;
    questions: SurveyQuestion[];
}