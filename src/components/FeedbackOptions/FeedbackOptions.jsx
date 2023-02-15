import { OptionsWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <OptionsWrapper>
      <button type="button" onClick={good}>
        Good
      </button>
      <button type="button" onClick={neutral}>
        Neutral
      </button>
      <button type="button" onClick={bad}>
        Bad
      </button>
    </OptionsWrapper>
  );
};
